import React from "react";
import { Link } from "react-router-dom";
import "../Header/Header.css";
import logo from "../../images/logo-v2.png";
import Nav from "../Nav/Nav";

const Header = () => {
  return (
    <div className="header">
      <div className="banner">
        <Link to="/">
          <img className="logo" src={logo} alt="The Boozer Catalogue" />
        </Link>
      </div>
      <Nav className="nav" />
    </div>
  );
};

export default Header;
