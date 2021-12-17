import React, { Component, useEffect, useState } from "react";
import profile from "../../image/dynamic.png";
import "./Page.css";
import play from "../../image/playback.svg";
import gift from "../../image/Group 113.svg";
import line from "../../image/Line 1.svg";
import image1 from "../../image/Path 69.svg";
import LoginModal from "../Modal/LoginModal";
import VideoModal from "../Modal/VideoModal";
import { useParams } from "react-router";
import EventTimer from "./EventTimer";
import { courseDetail } from "../../api_call";
import { displayRazorpay } from "../Modal/razorpay";
const Page = ({ match }) => {
  const [open, setOpen] = React.useState(false);
  const { id } = useParams();

  const [value, getValue] = useState({});
  const handleOpen = () => {
    let getToken = localStorage.getItem("access-token");
    if (getToken) {
      getToken = JSON.parse(getToken);
      const token=getToken.token
      const user_id = getToken.id;
      if (!user_id) {
        setOpen(true);
      } else {
        const phoneNumber = getToken.phoneNumber;
        const email = getToken.email;
  
        displayRazorpay({
          user_id,
          phone_number: phoneNumber,
          email,
          course_id: id,
          course_amount: value?.discount || value?.amount || 100,
          accessToken: token,
        });
      }
    } else {
      setOpen(true);
    }
  };
  const handleClose = () => setOpen(false);

  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);

  useEffect(() => {
    async function getCourses() {
      const courseData = await courseDetail(id);
      getValue(courseData);
    }
    getCourses();
  }, [id]);
  const {
    courseName: title,
    cname = "ASHNI Future",
    future = "Entrepreneur",
    join = 0,
    thumbnailUrl: image,
    description = "Testimonial",
    amount = 100, // not getting from api 
    discount,
    descriptionpart = "No Description",
    video = "https://ekluvya.s3.ap-south-1.amazonaws.com/video/EK_WH_TRAILER.mp4",
    expiryDate = "Dec 28,2021",
    description_two = "Future greatness @ the cost of a family dinner",
  } = value;

  return (
    <div className="container mb-5">
      <div className="img-arrow-icon mb-5 text-center">
        <img src={image1} width="16px" alt="" />
      </div>
      <div className="row  g-4 card-part ">
        <div className="col-lg-3 col-10 mx-auto">
          <div className="card border-0 radius">
            <img src={image} className="card-img-top img-fluid" alt="..." />
            <div className="card-body radius">
              <h5 className="card-title">
                {cname} <br /> {future}
              </h5>
              <p className="card-text text-white">“{description}”</p>
            </div>
            <div className="box d-flex mb-3 lg-mt-0  align-items-center">
              <div className="icon-user me-1">
                <i class="fas fa-2x fa-user-friends"></i>
              </div>
              <div className="box-text">
                {join} <br /> kids have joined
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-8  col-10 mx-auto">
          <div className="page-text-details mb-4">
            <div className="page-title d-flex mb-4 flex-lg-row flex-column align-items-lg-center align-items-start">
              <div className="page-title-text me-5">{title}</div>
              <div className="wrapper mt-lg-0 mt-5">
                <div class="button" onClick={handleOpen2}>
                  <div class="icon">
                    <i class="fas fa-play"></i>
                  </div>
                  <span>Watch trailer</span>
                </div>
                {/* <span className="tailor">Watch tailor</span> */}
              </div>
            </div>
            <div className="page-text-description w-50 mb-3 text-left">
              {descriptionpart}
            </div>
            <div className="page-last-text">
              {/* Make a dynamic */}
              <b>{description_two}</b>
            </div>
          </div>
          {/* <div className="page-promo-code mb-5">
            <input
              type="text"
              placeholder="Promo Code"
              className="input me-3"
            />
            <input type="submit" className="apply" value="Apply" />
          </div> */}
          <div className="discount-gift-section  flex-column flex-lg-row d-flex align-items-start mt-lg-0 mt-2">
            <div className="discount-gift-box d-flex me-4 mb-lg-0 mb-5 align-items-center justify-content-center ">
              <button className="text" onClick={handleOpen}>
                Gift now
              </button>
              <div className="img">
                <img
                  src={gift}
                  width="80px"
                  className="gift-box-img img-fluid"
                  onClick={handleOpen}
                  alt=""
                />
              </div>
              <div className="number">
                <span className="number-box">
                  {discount && <img src={line} className="line" alt="" />}
                  <span>₹ {amount}</span>
                </span>
              </div>
            </div>
            {discount && (
              <div className="discount-money mt-lg-0 mb-lg-0 mx-auto mx-lg-0">
                <div className="discount">
                  ₹<span className="discount-number-box"> {discount}</span>
                </div>
                <div className="offer">
                  offer expires in <EventTimer dateevent={expiryDate} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <LoginModal
        openbtn={handleOpen}
        closebtn={handleClose}
        open={open}
        courseDetails={value}
      />
      <VideoModal
        openbtn2={handleOpen2}
        closebtn2={handleClose2}
        open2={open2}
        videofile={video}
      />
      <div id="recaptcha-container"></div>
    </div>
  );
};

export default Page;
