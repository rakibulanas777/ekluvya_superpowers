import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";
import { Link } from "react-router-dom";
import img3 from "../../image/Gift_hover.svg";
import topGift from "../../image/top_gift.svg";
import { courses } from "../../api_call";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}

const Carousoul = ({ onClick }) => {
  const [value, getValue] = useState([]);

  useEffect(() => {
    async function getCourses() {
      // const courseData = await courses();
      // getCoursesData(courseData?.[0]);
      // getValue(courseData?.[0]?.subject || []);
      fetch("../../../data.json")
        .then((res) => res.json())
        .then((data) => getValue(data));
    }
    getCourses();
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    arrows: false,
    slidesToScroll: 8,
    initialSlide: 8,
    // width:"300px",
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          infinite: true,
          dots: true,
          initialSlide: 6,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          initialSlide: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="container-fluid mb-5 carusoal">
      <a name="gift"></a>
      <Slider {...settings} className="mb-5">
        {value.map((sliders) => (
          <Sliders Slidercard={sliders} id={sliders.id}></Sliders>
        ))}
      </Slider>
      <div className="arrow-icon-carrosoul  d-flex justify-content-around  mx-auto">
        <i class="fas fa-chevron-left" onClick={onClick}></i>
        <i class="fas fa-chevron-right"></i>
      </div>
    </div>
  );
};

export default Carousoul;

const Sliders = ({ Slidercard }) => {
  const { _id, title: courseName, img, hover } = Slidercard;

  return (
    <div className="img_parent">
      <span className="img_parent_hover">
        <Link to={`/page/${_id}`} className="link">
          <div className="image1">
            <img src={img3} alt="" width="100%" className=" img-fluid" />
            <p className="w-60 text-white">{hover}</p>
          </div>
          <div>
            <div className="carousel-text">
              <Link to={`/page/${_id}`} className="link">
                {courseName}
              </Link>
            </div>
            <img src={img} alt="" className="image2" />
          </div>
        </Link>
      </span>
    </div>
  );
};
