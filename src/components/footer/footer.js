import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import Icon1 from "../../assets/postnod.png";
import Icon2 from "../../assets/klara.svg";
import Icon3 from "../../assets/master.svg";
import Icon4 from "../../assets/paypal.png";

export default function Footer(props) {
	return (
		<div className="footer">
			<div className="footer-upper-card shadow">
				<div className="footer-brand-logo-wrapper">
					<img
						className="footer-brand-logo"
						src="https://postablomster.se/wp-content/uploads/2022/04/4A72CA1E-5B94-4C03-8196-B1F10670AF87.png"
					/>
				</div>
				<a href="#" className="footer-link">
					Om PostaBlomster
				</a>
				<a href="#" className="footer-link">
					Hjalp & Kontakt
				</a>
				<a href="#" className="footer-link">
					Frakt & Return
				</a>
				<a href="#" className="footer-link">
					Vara Gratier till kunder
				</a>
				<a href="#" className="footer-link">
					Kopevillkor
				</a>
				<a href="#" className="footer-link">
					Cookiepolicy
				</a>
			</div>
			<div className="footer-lower-icons">
				<img
					src={Icon1}
					className="footer-icon footer-img1"
					width={"100px"}
					height={"30px"}
				/>
				<img src={Icon2} className="footer-icon footer-img2" width={"60px"} />
				<img src={Icon3} className="footer-icon footer-img3" width={"40px"} />
				<i
					class="fa-brands fa-cc-visa footer-icon footer-icon1"
					style={{ fontSize: "2rem" }}
				></i>
				<img src={Icon4} className="footer-icon footer-img4" width={"40px"} />
				<i
					class="fab fa-stripe footer-icon footer-icon2"
					style={{ fontSize: "2rem" }}
				></i>
			</div>
		</div>
	);
}
