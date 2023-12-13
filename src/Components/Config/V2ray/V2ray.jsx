import React, { useEffect, useState } from "react";
import V2rayBtn from "./V2rayBtn";
import V2rayItems from "./V2rayItems";

export default function V2ray({ setLevel, setShowVideo, setConfigBtnsStatus }) {
  const [isShowBtn, setIsShowBtn] = useState(false);

  useEffect(() => {
    setConfigBtnsStatus((prevStatuses) => {
      return { ...prevStatuses, v2ray: isShowBtn };
    });
  }, [isShowBtn]);

  return (
    <div class="col-sm">
      <V2rayBtn isShowBtn={isShowBtn} setIsShowBtn={setIsShowBtn} />
      {isShowBtn && (
        <V2rayItems setLevel={setLevel} setShowVideo={setShowVideo} />
      )}
    </div>
  );
}
