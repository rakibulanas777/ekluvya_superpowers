import React from "react";
import playstore from "../image/playstore.png";
import applestore from "../image/applestore.png";
import './icon.css'
import { Link } from "react-router-dom";
const Icon = () => {
  return (
    <div className="container mt-5 " style={{ marginBottom: "6%" }}>
      <div className="icon d-flex  justify-content-center">
        <Link
          to={{
            pathname:
              "https://play.google.com/store/apps/details?id=com.learning.ekluvya",
          }}
          target="_blank"
        >
          <div className="playstore p-3 hover-icon">
            <img src={playstore} className="img-fluid" width="150px" height={"100%"} alt="playstore" />
          </div>
        </Link>
        {/* <div className="applestore p-3 hover-icon">
          <img src={applestore} width="150px" className="img-fluid" alt="" />
        </div> */}
      </div>
      <div className="d-flex justify-content-center mt-5">
        <Link className="privacy_policy_link" to="/privacy-policy.html">
          Privacy Policy
        </Link>
      </div>
    </div>
  );
};

export default Icon;
