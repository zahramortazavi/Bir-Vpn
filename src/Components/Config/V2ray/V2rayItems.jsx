import React, { useEffect, useState } from "react";
import V2rayAndroid from "./V2rayAndroid";
import V2rayIos from "./V2rayIos";
import V2rayWindows from "./V2rayWindows";
import V2rayLinux from "./V2rayLinux";
import V2rayMac from "./V2rayMac";
import { levelTypes } from "../../Container/SelectConfig";

export default function V2rayItems({ setShowVideo, setLevel }) {
  const [subBtnsStatus, setSubBtnsStatus] = useState({
    android: false,
    ios: false,
    windows: false,
    mac: false,
    linux: false,
  });

  useEffect(() => {
    if (Object.values(subBtnsStatus).every((status) => !status)) {
      console.log('hey')
      setLevel(levelTypes.osSelect);
    }
    console.log(Object.values(subBtnsStatus).every((status) => !status));
  }, [subBtnsStatus]);

  return (
    <>
      <V2rayAndroid
        setShowVideo={setShowVideo}
        setSubBtnsStatus={setSubBtnsStatus}
        setLevel={setLevel}
      />
      <V2rayIos />
      <V2rayWindows />
      <V2rayMac />
      <V2rayLinux />
    </>
  );
}
