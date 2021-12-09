import React from "react";
import img from "../../image/Superpower Logo White.svg";
import giftcard from "../../image/vector.svg";
import "./main.css";
const Main = () => {
  return (
    <>
      <div className="container-fluid mb-5">
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
      <div className="container  mt-5 mb-5">
        <div className="main-flex">
          <div className="main-text">
            On an average, only 1% crack the UPSC, 2% make it to the IITs, just
            2% get into the NID and a mere 0.4% get into the IIMs <br /> <br />
            To beat competition that’s this fierce, kids need super powers
            <br />
            <br /> In just 30 days, your kid could master one of these super
            powers :
          </div>
          <div className="main-img">
            <img src={img} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
