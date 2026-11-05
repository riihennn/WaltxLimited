"use client";

import { useEffect, useRef } from "react";

interface ConstellationCanvasProps {
  className?: string;
  isDark?: boolean;
  dotColor?: string; // Hex (e.g. "#9CD9F9", "#0284c7")
  lineColor?: string;
  backgroundColor?: string;
}

interface Point {
  x: number;
  y: number;
  ox: number;
  oy: number;
  active: number;
  closest: Point[];
  circle: Circle | null;
}

interface Tween {
  obj: Point;
  s: { x: number; y: number };
  e: { x: number; y: number };
  dur: number;
  el: number;
  cb?: () => void;
}

function parseRgb(input: string): [number, number, number] {
  if (input.startsWith("#")) {
    const hex = input.slice(1);
    let r = 0,
      g = 0,
      b = 0;
    if (hex.length === 6 || hex.length === 8) {
      r = parseInt(hex.slice(0, 2), 16);
      g = parseInt(hex.slice(2, 4), 16);
      b = parseInt(hex.slice(4, 6), 16);
    } else if (hex.length === 3 || hex.length === 4) {
      r = parseInt(hex[0] + hex[0], 16);
      g = parseInt(hex[1] + hex[1], 16);
      b = parseInt(hex[2] + hex[2], 16);
    }
    return [r, g, b];
  }
  return [156, 217, 249];
}

class Circle {
  pos: Point;
  r: number;
  ctx: CanvasRenderingContext2D;

  constructor(pos: Point, r: number, ctx: CanvasRenderingContext2D) {
    this.pos = pos;
    this.r = r;
    this.ctx = ctx;
  }

  draw(r: number, g: number, b: number, alpha: number) {
    if (alpha <= 0.001) return;
    this.ctx.beginPath();
    this.ctx.arc(this.pos.x, this.pos.y, this.r, 0, Math.PI * 2);
    this.ctx.fillStyle = `rgba(${Math.round(r)},${Math.round(g)},${Math.round(b)},${alpha.toFixed(3)})`;
    this.ctx.fill();
  }
}

