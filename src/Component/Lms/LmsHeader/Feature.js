import React from "react";
import header from "../../../image/girl dipressed.jpeg";
import img from "../../../image/Group 50@2x.png";
import arrow from "../../../image/Path 67.svg";
import "./Feature.css";
const Feature = () => {
	return (
		<div className="feature">
			<div className="width container">
				<div className="py-3 mb-3">
					<div className="left-part">
						<img src={img} alt="" width="150px" className="img-fluid" />
					</div>
				</div>
				<div className="col-10 col-lg-12 mx-auto">
					<div className="feature-main">
						<div className="feature-title mb-5">
							Pass Inter exams, in just 30 days
						</div>
						{/* flex part  */}

						<div className="flex-part-feature">
							<div className="d-flex align-items-center mb-5">
								<div className="flex-content mx-5">
									Frequently appearing questions
								</div>
							</div>
							<div className="d-flex align-items-center mb-5">
								<div className="flex-content mx-5">
									Frequently appearing questions
								</div>
							</div>
							<div className="d-flex align-items-center mb-5">
								<div className="flex-content mx-5">
									Frequently appearing questions
								</div>
							</div>
						</div>
						<div className="text-bottom  d-flex justify-content-center flex-column mt-5">
							<div className="learn-more-text mb-2">
								{" "}
								What other kids have to say
							</div>
							<div className="">
								<img src={arrow} alt="" className="text-center" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Feature;
