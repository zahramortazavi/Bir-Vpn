import React from "react";

export default function Video({VideoSrc}) {
  return (
    <div className="row video-box">
      <video width="auto" height="auto" autoPlay controls>
        <source src={VideoSrc} type="video/mp4" />
        Your browser does not support HTML video.
      </video>
    </div>
  );
}
