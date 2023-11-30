import React from "react";

export default function LiNavbar({ LiItem }) {
  return (
    <li className="nav-item">
      <a target='_blank' className="nav-link fw-bold custom-a " href={LiItem.href}>
        {LiItem.title}
      </a>
    </li>
  );
}
