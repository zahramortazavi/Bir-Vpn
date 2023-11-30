import React from "react";
import ButtonSelectConfig from "./ButtonSelectConfig";
import TextSelectConfig from "./TextSelectConfig";

export default function SelectConfig({setShowVideo}) {
  return (
    <div className="col">
      <TextSelectConfig />
      <ButtonSelectConfig setShowVideo={setShowVideo} />
    </div>
  );
}
