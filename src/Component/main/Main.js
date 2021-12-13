import React from "react";
import img from "../../image/Superpower Logo White.svg";
import giftcard from "../../image/vector.svg";
import Home from "../Home/Home";
import Navbar from "../Home/Navbar/Navbar";
import video from "../../image/particles small.mp4";
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
            <img src={giftcard} className="img-fluid" width="200px" alt="" />
          </div>
        </div>
      </div>
      <div className="container-fluid main-video">
        <div className="container  main-section-2  mb-5">
          <div className="row">
            <div className="col-10 col-lg-5  mx-auto">
              <div className="main-text mb-lg-0 mb-5">
                On an average, <br /> only 1% crack the UPSC, <br /> 2% make it
                to the IITs, <br />
                just 2% get into the NID <br /> and a mere 0.4% get into the
                IIMs <br /> <br />
                To beat competition that’s this fierce, <br /> kids need super
                powers
                <br />
                <br /> In just 30 days, your kid could master <br /> one of
                these super powers :
                <div
                  className="icon-arrow d-lg-block d-none mt-5"
                  style={{ marginLeft: "30%" }}
                >
                  <img src={arrow} width="16px" alt="" />
                </div>
              </div>
            </div>
            <div className="col-10 text-center logopart col-lg-7 mx-auto">
              <div className="video-main mx-auto">
                <video
                  src={video}
                  className="video embed-responsive-item"
                  autoPlay
                  loop
                  muted
                ></video>
              </div>
              <div className="main-img">
                <img
                  src={img}
                  width="385px"
                  height="250px"
                  className="img-fluid img-logo-main"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
