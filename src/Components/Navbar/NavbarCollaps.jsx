import React from "react";
import NavbarBrand from "./NavbarBrand";
import UlNavbar from "./UlNavbar";
export default function NavbarCollaps() {

  return (
    <div className="collapse navbar-collapse" id="navbarText">
      <UlNavbar />
      <NavbarBrand />
    </div>
  );
}
