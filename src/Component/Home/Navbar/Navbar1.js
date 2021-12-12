import React, { useState } from "react";
import logo from "../../../image/logo.svg";
import gift from "../../../image/gift.svg";
import whatsapp from "../../../image/whatsapp.svg";
import "./Navbar.css";
const Navbar1 = () => {
  const [value, showValue] = useState(false);
  return (
    <nav class="navbar navbar-expand-lg  sticky-top navbar-light ">
      <div class="container-fluid">
        <div className="logo">
          <img src={logo} className="logo-img" alt="" />
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav ms-auto">
            <div className="left-navbar d-flex align-items-center">
              <div className="whatsapp-img">
                <img
                  src={whatsapp}
                  className="img-fluid whatsapp "
                  alt=""
                  onClick={() => showValue(!value)}
                  srcset=""
                />
                {value && (
                  <div className="whats-app-click d-flex justify-content-evenly align-items-center">
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
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar1;
