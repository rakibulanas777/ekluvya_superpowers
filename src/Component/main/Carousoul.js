import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";
import { Link } from "react-router-dom";
import HoverVideoPlayer from "react-hover-video-player";

import PausedOverlay from "./PausedOverlay";
import HorizontalScroll from "react-scroll-horizontal";

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
  const [coursesData, getCoursesData] = useState([]);

  useEffect(() => {
    async function getCourses() {
      // const courseData = await courses();
      // console.log({ courseData });
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
    <div className="container mb-5 carusoal">
      <a name="gift"></a>
      {/* <Slider {...settings} className="mb-5"> */}
      {/* <div> */}
        {/* <div className="content-wrapper"> */}
        <div className="row container portfolio_container boxed-style add-space ">
          {/* <div className="container portfolio_container boxed-style add-space "> */}
          {value.map(
            (sliders, index) =>
              value?.[0] && (
                <div class="col-lg-4">
                  <Sliders
                    Slidercard={{
                      // thumbnailUrl: coursesData?.thumbnailUrl,
                      ...sliders,
                      // ...value?.[0],
                    }}
                    index={index}
                    // id={sliders.id}
                  />
                  {/* <div class="portfolio_sizer"></div> */}{" "}
                </div>
              )
          )}
          </div>
        {/* </div> */}
      {/* </div> */}
      {/* </Slider> */}
      {/* <div className="arrow-icon-carrosoul  d-flex justify-content-around  mx-auto">
        <i class="fas fa-chevron-left" onClick={onClick}></i>
        <i class="fas fa-chevron-right"></i>
      </div> */}
    </div>
  );
};

export default Carousoul;

// const Sliders = ({ Slidercard }) => {
//   const { _id, courseName, thumbnailUrl:img, hover } = Slidercard;
//   return (
//     <div className="img_parent">
//       <span className="img_parent_hover">
//         <Link to={`/page/${_id}`} className="link">
//           <div className="image1">
//             <img src={img3} alt="" width="100%" className=" img-fluid" />
//             <p className="w-60 text-white">{hover}</p>
//           </div>
//           <div>
//             <div className="carousel-text">
//               <Link to={`/page/${_id}`} className="link">
//                 {courseName}
//               </Link>
//             </div>
//             <img src={img} alt="" className="image2" />
//           </div>
//         </Link>
//       </span>
//     </div>
//   );
// };

// const Sliders = ({ Slidercard }) => {
//   const { _id, title: courseName, img, hover, video } = Slidercard;
//   return (
//     <div className="img_parent">
//       <Link to={`/page/${_id}`} className="link">
//         <HoverVideoPlayer
//           videoSrc={[
//             {
//               src: video,
//               type: "video/mp4",
//             },
//           ]}
//           crossOrigin={null}
//           muted={false}
//           volume={1}
//           controls={true}
//           style={{
//             width: "5rem",
//             // minHeight: "10rem",
//             // top: "-20px",
//             // display: "block",
//           }}
//           pausedOverlayWrapperStyle={{
//             width: "90%",
//             height: "90%",
//             inset: "none",
//           }}
//           pausedOverlay={<PausedOverlay img={img} courseName={courseName} />}
//         />
//       </Link>
//     </div>
//   );
// };

const Sliders = ({ Slidercard,index }) => {
  const { _id, title: courseName, img, hover, video } = Slidercard;
  
  return (
    <>
      <div
        class={`fadeIn portfolio-three masonry-item has-hover-thumb portfolio-item-slug wow post-${_id} portfolio-item type-portfolio-item status-publish has-post-thumbnail hentry filters-youtube loaded`}
        data-wow-delay="224ms"
        style={{
          height: "300px",
          width: "100%",
          visibility: " visible",
          animationDelay: "224ms",
          animationName: "fadeIn",
          margin: "10px",
        }}
      >
        <div class="picture">
          <Link to={`/page/${_id}`} className="link">
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
                backgroundImage: `url(${img})`,
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
