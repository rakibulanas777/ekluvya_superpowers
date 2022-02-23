import React from "react";
import img from "../../../image/Group 50@2x.png";
import "./Comparision.css";
const Comparision = () => {
	return (
		<div className="comparision">
			<div className="p-3">
				<div className="left-part">
					<img src={img} alt="" width="150px" className="img-fluid" />
				</div>
			</div>
		</div>
	);
};

export default Comparision;
