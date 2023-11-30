import React from "react";
import HambergerBtn from "./HambergerBtn";
import LogoBirVpn from "./LogoBirVpn";
import NavbarCollaps from "./NavbarCollaps";

export default function NavBar() {
  return (
    <nav className="navbar  sticky-top navbar-expand-lg">
      <div className="container-fluid">
        <LogoBirVpn />
        <HambergerBtn />
        <NavbarCollaps />
      </div>
    </nav>
  );
}
