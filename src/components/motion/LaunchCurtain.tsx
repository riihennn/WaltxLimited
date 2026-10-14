import Image from "next/image";

export function LaunchCurtain() {
  return <div className="launch-curtain" aria-hidden="true">
    <div className="curtain-panel curtain-panel-left" />
    <div className="curtain-panel curtain-panel-right" />
    <Image className="curtain-logo" src="/waltx-launch-logo.png" alt="" width={1708} height={920} priority />
  </div>;
}
