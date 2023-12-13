import React from "react";
import LiNavbar from "./LiNavbar";

export default function UlNavbar() {
  const UlNavbarArray = [
    { title: "اطلاعیه ها", href: "/notif" },
    { title: "آموزش ها", href: "/education" },
    { title: "قوانین ", href: "/rules" },
  ];
  const liNavbar = UlNavbarArray.map((LiItem) => {
    return <LiNavbar liItem={LiItem} />;
  });
  return <ul className="navbar-nav me-auto mb-2 mb-lg-0">{liNavbar}</ul>;
}
