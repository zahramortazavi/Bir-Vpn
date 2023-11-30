import React from "react";
import Container from "./Container";
import ImageShap from "./ImageShap";

export default function ContainerFluid() {
  return (
    <div className="container-fluid container-custom">
      <ImageShap />
      <Container />
    </div>
  );
}
