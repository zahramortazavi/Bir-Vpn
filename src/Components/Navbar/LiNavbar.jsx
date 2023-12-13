import React from "react";
import { Link } from "react-router-dom";

export default function LiNavbar({ liItem }) {
  return (
    <li className="nav-item navItem-custom">
      <Link
        className="nav-link fw-bold custom-a"
        to={liItem.href}
      >
        {liItem.title}
      </Link>
    </li>
  );
}
