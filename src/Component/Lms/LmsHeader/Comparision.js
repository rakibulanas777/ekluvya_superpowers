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
					<div className="d-flex">
						<div className="select" tabindex="1">
							<input
								className="selectopt"
								name="test"
								type="radio"
								id="opt1"
								checked
							/>
							<label for="opt1" className="option">
								1st Year
							</label>
							<input className="selectopt" name="test" type="radio" id="opt2" />
							<label for="opt2" className="option">
								2nd Year
							</label>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Comparision;
