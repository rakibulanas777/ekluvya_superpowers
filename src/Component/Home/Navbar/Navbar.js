import React from "react";
import logo from "../../../image/logo.svg";
import gift from "../../../image/gift.svg";
import whatsapp from "../../../image/whatsapp.svg";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav>
      <div className="nav navbar sticky-top">
        <div className="logo">
          <img src={logo} width="70%" alt="" />
        </div>
        <div className="left-navbar">
          <div className="gift">
            <img src={gift} alt="" className="img-fluid w-75" srcset="" />
          </div>
          <div className="whatsapp">
            <img src={whatsapp} className="img-fluid w-75" alt="" srcset="" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
