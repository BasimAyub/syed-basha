import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

export default function Header(props) {
	const [active1, setActive1] = useState("");
	const [active2, setActive2] = useState("");
	const [active3, setActive3] = useState("");
	const [active4, setActive4] = useState("");
	const [active5, setActive5] = useState("");

	useEffect(() => {
		if (props.page === 1) {
			setActive1("active");
		} else if (props.page === 2) {
			setActive2("active");
		} else if (props.page === 3) {
			setActive3("active");
		} else if (props.page === 4) {
			setActive4("active");
		} else if (props.page === 5) {
			setActive5("active");
		}
	}, []);

	return (
		<div className="header">
			<div className="header-brand-logo-wrapper">
				<img
					className="header-brand-logo"
					src="https://postablomster.se/wp-content/uploads/2022/04/4A72CA1E-5B94-4C03-8196-B1F10670AF87.png"
				/>
			</div>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<button
					className="navbar-toggler ml-auto"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div
					className="collapse navbar-collapse justify-content-between"
					id="navbarSupportedContent"
				>
					<ul className="navbar-nav">
						<select className="header-custom-select">
							<option value="1">SEK</option>
							<option value="2">USD</option>
						</select>
						<li className={`nav-item ${active1}`}>
							<Link to="/" className="nav-link">
								HEM <span className="sr-only">(current)</span>
							</Link>
						</li>
						<li className={`nav-item ${active2}`}>
							<Link to="/AllaBlomgavor" className="nav-link">
								ALLA BLOMGAVOR
							</Link>
						</li>
						<li className={`nav-item ${active3}`}>
							<Link to="/DesignaBukett" className="nav-link">
								DESIGNA BUKETT
							</Link>
						</li>
						<li className={`nav-item ${active4}`}>
							<Link to="/OmPosablomster" className="nav-link">
								OM POSTABLOMSTER
							</Link>
						</li>
						<li className={`nav-item ${active5}`}>
							<Link to="/Kontakt" className="nav-link">
								HJALP & KONTAKT
							</Link>
						</li>
						<div className="header-icon-link-wrapper">
							<a href="#" className="header-icon-link">
								<i className="bi bi-search"></i>
							</a>
							<a href="#" className="header-icon-link">
								<i className="bi bi-bag"></i>
							</a>
							<a href="#" className="header-icon-link">
								<span className="header-badge badge badge-dark rounded-circle">
									0
								</span>
							</a>
						</div>
					</ul>
				</div>
			</nav>
		</div>
	);
}
