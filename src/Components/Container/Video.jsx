import React from "react";

export default function Video({ VideoSrc, setShowVideo }) {
  const closeVideoHandler = () => {
    setShowVideo((prevInfo) => {
      return { ...prevInfo, isshow: false };
    });
  };

  return (
    <div className="row video-box">
      <span className="close-video" onClick={closeVideoHandler}>
        X
      </span>
      <video width="auto" height="auto" autoPlay controls>
        <source src={VideoSrc} type="video/mp4" />
        Your browser does not support HTML video.
      </video>
    </div>
  );
}
