import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./footer.css";

export default function Footer(props) {
	useEffect(() => {}, []);

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
				<i class="fa-brands fa-cc-visa"></i>
				<i class="fab fa-stripe"></i>
			</div>
		</div>
	);
}
