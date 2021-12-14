import React, { useState } from "react";
import logo from "../../../image/logo.svg";
import gift from "../../../image/gift.svg";
import whatsapp from "../../../image/whatsapp.svg";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar1 = () => {
  const [number, setNumber] = useState("");
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 110) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);
  const [value, showValue] = useState(false);
  return (
    <nav
      className={
        color
          ? "navbar navbar-expand-lg sticky-top scroll navbar-dark "
          : "navbar navbar-expand-lg sticky-top withoutScroll navbar-dark"
      }
    >
      <div class="container">
        <div className="logo">
        <Link to="/home">
          <img src={logo} className="logo-img" alt="" />
        </Link>
        </div>
        <button
          class="navbar-toggler nav-button"
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
                <a
                  href={`https://api.whatsapp.com/send?phone=919885018443&text=Hi,+tell+me+more+about+school+of+superpowers.`}
                  target="_blank"
                  rel="noreferrer"
                >
                <img
                  src={whatsapp}
                  className="img-fluid whatsapp "
                  alt=""
                  // onClick={() => {
                  //   showValue(!value);
                  //   setNumber();
                  // }}
                  srcset=""
                />
                </a>
                {/* {value && (
                  <div className="whats-app-click d-flex justify-content-evenly align-items-center">
                    <input
                      type="text"
                      onChange={(e) => setNumber(e.target.value)}
                    />
                    <div className="whatsapp-arrow">
                      <a
                        href={`https://wa.me/${number}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i class="fas fa-angle-right"></i>
                      </a>
                    </div>
                  </div>
                )} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar1;
