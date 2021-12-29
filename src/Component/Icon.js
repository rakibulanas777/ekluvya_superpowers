import React from "react";
import playstore from "../image/playstore.png";
import applestore from "../image/applestore.png";
const Icon = () => {
  return (
    <div className="container mt-5 " style={{ marginBottom: "10%" }}>
      <div className="icon d-flex  justify-content-center">
        <div className="playstore p-3">
          <img src={playstore} className="img-fluid" width="150px" alt="" />
        </div>
        <div className="applestore p-3">
          <img src={applestore} width="150px" className="img-fluid" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Icon;
