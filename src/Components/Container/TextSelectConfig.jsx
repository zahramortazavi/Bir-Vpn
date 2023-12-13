import React, { useEffect, useState } from "react";
import { levelTypes } from "./SelectConfig";

export default function TextSelectConfig({ level }) {
  const [text, setText] = useState("");

  useEffect(() => {
    switch (level) {
      case levelTypes.configSelect:
        setText("نوع کانفیگ خود را انتخاب کنید");
        break;
      case levelTypes.osSelect:
        setText("نوع سیستم عامل خود را انتخاب کنید");
        break;
      case levelTypes.softwareSelect:
        setText("نوع نرم افزاری که استفاده میکنید را انتخاب کنید");
        break;

      default:
        setText("");
        break;
    }
  }, [level]);

  return (
    <div className="row config-select p-5 mt-5 text-center">
      <h2 className="  fw-bold display-6">{text}</h2>
    </div>
  );
}
