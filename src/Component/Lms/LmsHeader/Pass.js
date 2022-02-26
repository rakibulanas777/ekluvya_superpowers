import React from "react";
import img from "../../../image/Group 50@2x.png";
import "./pass.css";
const Pass = () => {
	return (
		<div className="pass">
			<div className="width container">
				<div className="p-3">
					<div className="left-part">
						<img src={img} alt="" width="150px" className="img-fluid" />
					</div>
				</div>
				<div className="pass-title mt-4 mb-3">
					Last Minute Studies is God-sent
				</div>
				<div className="col-10 mx-auto mx-lg-0 col-lg-7">
					<div className="pass-grid">
						<div className="pass-grid-item text-center mb-lg-0 mb-4 p-4">
							<div className="pass-grid-item-title mb-3">
								I know I didn’t focus for the last 11 months. But thank God, I
								found Last Minute Studies
							</div>
							<div className="pass-grid-deatils mb-5">
								Chaitanya Vavirala Vijayawada
							</div>
							<div className="position"></div>
						</div>
						<div className="pass-grid-item text-center  mb-lg-0 mb-4 p-4">
							<div className="pass-grid-item-title mb-3">
								I know I didn’t focus for the last 11 months. But thank God, I
								found Last Minute Studies
							</div>
							<div className="pass-grid-deatils mb-5">
								Chaitanya Vavirala Vijayawada
							</div>
							<div className="position"></div>
						</div>
						<div className="pass-grid-item text-center  mb-lg-0 mb-4 p-4">
							<div className="pass-grid-item-title mb-3">
								I know I didn’t focus for the last 11 months. But thank God, I
								found Last Minute Studies
							</div>
							<div className="pass-grid-deatils mb-5">
								Chaitanya Vavirala Vijayawada
							</div>
							<div className="position"></div>
						</div>
					</div>
					<div className="d-flex flex-column flex-lg-row inter-pass align-items-center">
						<div className="inter-pass-title">To pass Inter</div>
						<button className="btn-pass mx-3">Click here</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Pass;
