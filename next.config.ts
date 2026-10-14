import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/about", destination: "/#about", permanent: true },
      { source: "/services", destination: "/#about", permanent: true },
      { source: "/products", destination: "/#portfolio", permanent: true },
      { source: "/contact", destination: "/#contact", permanent: true },
      { source: "/careers", destination: "/#contact", permanent: true },
    ];
  },
};
export default nextConfig;
