import React from "react";

export default function V2rayV2rayNg({ setShowVideo }) {
  const clickHandler = () => {
    setShowVideo((prev) => {
      return { ...prev, isshow: true };
    });
  };
  return (
    <div className="d-flex justify-content-center">
      <button
        onClick={clickHandler}
        type="button"
        className="mt-2 btn btn-outline-primary w-50 py-3 rounded-pill border border-2 border-primary "
      >
        V2rayNg
      </button>
    </div>
  );
}
