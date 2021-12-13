import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";
import { Link } from "react-router-dom";
import img3 from "../../image/Gift_hover.svg";
import topGift from "../../image/top_gift.svg";

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
    fetch("../../../data.json")
      .then((res) => res.json())
      .then((data) => getValue(data));
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    arrows: false,
    slidesToScroll: 8,
    initialSlide: 4,
    // width:"300px",
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
          initialSlide: 4,
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
          initialSlide: 3,
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
      <div className="arrow-icon-carrosoul text-center d-flex justify-content-around  mx-auto">
        <i class="fas fa-chevron-left" onClick={onClick}></i>
        <i class="fas fa-chevron-right"></i>
      </div>
    </div>
  );
};

export default Carousoul;

const Sliders = ({ Slidercard }) => {
  const { id, fname, lname, img, hover } = Slidercard;
  return (
    <div className="img_parent">
      <span className="img_parent_hover">
        <Link to={`/page/${id}`} className="link">
          <div className="image1">
            <img src={img3} alt="" width="100%" className=" img-fluid" />
            <p className="w-60 text-white">{hover}</p>
          </div>
          <div>
            <div className="carousel-text">
              {" "}
              <Link to={`/page/${id}`} className="link">
                {fname} <br /> {lname}
              </Link>
            </div>
            <img src={img} alt="" className="image2" />
          </div>
        </Link>
      </span>
    </div>
    // <div className="carsol-img w-75">
    //   <div className="main-img-hover">
    // <img
    //   src={img3}
    //   alt=""
    //   width="200px"
    //   height="176px"
    //   className="img-fluid  carsol-img-hover"
    // />

    //     <div className="carousel-text">
    //       {" "}
    //       <Link to={`/page/${id}`} className="link">
    //         {fname} <br /> {lname}
    //       </Link>
    //     </div>
    //     <img
    //       src={img}
    //       className="img-carosoul hover"
    //       width="100%"
    //       height="200px"
    //       alt=""
    //     />
    //   </div>
    //   {/* <div className="img-carosoul">
    //     <div className="img-carosoul-hover"> */}
    //   {/* <img
    //         src={img3}
    //         className="hover"
    //         width="250px"
    //         height="250px"
    //         alt=""
    //       /> */}
    //   {/* <div className="text-hover w-75 text-white">{hover}</div> */}
    //   {/* </div>
    //   </div> */}
    // </div>
  );
};
