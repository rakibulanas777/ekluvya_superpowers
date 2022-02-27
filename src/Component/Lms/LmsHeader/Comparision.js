import React from "react";
import img from "../../../image/Group 50@2x.png";
import "./Comparision.css";
const Comparision = () => {
	return (
		<div className="comparision">
			<div className="width container">
				<div className="p-3">
					<div className="left-part">
						<img src={img} alt="" width="150px" className="img-fluid" />
					</div>
				</div>

				<div className="col-lg-6 ms-auto col-10">
					<div className="comparision-title">
						A small price to pay in comparison to wasting another year
					</div>
				</div>
			</div>
		</div>
	);
};

export default Comparision;
