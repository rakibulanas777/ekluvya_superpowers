import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";
import { Link } from "react-router-dom";
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
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
    <div className="container carusoal">
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
  const { id, name, img } = Slidercard;
  return (
    <div className="carsol-img">
      <img src={img} alt="" className="w-75 carsol-img-hover" />

      <div className="carousel-text w-25">
        {" "}
        <Link to={`/page/${id}`} className="link">
          {name}
        </Link>
      </div>
    </div>
  );
};
