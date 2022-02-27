import React, { useState } from "react";
import header from "../../../image/girl dipressed.jpeg";
import img from "../../../image/Group 50@2x.png";
const Navbar = () => {
	const [color, setColor] = useState(false);
	const changeColor = () => {
		if (window.scrollY >= 110) {
			setColor(true);
		} else {
			setColor(false);
		}
	};
	window.addEventListener("scroll", changeColor);
	return (
		<nav
			className={
				color
					? "navbar navbar-expand-lg sticky-top scroll navbar-dark "
					: "navbar navbar-expand-lg sticky-top withoutScroll navbar-dark"
			}
		>
			<div className="flex-header">
				<div className="left-part">
					<img src={img} alt="" width="150px" className="img-fluid" />
				</div>
				{/* <div className="right-part">
					<img
						src="https://img.icons8.com/color/100/000000/whatsapp--v1.png"
						width="68px"
						alt=""
						className="img-fluid"
					/>
				</div> */}
			</div>
		</nav>
	);
};

export default Navbar;
