import React from "react";
import V2rayAndroid from "./V2rayAndroid";
import V2rayIos from "./V2rayIos";
import V2rayWindows from "./V2rayWindows";
import V2rayLinux from "./V2rayLinux";
import V2rayMac from "./V2rayMac";

export default function V2rayItems({setShowVideo}) {
  return (
    <>
    <V2rayAndroid setShowVideo={setShowVideo}/>
    <V2rayIos/>
    <V2rayWindows/>
    <V2rayLinux/>
    <V2rayMac/>
    </>
  )
 ;
}
