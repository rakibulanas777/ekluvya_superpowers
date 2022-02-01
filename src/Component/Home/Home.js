import React from "react";
import "./Home.css";
import arrow from "../../image/Path-67.webp";
const Home = () => {
	return (
		<header>
			<div className="d-flex flex-column container main justify-content-center">
				<div className="main-title">BITTER TRUTH</div>
				<div className="main-title-1">The future is a game</div>
				<div className="main-description mb-4">
					Where the rules can be changed <br /> by anyone, at anytime
					<br />
					<br />
					For a future that’s so unpredictable <br /> how do we school our kids
					?
					<div className="icon-arrow mt-5" style={{ marginLeft: "20%" }}>
						<a href="#gift">
							<img src={arrow} width="16px" height="100%" alt="" />
						</a>
					</div>
				</div>
			</div>
			<div className="right-position-text">
				<div className="right-position-text-title mb-3">PULLELA GOPICHANO</div>
				<div className="bottom-deatails ">
					Father of two | Dronacharya Awardee <br /> Arjuna AWardee | Padma
					Bhushan
				</div>
			</div>
		</header>
	);
};

export default Home;
