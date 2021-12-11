import React from "react";
import logo from "../../../image/logo.svg";
import gift from "../../../image/gift.svg";
import whatsapp from "../../../image/whatsapp.svg";
import "./Navbar.css";
const Navbar1 = () => {
  return (
    <nav className="nav navbar fixed-top sticky-top">
      <div className="logo">
        <img src={logo} className="logo-img" alt="" />
      </div>
      <div className="left-navbar">
        <img
          src={whatsapp}
          className="img-fluid whatsapp w-75"
          alt=""
          srcset=""
        />
      </div>
    </nav>
  );
};

export default Navbar1;
