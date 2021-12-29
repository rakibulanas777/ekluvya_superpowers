import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderBody.css";
import { Link } from "react-router-dom";
import img3 from "../../image/Gift_hover.svg";
import topGift from "../../image/top_gift.svg";
import { courses } from "../../api_call";
import VideoModal from "../Modal/VideoModal";

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
  const [handlePopup, setHandlePopup] = useState({
    show: false,
    video: "",
  });
  useEffect(() => {
    async function getCourses() {
      // const courseData = await courses();
      // getCoursesData(courseData?.[0]);
      // getValue(courseData?.[0]?.subject || []);
      fetch("../../../body_data.json")
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
          slidesToShow: 3,
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
    <div className="container mb-0 carusoal">
      <Slider {...settings} className="mb-0">
        {value.map((sliders) => (
          <Sliders
            Slidercard={sliders}
            id={sliders.id}
            setHandlePopup={setHandlePopup}
          ></Sliders>
        ))}
      </Slider>
      <VideoModal
        openbtn2={() => {}}
        closebtn2={() => setHandlePopup({ show: false, video: "" })}
        open2={handlePopup.show}
        videofile={handlePopup.video}
      />
    </div>
  );
};

export default Carousoul;

const Sliders = ({ Slidercard, setHandlePopup }) => {
  const { _id, title: courseName, img, hover, video } = Slidercard;
  const image_epi = img;
  return (
    <>
      <div
        class={`fadeIn portfolio-three masonry-item has-hover-thumb portfolio-item-slug wow post-${_id} portfolio-item type-portfolio-item status-publish has-post-thumbnail hentry filters-youtube loaded`}
        data-wow-delay="224ms"
        style={{
          height: "150px",
          width: "90%",
          visibility: " visible",
          animationDelay: "224ms",
          animationName: "fadeIn",
        }}
      >
        <div class="picture1 ">
          <Link
            to={"#"}
            className="link"
            onClick={() =>
              setHandlePopup({
                show: true,
                video: video,
              })
            }
          >
            <video
              id="auto-play-video_button"
              class="hover-webm"
              // autoPlay={true}
              loop={true}
              muted={false}
              preload
              controls
              onMouseOver={(e) => e.target.play()}
              onMouseOut={(e) => e.target.pause()}
            >
              {/* <source
              src="https://plexx.mallinidesign.com/wp-content/uploads/2017/09/chas.webm"
              type="video/webm"
            /> */}
              <source src={video} type="video/mp4" />
            </video>

            <div
              class="thumb"
              data-ratio="1.7786561264822"
              style={{
                backgroundImage: `url(${image_epi})`,
              }}
            ></div>
          </Link>
        </div>
        <div class="item-description ">
          <h2>{courseName}</h2>
          {/* <div class="item-filter">Youtube </div> */}
        </div>
      </div>
    </>
  );
};
