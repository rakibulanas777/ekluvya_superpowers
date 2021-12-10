import React, { Component, useEffect, useState } from "react";
import profile from "../../image/dynamic.png";
import "./Page.css";
import play from "../../image/playback.svg";
import gift from "../../image/vector.svg";
import LoginModal from "../Modal/LoginModal";
import VideoModal from "../Modal/VideoModal";
import { useParams } from "react-router";
const Page = ({ match }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);

  const { id } = useParams();
  console.log(id);

  const [value, getValue] = useState([]);
  useEffect(() => {
    fetch("../../../img.json")
      .then((res) => res.json())
      .then((data) => getValue(data[id - 1]));
  }, []);

  return (
    <div className="container">
      <div className="row g-4">
        <div className="col-md-4">
          <div
            className="card border-0 radius"
            style={{ width: "345px", height: "583px" }}
          >
            <img src={profile} className="card-img-top" alt="..." />
            <div className="card-body radius">
              <h5 className="card-title mt-3">
                SAHASRA <br /> Future Doctor
              </h5>
              <p className="card-text text-white">
                “I not only remember all the elements in the periodic table, I
                can even sing them backwards”
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="page-text-details mb-5">
            <div className="page-title d-flex mb-3 align-items-center">
              <div className="page-title-text me-5">Mega Memory</div>
              <div className="page-title-img">
                <img
                  src={play}
                  onClick={handleOpen2}
                  height="45px"
                  width="45px"
                  alt=""
                  srcset=""
                />
              </div>
            </div>
            <div className="page-text-description mb-4">
              Good grades are dependent on how much your kids remember in an
              exam.
              <br />
              This 30-day course massively improves their memory.
              <br />
              Gift them a super power that they’ll never forget.
            </div>
            <div className="page-last-text">
              Future greatness @ the cost of a family dinner
            </div>
          </div>
          <div className="page-promo-code mb-5">
            <input
              type="text"
              placeholder="Promo Code"
              className="input me-3"
            />
            <input type="submit" className="apply" value="Apply" />
          </div>
          <div className="discount-gift-section d-flex align-items-start mt-2">
            <div className="discount-gift-box d-flex me-4 align-items-center justify-content-center ">
              <button className="text" onClick={handleOpen}>
                Gift now
              </button>
              <div className="img">
                <img src={gift} width="100px" className="gift-box-img" alt="" />
              </div>
              <div className="number">
                <span className="number-box"> ₹ 1999</span>
              </div>
            </div>
            <div className="discount-money">
              <div className="discount">
                ₹<span className="discount-number-box"> 1499</span>
              </div>
              <div className="offer">offer expires in</div>
              <div className="expire-offer">17 : 10 : 40</div>
            </div>
          </div>
        </div>
      </div>
      <div className="box d-flex mb-5 align-items-center">
        <div className="icon-user me-4">
          <i class="fas fa-2x fa-user-friends"></i>
        </div>

        <div className="box-text">
          Sahasra + 2758 <br /> kids have joined
        </div>
      </div>
      <LoginModal openbtn={handleOpen} closebtn={handleClose} open={open} />
      <VideoModal
        openbtn2={handleOpen2}
        closebtn2={handleClose2}
        open2={open2}
      />
    </div>
  );
};

export default Page;
