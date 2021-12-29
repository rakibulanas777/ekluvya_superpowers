import React from "react";
import Navbar from "./Navbar/Navbar";
import giftcard from "../../image/vector.svg";
import "./Home.css";
import arrow from "../../image/Path 67.svg";
import Main from "../main/Main";
import CarousoulBody from "../main/CarousoulBody";
const Home = () => {
  return (
    <header>
      <div className="main  container d-flex flex-column justify-content-center">
        <div className="main-title">BITTER TRUTH</div>
        <div className="main-title-1">The future is a game</div>
        <div className="main-description mb-4">
          Where the rules can be changed <br /> by anyone, at anytime
          <br />
          <br />
          For a future that’s so unpredictable <br /> how do we school our kids
          ?
          <div className="icon-arrow mt-5" style={{ marginLeft: "20%" }}>
            <a href="#gift">
              <img src={arrow} width="16px" alt="" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Home;
