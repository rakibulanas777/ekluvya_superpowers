import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";
import { Link } from "react-router-dom";
import img3 from "../../image/Group 70.svg";
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

const Carousoul = () => {
  const [value, getValue] = useState([]);
  useEffect(() => {
    fetch("../../../data.json")
      .then((res) => res.json())
      .then((data) => getValue(data));
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    arrows: false,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container mb-5 carusoal">
      <Slider {...settings}>
        {value.map((sliders) => (
          <Sliders Slidercard={sliders} id={sliders.id}></Sliders>
        ))}
      </Slider>
    </div>
  );
};

export default Carousoul;

const Sliders = ({ Slidercard }) => {
  const { id, fname, lname, img } = Slidercard;
  return (
    <div className="carsol-img w-75">
      <div className="img-carosoul">
        <img src={img3} className="hover" alt="" />
      </div>
      <img
        src={img}
        alt=""
        width="266px"
        height="271px"
        className="img-fluid carsol-img-hover"
      />

      <div className="carousel-text">
        {" "}
        <Link to={`/page/${id}`} className="link">
          {fname} <br /> {lname}
        </Link>
      </div>
    </div>
  );
};
