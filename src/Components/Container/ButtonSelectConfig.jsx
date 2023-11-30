import React from "react";
import SshTunnel from "../Config/Ssh/SshTunnel";
import V2ray from "../Config/V2ray/V2ray";

export default function ButtonSelectConfig({setShowVideo}) {
  return (
    <div class="row mt-3">
      <SshTunnel />
      <V2ray setShowVideo={setShowVideo} />
    </div>
    
  );
}
