import React from "react";
import playstore from "../image/playstore.png";
import applestore from "../image/applestore.png";
import './icon.css'
import { Link } from "react-router-dom";
const Icon = () => {
  return (
    <div className="container mt-5 " style={{ marginBottom: "10%" }}>
      <div className="icon d-flex  justify-content-center">
        <Link
          to={{
            pathname:
              "https://play.google.com/store/apps/details?id=com.learning.ekluvya",
          }}
          target="_blank"
        >
          <div className="playstore p-3 hover-icon">
            <img src={playstore} className="img-fluid" width="150px" alt="" />
          </div>
        </Link>
        {/* <div className="applestore p-3 hover-icon">
          <img src={applestore} width="150px" className="img-fluid" alt="" />
        </div> */}
      </div>
    </div>
  );
};

export default Icon;
