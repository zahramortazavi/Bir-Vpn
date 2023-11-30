import React from "react";
import LiNavbar from "./LiNavbar";

export default function UlNavbar() {
  const UlNavbarArray = [
    {title: 'اطلاعیه ها',
    href:'https://www.google.com/'},
    {title: 'آموزش ها',
    href:'https://www.google.com/'},
    {title: 'قوانین ',
    href:'https://www.google.com/'}
  ];
  const liNavbar = UlNavbarArray.map((LiItem) => {
    return <LiNavbar LiItem={LiItem} />;
  });
  return <ul className="navbar-nav me-auto mb-2 mb-lg-0">{liNavbar}</ul>;
}
