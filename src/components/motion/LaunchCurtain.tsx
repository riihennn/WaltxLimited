import Image from "next/image";

export function LaunchCurtain() {
  return <div className="launch-curtain" aria-hidden="true"><div className="curtain-panel curtain-panel-left" /><div className="curtain-panel curtain-panel-right" /><Image className="curtain-logo" src="/waltx-logo-181818.png" alt="" width={120} height={64} priority /></div>;
}
