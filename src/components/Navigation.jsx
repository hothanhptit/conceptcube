import React, { useState } from "react";
import { menuItems } from "../sampledata";
import "../styles.css";

const Navigation = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className="navbar">
      <h1 className="navbar-logo">
        <img
          src="/images/logo.png"
          alt="logo"
          srcset="images/logo@2x.png 2x,
            images/logo@3x.png 3x"
          class="logo"
        />
      </h1>
      <div className="menu-icon" onClick={handleClick}>
        <i className={active ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={active ? "nav-menu active" : "nav-menu"}>
        {menuItems.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.url} className={item.cName}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
