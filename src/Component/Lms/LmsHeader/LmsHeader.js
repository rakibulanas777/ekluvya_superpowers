import React from "react";
import header from "../../../image/girl dipressed.jpeg";
import img from "../../../image/Group 50@2x.png";
import arrow from "../../../image/Path 67.svg";

import "./LmsHeader.css";
const LmsHeader = () => {
	return (
		<div className="lmsheader">
			<div className="width container">
				<div className="navbar-part mb-5">
					<div className="d-flex justify-content-between py-3">
						<div className="left-part">
							<img src={img} alt="" width="150px" className="img-fluid" />
						</div>
						<div className="right-part">
							<img
								src="https://img.icons8.com/color/100/000000/whatsapp--v1.png"
								width="68px"
								alt=""
								className="img-fluid"
							/>
						</div>
					</div>
				</div>
				<div className="col-10 mx-lg-0 mx-auto">
					<div className="main-text-part">
						<div className="title-lmsheader">
							Scared of Intermediate exams ?
						</div>
						<div className="description-lmsheader mb-3">
							Well, don’t be. Presenting Last Minute Studies
						</div>
						<div className="deatils-lmsheader mb-4">
							Last Minute Studies is India’s only online course <br /> made for
							average and below-average students
						</div>
						<div className="learn-more d-flex justify-content-center flex-column">
							<div className="learn-more-text">Learn more</div>
							<div className="img-part mx-auto">
								<img src={arrow} alt="" className="text-center" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LmsHeader;
