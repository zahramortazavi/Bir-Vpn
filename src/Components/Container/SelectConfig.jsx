import React, { useState } from "react";
import ButtonSelectConfig from "./ButtonSelectConfig";
import TextSelectConfig from "./TextSelectConfig";

export const levelTypes = {
  configSelect: "configSelect",
  osSelect: "osSelect",
  softwareSelect: "softwareSelect",
};

export default function SelectConfig({ setShowVideo }) {
  const [level, setLevel] = useState(levelTypes.configSelect);

  return (
    <div className="col">
      <TextSelectConfig level={level} />
      <ButtonSelectConfig
        setShowVideo={setShowVideo}
        setLevel={setLevel}
      />
    </div>
  );
}
