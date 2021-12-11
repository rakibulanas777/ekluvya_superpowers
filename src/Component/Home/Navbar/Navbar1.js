import React, { useState } from "react";
import logo from "../../../image/logo.svg";
import gift from "../../../image/gift.svg";
import whatsapp from "../../../image/whatsapp.svg";
import "./Navbar1.css";
const Navbar1 = () => {
  const [value, showValue] = useState(false);
  return (
    <nav className="nav navbar mb-5  sticky-top">
      <div className="container-fluid">
        <div className="logo">
          <img src={logo} className="logo-img" alt="" />
        </div>
        <div className="left-navbar1">
          <img
            src={whatsapp}
            className="img-fluid whatsapp1 "
            alt=""
            onClick={() => showValue(!value)}
            srcset=""
          />
          {value && (
            <div className="whats-app-click1 d-flex justify-content-evenly align-items-center">
              <input type="text" />
              <div className="whatsapp-arrow">
                <a href="https://www.whatsapp.com/" target="_blank">
                  <i class="fas fa-angle-right"></i>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar1;
