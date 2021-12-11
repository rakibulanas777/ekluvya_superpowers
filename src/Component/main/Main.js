import React from "react";
import img from "../../image/Superpower Logo White.svg";
import giftcard from "../../image/vector.svg";
import Home from "../Home/Home";
import Navbar from "../Home/Navbar/Navbar";
import arrow from "../../image/Path 67.svg";
import "./main.css";
const Main = () => {
  return (
    <>
      <div className="container-fluid mainbody mb-5">
        <div className="header-bottom ">
          <div className="header-bottom-width">
            <div className="header-bottom-text">
              gift your kids skills <br /> that aren’t taught at schools
            </div>
          </div>
          <div className="header-bottom-img">
            <img src={giftcard} width="100" alt="" />
          </div>
        </div>
      </div>
      <div className="container  main-section-2  mb-5">
        <div className="row">
          <div className="col-10 col-md-5  mx-auto">
            <div className="main-text">
              On an average, only 1% crack the UPSC, 2% make it to the IITs,
              just 2% get into the NID and a mere 0.4% get into the IIMs <br />{" "}
              <br />
              To beat competition that’s this fierce, kids need super powers
              <br />
              <br /> In just 30 days, your kid could master one of these super
              powers :
              <div className="icon-arrow mt-5 ms-5">
                <img src={arrow} width="23px" alt="" />
              </div>
            </div>
          </div>
          <div className="col-10 text-center col-md-5 mx-auto">
            <div className="main-img">
              <img
                src={img}
                width="385px"
                height="250px"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
