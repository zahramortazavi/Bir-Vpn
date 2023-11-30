import React, { useEffect, useState } from "react";
import ImageMain from "./ImageMain";
import SelectConfig from "./SelectConfig";
import Video from "./Video";

export default function Container() {
  const [showVideo, setShowVideo] = useState({
    isshow: false,
    src: "/image/mov_bbb.mp4",
  });

  useEffect(() => {
    if (showVideo.isshow) window.scrollTo({ top: 1000, behavior: "smooth" });
  }, [showVideo]);

  return (
    <div className="container  mx-auto">
      <div className="row ">
        <ImageMain />
        <SelectConfig setShowVideo={setShowVideo} />
      </div>
      {showVideo.isshow && <Video VideoSrc={showVideo.src} />}
    </div>
  );
}
