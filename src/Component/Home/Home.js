import React from "react";
import Navbar from "./Navbar/Navbar";

import "./Home.css";
import Main from "../main/Main";
const Home = () => {
  return (
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
  );
};

export default Home;
