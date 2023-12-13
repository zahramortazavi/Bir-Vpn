import React from "react";

export default function V2rayBtn({
  setIsShowBtn,
  isShowBtn,
}) {
  const clickhandler = () => {
    setIsShowBtn((prevshow) => {
      return !prevshow;
    });
  };

  return (
    <button
      onClick={clickhandler}
      type="button"
      className={`${
        isShowBtn
          ? "mt-2 btn btn-primary w-100 py-3 rounded-pill border border-2 border-primary text-white shadow-lg"
          : "mt-2 btn btn-outline-primary w-100 py-3 rounded-pill border border-2 border-primary"
      }  `}
    >
      V2Ray
    </button>
  );
}
