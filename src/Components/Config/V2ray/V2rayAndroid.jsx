import React, { useState } from "react";
import V2rayNapsternetV from "./V2rayNapsternetV";
import V2rayV2rayNg from "./V2rayV2rayNg";

export default function V2rayAndroid({ setShowVideo }) {
  const [isShowBtn, setIsShowBtn] = useState(false);
  const clickhandler = () => {
    setIsShowBtn((prevshow) => {
      return !prevshow;
    });
    // setIsShowBtn(true);
  };
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
