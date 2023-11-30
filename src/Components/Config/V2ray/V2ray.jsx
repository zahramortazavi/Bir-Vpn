import React, { useState } from "react";
import V2rayBtn from "./V2rayBtn";
import V2rayItems from "./V2rayItems";

export default function V2ray({setShowVideo}) {
  const [isShowBtn, setIsShowBtn] = useState(false);
  return (
    <div class="col-sm ">
      <V2rayBtn isShowBtn={isShowBtn}  setIsShowBtn={setIsShowBtn} />
      {isShowBtn && <V2rayItems setShowVideo={setShowVideo} />}
    </div>
  );
}
