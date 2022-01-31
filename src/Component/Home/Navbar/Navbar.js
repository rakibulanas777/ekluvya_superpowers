import React, { useState } from "react";
import logo from "../../../image/logo.svg";
import gift from "../../../image/gift.webp";
import whatsapp from "../../../image/Component 38 – 1.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [number, setNumber] = useState("");
  const [value, showValue] = useState(false);
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 110) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);
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
              <a href="#gift" className="gift-main">
                <img src={gift} alt="" className="gift" srcset="" />
                <div className="gift-skill-content">Gift a skill</div>
              </a>

              <a
                className="whatsapp-img"
                href={`https://api.whatsapp.com/send?phone=919885018443&text=Hi,+tell+me+more+about+school+of+superpowers.`}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={whatsapp}
                  className="whatsapp"
                  alt=""
                  // onClick={() => {
                  //   showValue(!value);
                  //   setNumber();
                  // }}
                  srcset=""
                />
                <div className="whatssapp-skill-content">Get a discount</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
