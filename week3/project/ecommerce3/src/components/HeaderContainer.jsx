import React from "react";
import { NavLink } from "react-router-dom";
import "./components-css/nav-bar.css";
const activeLinkStyle = ({ isActive }) => {
  return { color: isActive ? "olivedrab" : "" };
};
const HeaderContainer = () => {
  return (
    <nav className="nav-bar">
      <NavLink to="/products" className="nav-bar-link" style={activeLinkStyle}>
        Products
      </NavLink>
      <NavLink to="/favorite" className="nav-bar-link" style={activeLinkStyle}>
        Favorite
      </NavLink>
    </nav>
  );
};
export default HeaderContainer;
