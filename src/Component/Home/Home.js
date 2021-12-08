import React from "react";
import Navbar from "./Navbar/Navbar";
import giftcard from "../../image/vector.svg";
import "./Home.css";
const Home = () => {
  return (
    <>
      <header>
        <Navbar></Navbar>
        <div className="main container">
          <div className="main-title">BITTER TRUTH</div>
          <div className="main-title-1 ">The future is a game</div>
          <div className="main-description mb-4">
            Where the rules can be changed by anyone, at anytime
            <br />
            <br />
            For a future that’s so unpredictable how do we school our kids ?
          </div>
        </div>
      </header>
      <div className="container">
        <div className="header-bottom">
          <div className="header-bottom-width">
            <div className="header-bottom-text">
              gift your kids skills <br /> that aren’t taught at schools
            </div>
          </div>
          <div className="header-bottom-img">
            <img src={giftcard} width="200px" className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