export function ConstellationCanvas({
  className = "",
  isDark = false,
  dotColor = "#0284c7",
  lineColor = "#0284c7",
  backgroundColor = "transparent",
}: ConstellationCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Target animation state
  const targetStateRef = useRef({
    dotRgb: parseRgb(dotColor),
    lineRgb: parseRgb(lineColor),
    ambientLineAlpha: isDark ? 0.08 : 0.18,
    ambientDotAlpha: isDark ? 0.12 : 0.25,
    flareLineAlpha: isDark ? 1.0 : 0.95,
    flareDotAlpha: 1.0,
    ambientLineWidth: isDark ? 0.8 : 0.9,
    flareLineWidth: isDark ? 1.15 : 1.25,
  });

  useEffect(() => {
    targetStateRef.current = {
      dotRgb: parseRgb(dotColor),
      lineRgb: parseRgb(lineColor),
      ambientLineAlpha: isDark ? 0.08 : 0.18,
      ambientDotAlpha: isDark ? 0.12 : 0.25,
      flareLineAlpha: isDark ? 1.0 : 0.95,
      flareDotAlpha: 1.0,
      ambientLineWidth: isDark ? 0.8 : 0.9,
      flareLineWidth: isDark ? 1.15 : 1.25,
    };
  }, [dotColor, lineColor, isDark]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = 0;
    let H = 0;
    let points: Point[] = [];
    let target = { x: -10000, y: -10000 };
    let rafId: number;
    let lastT: number | null = null;
    let isVisible = false;

    // Current smooth lerping state for 60fps transitions
    let curDotRgb = [...targetStateRef.current.dotRgb] as [number, number, number];
    let curLineRgb = [...targetStateRef.current.lineRgb] as [number, number, number];
    let curAmbientLineAlpha = targetStateRef.current.ambientLineAlpha;
    let curAmbientDotAlpha = targetStateRef.current.ambientDotAlpha;
    let curFlareLineAlpha = targetStateRef.current.flareLineAlpha;
    let curFlareDotAlpha = targetStateRef.current.flareDotAlpha;
    let curAmbientLineWidth = targetStateRef.current.ambientLineWidth;
    let curFlareLineWidth = targetStateRef.current.flareLineWidth;

    const tweens: Tween[] = [];

    function tweenTo(
      obj: Point,
      dur: number,
      props: { x: number; y: number; cb?: () => void }
    ) {
      const s = { x: obj.x, y: obj.y };
      const e = { x: props.x, y: props.y };
      tweens.push({ obj, s, e, dur: dur * 1000, el: 0, cb: props.cb });
    }

    function tickTweens(dt: number) {
      for (let i = tweens.length - 1; i >= 0; i--) {
        const t = tweens[i];
        t.el += dt;
        const p = Math.min(t.el / t.dur, 1);
        const ease = p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;
        t.obj.x = t.s.x + (t.e.x - t.s.x) * ease;
        t.obj.y = t.s.y + (t.e.y - t.s.y) * ease;
        if (p >= 1) {
          tweens.splice(i, 1);
          if (t.cb) t.cb();
        }
      }
    }

    function dist(a: { x: number; y: number }, b: { x: number; y: number }) {
      return (a.x - b.x) ** 2 + (a.y - b.y) ** 2;
    }

    function shift(p: Point) {
      tweenTo(p, 1.2 + Math.random() * 1.5, {
        x: p.ox - 35 + Math.random() * 70,
        y: p.oy - 35 + Math.random() * 70,
        cb: () => shift(p),
      });
    }

    function init() {
      if (!container || !canvas || !ctx) return;
      const rect = container.getBoundingClientRect();
      W = rect.width;
      H = rect.height;
      canvas.width = W;
      canvas.height = H;

      tweens.length = 0;
      points = [];

      const stepX = Math.max(W / 22, 46);
      const stepY = Math.max(H / 17, 46);

      for (let x = 0; x < W; x += stepX) {
        for (let y = 0; y < H; y += stepY) {
          const px = x + Math.random() * stepX;
          const py = y + Math.random() * stepY;
          points.push({
            x: px,
            ox: px,
            y: py,
            oy: py,
            active: 0,
            closest: [],
            circle: null,
          });
        }
      }

      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        const cl: Point[] = [];
        for (let j = 0; j < points.length; j++) {
          const q = points[j];
          if (p === q) continue;
          let placed = false;
          for (let k = 0; k < 5; k++) {
            if (!placed && cl[k] == null) {
              cl[k] = q;
              placed = true;
            } else if (!placed && dist(p, q) < dist(p, cl[k])) {
              cl[k] = q;
              placed = true;
            }
          }
        }
        p.closest = cl;
        p.circle = new Circle(p, 1.8 + Math.random() * 2.0, ctx);
      }

      for (const p of points) shift(p);
    }

    function loop(ts: number) {
      if (!isVisible) return;

      const dt = lastT ? Math.min(ts - lastT, 64) : 16;
      lastT = ts;
      tickTweens(dt);

      if (!ctx) return;
      ctx.clearRect(0, 0, W, H);

      // Smoothly lerp towards target colors and alphas (~850ms transition)
      const tgt = targetStateRef.current;
      const lerp = Math.min(1, dt * 0.0035);
      curDotRgb[0] += (tgt.dotRgb[0] - curDotRgb[0]) * lerp;
      curDotRgb[1] += (tgt.dotRgb[1] - curDotRgb[1]) * lerp;
      curDotRgb[2] += (tgt.dotRgb[2] - curDotRgb[2]) * lerp;

      curLineRgb[0] += (tgt.lineRgb[0] - curLineRgb[0]) * lerp;
      curLineRgb[1] += (tgt.lineRgb[1] - curLineRgb[1]) * lerp;
      curLineRgb[2] += (tgt.lineRgb[2] - curLineRgb[2]) * lerp;

      curAmbientLineAlpha += (tgt.ambientLineAlpha - curAmbientLineAlpha) * lerp;
      curAmbientDotAlpha += (tgt.ambientDotAlpha - curAmbientDotAlpha) * lerp;
      curFlareLineAlpha += (tgt.flareLineAlpha - curFlareLineAlpha) * lerp;
      curFlareDotAlpha += (tgt.flareDotAlpha - curFlareDotAlpha) * lerp;
      curAmbientLineWidth += (tgt.ambientLineWidth - curAmbientLineWidth) * lerp;
      curFlareLineWidth += (tgt.flareLineWidth - curFlareLineWidth) * lerp;

      const lineRgbStr = `${Math.round(curLineRgb[0])},${Math.round(curLineRgb[1])},${Math.round(curLineRgb[2])}`;

      // 1. Calculate active level per point based on distance to cursor
      for (const p of points) {
        const d = dist(target, p);
        let targetPointActive = 0; // 0 = idle ambient, 1.0 = maximum hover flare
        if (d < 4000) {
          targetPointActive = 1.0;
        } else if (d < 18000) {
          targetPointActive = 0.70;
        } else if (d < 45000) {
          targetPointActive = 0.35;
        } else {
          targetPointActive = 0;
        }

        // Smoothly lerp point active state for soft phosphorescent glow
        p.active += (targetPointActive - p.active) * 0.15;
      }

      // 2. Draw lines between closest points with dynamic proximity illumination
      for (const p of points) {
        for (const nb of p.closest) {
          if (!nb) continue;
          // Render each connection once
          if (p.x < nb.x || (p.x === nb.x && p.y < nb.y)) {
            const edgeFactor = Math.max(p.active, nb.active);
            const lineAlpha = curAmbientLineAlpha + (curFlareLineAlpha - curAmbientLineAlpha) * edgeFactor;
            const lineWidth = curAmbientLineWidth + (curFlareLineWidth - curAmbientLineWidth) * edgeFactor;

            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(nb.x, nb.y);
            ctx.strokeStyle = `rgba(${lineRgbStr},${lineAlpha.toFixed(3)})`;
            ctx.lineWidth = lineWidth;
            ctx.stroke();
          }
        }

        // 3. Draw circle node with dynamic proximity illumination
        const dotAlpha = curAmbientDotAlpha + (curFlareDotAlpha - curAmbientDotAlpha) * p.active;
        p.circle?.draw(curDotRgb[0], curDotRgb[1], curDotRgb[2], dotAlpha);
      }

      rafId = requestAnimationFrame(loop);
    }

    const onMouseMove = (e: MouseEvent) => {
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;

      // Check if cursor is roughly within or near the section bounds
      if (
        mx >= -60 &&
        mx <= rect.width + 60 &&
        my >= -60 &&
        my <= rect.height + 60
      ) {
        target.x = mx;
        target.y = my;
      } else {
        target.x = -10000;
        target.y = -10000;
      }
    };

    const onMouseLeave = () => {
      target.x = -10000;
      target.y = -10000;
    };

    const onResize = () => {
      cancelAnimationFrame(rafId);
      lastT = null;
      init();
      if (isVisible) {
        rafId = requestAnimationFrame(loop);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        isVisible = entry.isIntersecting;
        if (isVisible) {
          lastT = null;
          rafId = requestAnimationFrame(loop);
        } else {
          cancelAnimationFrame(rafId);
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(container);
    init();

    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    container.addEventListener("mouseleave", onMouseLeave);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden ${className}`}
      style={{ backgroundColor }}
    >
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}
