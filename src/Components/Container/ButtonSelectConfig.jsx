import React, { useEffect, useState } from "react";
import SshTunnel from "../Config/Ssh/SshTunnel";
import V2ray from "../Config/V2ray/V2ray";
import { levelTypes } from "./SelectConfig";

export default function ButtonSelectConfig({ setShowVideo, setLevel }) {
  const [configBtnsStatus, setConfigBtnsStatus] = useState({
    v2ray: false,
    ssh: false,
  });

  useEffect(() => {
    if (Object.values(configBtnsStatus).every((status) => !status)) {
      setLevel(levelTypes.configSelect);
    }

    // console.log(Object.values(configBtnsStatus).every((status) => !status));
  }, [configBtnsStatus]);

  return (
    <div class="row mt-3">
      <SshTunnel />
      <V2ray
        setLevel={setLevel}
        setShowVideo={setShowVideo}
        setConfigBtnsStatus={setConfigBtnsStatus}
      />
    </div>
  );
}
