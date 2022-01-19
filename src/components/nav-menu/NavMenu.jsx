import React from "react";
import "./NavMenu.css";

export function NavMenu({ items }) {
  return (
    <div className="nav-menu-container glass">
      {items.map((menuItem => (
        <div className="nav-menu-item">
          <div className="nav-menu-icon">
            {menuItem.iconNode}
          </div>
          <p className='no-margin nav-menu-text'>{menuItem.text}</p>
        </div>
      )))}
    </div>
  );
}
