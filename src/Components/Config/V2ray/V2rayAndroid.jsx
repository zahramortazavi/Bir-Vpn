import React, { useEffect, useState } from "react";
import { levelTypes } from "../../Container/SelectConfig";
import V2rayNapsternetV from "./V2rayNapsternetV";
import V2rayV2rayNg from "./V2rayV2rayNg";

export default function V2rayAndroid({
  setShowVideo,
  setSubBtnsStatus,
  setLevel,
}) {
  const [isShowBtn, setIsShowBtn] = useState(false);
  const clickhandler = () => {
    setIsShowBtn((prevshow) => {
      return !prevshow;
    });
    // setIsShowBtn(true);
  };

  useEffect(() => {
    if (isShowBtn) {
      setLevel(levelTypes.softwareSelect);
    }
    setSubBtnsStatus((prevStatuses) => {
      return { ...prevStatuses, android: isShowBtn };
    });
  }, [isShowBtn]);

  return (
    <>
      <div className="d-flex justify-content-center">
        <button
          onClick={clickhandler}
          type="button"
          className={`${
            isShowBtn
              ? "mt-2 text-white shadow-lg btn btn-primary w-75 py-3 rounded-pill border border-2 border-primary"
              : "mt-2 btn btn-outline-primary w-75 py-3 rounded-pill border border-2 border-primary"
          }`}
        >
          Android
        </button>
      </div>
      {isShowBtn && (
        <>
          <V2rayV2rayNg setShowVideo={setShowVideo} />
          <V2rayNapsternetV />
        </>
      )}
    </>
  );
}
