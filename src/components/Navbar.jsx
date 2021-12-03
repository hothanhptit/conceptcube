import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
const Navbar = () => {
  function NavItem(props) {
    return (
      <div className="nav-item">
        <li>
          {props.item}
        </li>
      </div>
    );
  }
  return (
    <Router>
      <div className="navbar">
        <Link to="/">
          <div className="logo">
            <img
              src="/images/logo.png"
              alt="logo"
              srcset="images/logo@2x.png 2x,
            images/logo@3x.png 3x"
              class="logo"
            />
          </div>
        </Link>
        <div className="nav-menu">
          <Link to="#" className="nav-item">
            <NavItem item="INTRODUCTION"></NavItem>
          </Link>
          <Link to="#" className="nav-item">
            <NavItem item="SOLUTION"></NavItem>
          </Link>
          <Link to="#" className="nav-item">
            <NavItem item="RATE PLAN"></NavItem>
          </Link>
          <NavItem item="|" className="nav-item"></NavItem>
          <Link to="#" className="nav-item">
            <NavItem item="LOGIN"></NavItem>
          </Link>
          <Link to="#" className="nav-item">
            <NavItem item="APPLY FOR FREE USE"></NavItem>
          </Link>
        </div>
      </div>
    </Router>
  );
};

export default Navbar;
