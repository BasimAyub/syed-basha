import React, { useEffect, useState } from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import "./css/styles.css";
import pic1 from "../assets/firstection 1.png";
import pic2 from "../assets/sec7.png";
import flower1 from "../assets/flower (1).png";
import flower2 from "../assets/flower (2).png";
import flower3 from "../assets/flower (3).png";
import flower4 from "../assets/flower (4).png";
import flower5 from "../assets/flower (5).png";
import flower6 from "../assets/flower (6).png";
import Vector from "../assets/Vector.png";
import Vector1 from "../assets/vector1.png";
import red1 from "../assets/red (1).png";
import red2 from "../assets/red (2).png";
import red3 from "../assets/red (3).png";
import Sec6Vector1 from "../assets/vector-sec6 (1).png";
import Sec6Vector2 from "../assets/vector-sec6 (2).png";
import Sec6Vector3 from "../assets/vector-sec6 (3).png";
import Sec6Vector4 from "../assets/vector-sec6 (4).png";
import Sec6Vector5 from "../assets/vector-sec6 (5).png";
import Sec6Vector6 from "../assets/vector-sec6 (6).png";
// import Person1 from "../assets/person (1).png";
// import Person2 from "../assets/person (2).png";
// import Person3 from "../assets/person (3).png";
import Frame1 from "../assets/frame1.png";
import Frame2 from "../assets/frame2.png";
import Sec10Icon1 from "../assets/sec10 icon (1).png";
import Sec10Icon2 from "../assets/sec10 icon (2).png";
import Sec10Icon3 from "../assets/sec10 icon (3).png";
import Sec10Icon4 from "../assets/sec10 icon (4).png";
import Sec10 from "../assets/sec10.png";

export default function HomePage() {
	const [count1, setCount1] = useState(0);
	const [count2, setCount2] = useState(0);
	const [count3, setCount3] = useState(0);

	const incrementCount1 = () => {
		setCount1(count1 + 1);
	};
	const incrementCount2 = () => {
		setCount2(count2 + 1);
	};
	const incrementCount3 = () => {
		setCount3(count3 + 1);
	};

	const decrementCount1 = () => {
		setCount1(count1 - 1);
	};
	const decrementCount2 = () => {
		setCount2(count2 - 1);
	};
	const decrementCount3 = () => {
		setCount3(count3 - 1);
	};

	useEffect(() => {}, []);
	return (
		<div>
			<Header page={1} />

			<div className="sec-padding">
				<div className="row align-items-center">
					<div className="col-md-6 text-center">
						<img src={pic1} className="sec1-img" />
					</div>
					<div className="col-md-6">
						<div className="sec1-card shadow">
							<h4 className="sec1-heading my-4">
								PostaBlomster tar blomsteraffären till din skärm
							</h4>
							<span className="sec1-text my-4">
								Du kan designa din egen blomgåva med dina egna händer och smak
								Online
							</span>
							<button className="sec1-btn my-4">Designa bukett</button>
							<span className="sec1-text my-4">
								Beställ innan kl 12:00, förväntad leverans nästa dag.
							</span>
						</div>
					</div>
				</div>
			</div>

			<div className="sec-padding">
				<h2 className="sec2-heading text-center">Populär blomgåva</h2>
				<div className="row align-items-center">
					<div className="col-md-5">
						<div className="sec2-card shadow">
							<h4 className="sec1-heading mt-4 mb-3">Reste sig</h4>
							<span className="my-1">
								<i className="fa-regular fa-circle-check mr-2"></i>
								Stor
							</span>
							<span className="sec2-text my-2">
								Vill du överraska någon med en fin present genom brevlådan?
							</span>

							<h5 className="my-2 sec2-text-bold">Leverans till brevlådan</h5>
							<span className="my-2">
								<i className="fa-solid fa-up-down mr-2"></i>30 CM
							</span>
							<span className="my-2">
								<img src={Vector} className="mr-2" width={"20px"} />
								25 Blommor
							</span>
							<span className="sec2-price">kr 195,00</span>
							<button className="sec2-btn mt-4">Beställ nu</button>
						</div>
					</div>
					<div className="col-md-7 sec2-right">
						<div
							id="carouselExampleFade"
							className="carousel slide text-center"
							data-ride="carousel"
						>
							<div className="carousel-inner text-center">
								<div className="carousel-item active border-0">
									<img
										className="d-block w-60 m-auto sec2-carousel-img"
										src={flower1}
										alt="First slide"
									/>
								</div>
								<div className="carousel-item border-0">
									<img
										className="d-block w-60 m-auto sec2-carousel-img"
										src={flower2}
										alt="Second slide"
									/>
								</div>
								<div className="carousel-item border-0">
									<img
										className="d-block w-60 m-auto sec2-carousel-img"
										src={flower3}
										alt="Second slide"
									/>
								</div>
								<div className="carousel-item border-0">
									<img
										className="d-block w-60 m-auto sec2-carousel-img"
										src={flower4}
										alt="Second slide"
									/>
								</div>
								<div className="carousel-item border-0">
									<img
										className="d-block w-60 m-auto sec2-carousel-img"
										src={flower5}
										alt="Second slide"
									/>
								</div>
								<div className="carousel-item border-0">
									<img
										className="d-block w-60 m-auto sec2-carousel-img"
										src={flower6}
										alt="Second slide"
									/>
								</div>
							</div>
							<button
								className="carousel-control-prev sec2-carousel-btn shadow"
								href="#carouselExampleFade"
								data-slide="prev"
							>
								<i className="fa-solid fa-angle-left"></i>
							</button>
							<button
								className="carousel-control-next sec2-carousel-btn shadow"
								href="#carouselExampleFade"
								data-slide="next"
							>
								<i className="fa-solid fa-angle-right"></i>
							</button>
						</div>
					</div>
				</div>
			</div>

			<div className="sec-padding">
				<h2 className="sec2-heading text-center">
					Skicka blommor till brevlådan
				</h2>
				<div className="row align-items-center text-center">
					<div className="col-md-4">
						<div className="sec3-card shadow">
							<div
								id="carouselExampleIndicators1"
								className="carousel slide"
								data-ride="carousel"
							>
								<ol className="carousel-indicators sec3-carousel-indicators">
									<li
										data-target="#carouselExampleIndicators1"
										data-slide-to="0"
										className="active"
									></li>
									<li
										data-target="#carouselExampleIndicators1"
										data-slide-to="1"
									></li>
									<li
										data-target="#carouselExampleIndicators1"
										data-slide-to="2"
									></li>
									<li
										data-target="#carouselExampleIndicators1"
										data-slide-to="3"
									></li>
								</ol>
								<div className="carousel-inner sec3-carousel-inner">
									<div className="carousel-item active border-0">
										<img
											className="d-block m-auto sec3-carousel-img"
											src={flower1}
											alt="First slide"
										/>
									</div>
									<div className="carousel-item border-0">
										<img
											className="d-block m-auto sec3-carousel-img"
											src={flower2}
											alt="Second slide"
										/>
									</div>
									<div className="carousel-item border-0">
										<img
											className="d-block m-auto sec3-carousel-img"
											src={flower3}
											alt="Third slide"
										/>
									</div>
									<div className="carousel-item border-0">
										<img
											className="d-block m-auto sec3-carousel-img"
											src={flower4}
											alt="Fourth slide"
										/>
									</div>
								</div>
							</div>
							<h4 className="sec1-heading mt-4 mb-2"> Hibiskus</h4>
							<span className="my-1">
								<i className="fa-regular fa-circle-check mr-2"></i>I lager
							</span>
							<span className="sec2-text my-2">
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry.
							</span>
							<span className="sec3-price">224.25$</span>
							<button className="sec2-btn mt-4">Beställ nu</button>
						</div>
					</div>
					<div className="col-md-4">
						<div className="sec3-card shadow">
							<div
								id="carouselExampleIndicators2"
								className="carousel slide"
								data-ride="carousel"
							>
								<ol className="carousel-indicators sec3-carousel-indicators">
									<li
										data-target="#carouselExampleIndicators2"
										data-slide-to="0"
										className="active"
									></li>
									<li
										data-target="#carouselExampleIndicators2"
										data-slide-to="1"
									></li>
									<li
										data-target="#carouselExampleIndicators2"
										data-slide-to="2"
									></li>
									<li
										data-target="#carouselExampleIndicators2"
										data-slide-to="3"
									></li>
								</ol>
								<div className="carousel-inner sec3-carousel-inner">
									<div className="carousel-item active border-0">
										<img
											className="d-block m-auto sec3-carousel-img"
											src={flower5}
											alt="First slide"
										/>
									</div>
									<div className="carousel-item border-0">
										<img
											className="d-block m-auto sec3-carousel-img"
											src={flower6}
											alt="Second slide"
										/>
									</div>
									<div className="carousel-item border-0">
										<img
											className="d-block m-auto sec3-carousel-img"
											src={flower1}
											alt="Third slide"
										/>
									</div>
									<div className="carousel-item border-0">
										<img
											className="d-block m-auto sec3-carousel-img"
											src={flower2}
											alt="Fourth slide"
										/>
									</div>
								</div>
							</div>
							<h4 className="sec1-heading mt-4 mb-2"> Hibiskus</h4>
							<span className="my-1">
								<i className="fa-regular fa-circle-check mr-2"></i>I lager
							</span>
							<span className="sec2-text my-2">
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry.
							</span>
							<span className="sec3-price">224.25$</span>
							<button className="sec2-btn mt-4">Beställ nu</button>
						</div>
					</div>
					<div className="col-md-4">
						<div className="sec3-card shadow">
							<div
								id="carouselExampleIndicators3"
								className="carousel slide"
								data-ride="carousel"
							>
								<ol className="carousel-indicators sec3-carousel-indicators">
									<li
										data-target="#carouselExampleIndicators3"
										data-slide-to="0"
										className="active"
									></li>
									<li
										data-target="#carouselExampleIndicators3"
										data-slide-to="1"
									></li>
									<li
										data-target="#carouselExampleIndicators3"
										data-slide-to="2"
									></li>
									<li
										data-target="#carouselExampleIndicators3"
										data-slide-to="3"
									></li>
								</ol>
								<div className="carousel-inner sec3-carousel-inner">
									<div className="carousel-item active border-0">
										<img
											className="d-block m-auto sec3-carousel-img"
											src={flower3}
											alt="First slide"
										/>
									</div>
									<div className="carousel-item border-0">
										<img
											className="d-block m-auto sec3-carousel-img"
											src={flower4}
											alt="Second slide"
										/>
									</div>
									<div className="carousel-item border-0">
										<img
											className="d-block m-auto sec3-carousel-img"
											src={flower5}
											alt="Third slide"
										/>
									</div>
									<div className="carousel-item border-0">
										<img
											className="d-block m-auto sec3-carousel-img"
											src={flower6}
											alt="Fourth slide"
										/>
									</div>
								</div>
							</div>
							<h4 className="sec1-heading mt-4 mb-2"> Hibiskus</h4>
							<span className="my-1">
								<i className="fa-regular fa-circle-check mr-2"></i>I lager
							</span>
							<span className="sec2-text my-2">
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry.
							</span>
							<span className="sec3-price">224.25$</span>
							<button className="sec2-btn mt-4">Beställ nu</button>
						</div>
					</div>
					<div className="col-md-4 top">
						<div className="sec3-card shadow">
							<div
								id="carouselExampleIndicators4"
								className="carousel slide"
								data-ride="carousel"
							>
								<ol className="carousel-indicators sec3-carousel-indicators">
									<li
										data-target="#carouselExampleIndicators4"
										data-slide-to="0"
										className="active"
									></li>
									<li
										data-target="#carouselExampleIndicators4"
										data-slide-to="1"
									></li>
									<li
										data-target="#carouselExampleIndicators4"
										data-slide-to="2"
									></li>
									<li
										data-target="#carouselExampleIndicators4"
										data-slide-to="3"
									></li>
								</ol>
								<div className="carousel-inner sec3-carousel-inner">
									<div className="carousel-item active border-0">
										<img
											className="d-block m-auto sec3-carousel-img"
											src={flower1}
											alt="First slide"
										/>
									</div>
									<div className="carousel-item border-0">
										<img
											className="d-block m-auto sec3-carousel-img"
											src={flower2}
											alt="Second slide"
										/>
									</div>
									<div className="carousel-item border-0">
										<img
											className="d-block m-auto sec3-carousel-img"
											src={flower3}
											alt="Third slide"
										/>
									</div>
									<div className="carousel-item border-0">
										<img
											className="d-block m-auto sec3-carousel-img"
											src={flower4}
											alt="Fourth slide"
										/>
									</div>
								</div>
							</div>
							<h4 className="sec1-heading mt-4 mb-2"> Hibiskus</h4>
							<span className="my-1">
								<i className="fa-regular fa-circle-check mr-2"></i>I lager
							</span>
							<span className="sec2-text my-2">
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry.
							</span>
							<span className="sec3-price">224.25$</span>
							<button className="sec2-btn mt-4">Beställ nu</button>
						</div>
					</div>
					<div className="col-md-4 top">
						<div className="sec3-card shadow">
							<div
								id="carouselExampleIndicators5"
								className="carousel slide"
								data-ride="carousel"
							>
								<ol className="carousel-indicators sec3-carousel-indicators">
									<li
										data-target="#carouselExampleIndicators5"
										data-slide-to="0"
										className="active"
									></li>
									<li
										data-target="#carouselExampleIndicators5"
										data-slide-to="1"
									></li>
									<li
										data-target="#carouselExampleIndicators5"
										data-slide-to="2"
									></li>
									<li
										data-target="#carouselExampleIndicators5"
										data-slide-to="3"
									></li>
								</ol>
								<div className="carousel-inner sec3-carousel-inner">
									<div className="carousel-item active border-0">
										<img
											className="d-block m-auto sec3-carousel-img"
											src={flower5}
											alt="First slide"
										/>
									</div>
									<div className="carousel-item border-0">
										<img
											className="d-block m-auto sec3-carousel-img"
											src={flower6}
											alt="Second slide"
										/>
									</div>
									<div className="carousel-item border-0">
										<img
											className="d-block m-auto sec3-carousel-img"
											src={flower1}
											alt="Third slide"
										/>
									</div>
									<div className="carousel-item border-0">
										<img
											className="d-block m-auto sec3-carousel-img"
											src={flower2}
											alt="Fourth slide"
										/>
									</div>
								</div>
							</div>
							<h4 className="sec1-heading mt-4 mb-2"> Hibiskus</h4>
							<span className="my-1">
								<i className="fa-regular fa-circle-check mr-2"></i>I lager
							</span>
							<span className="sec2-text my-2">
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry.
							</span>
							<span className="sec3-price">224.25$</span>
							<button className="sec2-btn mt-4">Beställ nu</button>
						</div>
					</div>
					<div className="col-md-4 top">
						<div className="sec3-card shadow">
							<div
								id="carouselExampleIndicators6"
								className="carousel slide"
								data-ride="carousel"
							>
								<ol className="carousel-indicators sec3-carousel-indicators">
									<li
										data-target="#carouselExampleIndicators6"
										data-slide-to="0"
										className="active"
									></li>
									<li
										data-target="#carouselExampleIndicators6"
										data-slide-to="1"
									></li>
									<li
										data-target="#carouselExampleIndicators6"
										data-slide-to="2"
									></li>
									<li
										data-target="#carouselExampleIndicators6"
										data-slide-to="3"
									></li>
								</ol>
								<div className="carousel-inner sec3-carousel-inner">
									<div className="carousel-item active border-0">
										<img
											className="d-block m-auto sec3-carousel-img"
											src={flower3}
											alt="First slide"
										/>
									</div>
									<div className="carousel-item border-0">
										<img
											className="d-block m-auto sec3-carousel-img"
											src={flower2}
											alt="Second slide"
										/>
									</div>
									<div className="carousel-item border-0">
										<img
											className="d-block m-auto sec3-carousel-img"
											src={flower1}
											alt="Third slide"
										/>
									</div>
									<div className="carousel-item border-0">
										<img
											className="d-block m-auto sec3-carousel-img"
											src={flower4}
											alt="Fourth slide"
										/>
									</div>
								</div>
							</div>
							<h4 className="sec1-heading mt-4 mb-2"> Hibiskus</h4>
							<span className="my-1">
								<i className="fa-regular fa-circle-check mr-2"></i>I lager
							</span>
							<span className="sec2-text my-2">
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry.
							</span>
							<span className="sec3-price">224.25$</span>
							<button className="sec2-btn mt-4">Beställ nu</button>
						</div>
					</div>
				</div>
			</div>

			<div className="sec-padding pt-1 text-center">
				<div className="sec4-dropdown-wrapper">
					<h4 className="sec4-dropdown-text mr-3 mb-0"> Se mer</h4>
					<div className="dropdown">
						<button
							className="btn dropdown-toggle secc4-drop-btn"
							type="button"
							id="dropdownMenuButtonHome"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false"
						>
							<i className="fa-solid fa-chevron-down"></i>
						</button>
						<div
							className="dropdown-menu"
							aria-labelledby="dropdownMenuButtonHome"
						>
							<a className="dropdown-item" href="#">
								Option 1
							</a>
							<a className="dropdown-item" href="#">
								Option 2
							</a>
							<a className="dropdown-item" href="#">
								Option 3
							</a>
						</div>
					</div>
				</div>
				<h2 className="sec2-heading">Samla din blomgåva</h2>
				<span className="sec2-text my-2">
					Letar du efter speciell gåva? riktigt speciell? Vill du samla din
					blomgåva med kärlek och med din egen hand? Ja, det är möjligt att göra
					det på PostaBlomster i enkla steg. Samla din egen blomgåva och få den
					från hjärtat för någon speciell.
				</span>

				{/* Progress Bar */}

				<h5 className="sec4-caption mt-5 mb-4">
					Plocka gärna minst 8 blommor - mest 12 blommor.
				</h5>
				<div
					id="carouselExample2"
					className="carousel slide text-center"
					data-ride="carousel"
				>
					<div className="carousel-inner text-center pt-5 px-5">
						<div className="carousel-item active border-0 sec4-carousel-item">
							<div className="row sec4-row">
								<div className="col-md-4">
									<div className="sec4-img-wrapper shadow">
										<img
											className="d-block m-auto sec4-carousel-img"
											src={red1}
											alt="First slide"
										/>
									</div>
									<h5 className="sec4-caption mt-5 mb-4">RÖTT LARM</h5>
									<span className="sec4-price">$15.00/Bit</span>
									<div className="sec4-cart-btn-wrapper mt-3">
										<button className="sec4-btn" onClick={decrementCount1}>
											<i className="fa-solid fa-minus"></i>
										</button>
										<span className="sec2-text mx-2">{count1}</span>
										<button className="sec4-btn" onClick={incrementCount1}>
											<i className="fa-solid fa-plus"></i>
										</button>
									</div>
								</div>
								<div className="col-md-4 sec4-mid-col">
									<div className="sec4-img-wrapper shadow">
										<img
											className="d-block m-auto sec4-carousel-img"
											src={red2}
											alt="First slide"
										/>
									</div>
									<h5 className="sec4-caption mt-5 mb-4">RÖTT LARM</h5>
									<span className="sec4-price">$45.00/Bit</span>
									<div className="sec4-cart-btn-wrapper mt-3">
										<button className="sec4-btn" onClick={decrementCount2}>
											<i className="fa-solid fa-minus"></i>
										</button>
										<span className="sec2-text mx-2">{count2}</span>
										<button className="sec4-btn" onClick={incrementCount2}>
											<i className="fa-solid fa-plus"></i>
										</button>
									</div>
								</div>
								<div className="col-md-4">
									<div className="sec4-img-wrapper shadow">
										<img
											className="d-block m-auto sec4-carousel-img"
											src={red3}
											alt="First slide"
										/>
									</div>
									<h5 className="sec4-caption mt-5 mb-4">RÖTT LARM</h5>
									<span className="sec4-price">$45.00/Bit</span>
									<div className="sec4-cart-btn-wrapper mt-3">
										<button className="sec4-btn" onClick={decrementCount3}>
											<i className="fa-solid fa-minus"></i>
										</button>
										<span className="sec2-text mx-2">{count3}</span>
										<button className="sec4-btn" onClick={incrementCount3}>
											<i className="fa-solid fa-plus"></i>
										</button>
									</div>
								</div>
							</div>
						</div>
						<div className="carousel-item border-0 sec4-carousel-item">
							<div className="row sec4-row">
								<div className="col-md-4">
									<div className="sec4-img-wrapper shadow">
										<img
											className="d-block m-auto sec4-carousel-img"
											src={red3}
											alt="First slide"
										/>
									</div>
									<h5 className="sec4-caption mt-5 mb-4">RÖTT LARM</h5>
									<span className="sec4-price">$15.00/Bit</span>
									<div className="sec4-cart-btn-wrapper mt-3">
										<button className="sec4-btn" onClick={decrementCount1}>
											<i className="fa-solid fa-minus"></i>
										</button>
										<span className="sec2-text mx-2">{count1}</span>
										<button className="sec4-btn" onClick={incrementCount1}>
											<i className="fa-solid fa-plus"></i>
										</button>
									</div>
								</div>
								<div className="col-md-4 sec4-mid-col">
									<div className="sec4-img-wrapper shadow">
										<img
											className="d-block m-auto sec4-carousel-img"
											src={red2}
											alt="First slide"
										/>
									</div>
									<h5 className="sec4-caption mt-5 mb-4">RÖTT LARM</h5>
									<span className="sec4-price">$45.00/Bit</span>
									<div className="sec4-cart-btn-wrapper mt-3">
										<button className="sec4-btn" onClick={decrementCount2}>
											<i className="fa-solid fa-minus"></i>
										</button>
										<span className="sec2-text mx-2">{count2}</span>
										<button className="sec4-btn" onClick={incrementCount2}>
											<i className="fa-solid fa-plus"></i>
										</button>
									</div>
								</div>
								<div className="col-md-4">
									<div className="sec4-img-wrapper shadow">
										<img
											className="d-block m-auto sec4-carousel-img"
											src={red1}
											alt="First slide"
										/>
									</div>
									<h5 className="sec4-caption mt-5 mb-4">RÖTT LARM</h5>
									<span className="sec4-price">$45.00/Bit</span>
									<div className="sec4-cart-btn-wrapper mt-3">
										<button className="sec4-btn" onClick={decrementCount3}>
											<i className="fa-solid fa-minus"></i>
										</button>
										<span className="sec2-text mx-2">{count3}</span>
										<button className="sec4-btn" onClick={incrementCount3}>
											<i className="fa-solid fa-plus"></i>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<button
						className="carousel-control-prev sec2-carousel-btn shadow"
						href="#carouselExample2"
						data-slide="prev"
					>
						<i className="fa-solid fa-angle-left"></i>
					</button>
					<button
						className="carousel-control-next sec2-carousel-btn shadow"
						href="#carouselExample2"
						data-slide="next"
					>
						<i className="fa-solid fa-angle-right"></i>
					</button>
				</div>
				<button className="sec1-btn my-4 mt-5">Designa bukett</button>
			</div>

			<div className="sec-padding sec5">
				<img src={Vector1} className="sec5-img" />
				<h2 className="sec2-heading text-center">Om ss</h2>
				<div className="sec5-card shadow m-auto">
					<h5 className="my-2 sec5-text">
						PostaBlomster liknar inte någon annan blomsterbudstjänst online. Vi
						erbjuder en online shoppingupplevelse som tar blomsteraffären till
						din skärm. Vi låter dig designa din egen blomgåva med dina egna
						händer och smak. Det är yperpersonalisering när den är som bäst.
						<br />
						<br />
						Välj de blommor du vill ha med. Vi har en veritabel regnbåge av
						blommor av högsta kvalitet att välja mellan som skiftar under
						säsongerna för att samla den bästa blomgåvan till någon du tycker
						om.
					</h5>
					<div className="sec5-icons">
						<i className="fa-brands fa-instagram"></i>
						<i className="fa-brands fa-snapchat mx-5"></i>
						<i className="fa-brands fa-facebook"></i>
					</div>
				</div>
			</div>

			<div className="sec-padding sec5 text-center">
				<h2 className="sec2-heading text-center">Varför oss</h2>
				<div className="row sec6-row">
					<div className="col-md-4 sec6-col">
						<div className="sec6-card shadow">
							<img src={Sec6Vector5} className="sec6-img" />
						</div>
						<span className="sec6-text mt-4 mb-5">Original Blomgåva</span>
					</div>
					<div className="col-md-4 sec6-col">
						<div className="sec6-card shadow">
							<img src={Sec6Vector2} className="sec6-img" />
						</div>
						<span className="sec6-text mt-4 mb-5">
							Beställ innan kl 12:00, leverans imorgon
						</span>
					</div>
					<div className="col-md-4 sec6-col">
						<div className="sec6-card shadow">
							<img src={Sec6Vector4} className="sec6-img" />
						</div>
						<span className="sec6-text mt-4 mb-5">
							Köp nu betala senare klarna
						</span>
					</div>
					<div className="col-md-4 sec6-col">
						<div className="sec6-card shadow">
							<img src={Sec6Vector1} className="sec6-img" />
						</div>
						<span className="sec6-text mt-4 mb-5">Snabbt svar kundservice</span>
					</div>
					<div className="col-md-4 sec6-col">
						<div className="sec6-card shadow">
							<img src={Sec6Vector3} className="sec6-img" />
						</div>
						<span className="sec6-text mt-4 mb-5">
							5 dagars färskhetsgaranti
						</span>
					</div>
					<div className="col-md-4 sec6-col">
						<div className="sec6-card shadow">
							<img src={Sec6Vector6} className="sec6-img" />
						</div>
						<span className="sec6-text mt-4 mb-5">
							Leverans direkt till brevlådan
						</span>
					</div>
				</div>
			</div>

			<div className="sec-padding">
				<h2 className="sec2-heading text-center">Vad lovar vi</h2>
				<div className="row align-items-center">
					<div className="col-md-6 text-center">
						<img src={pic2} className="sec7-img" />
					</div>
					<div className="col-md-6">
						<div className="sec1-card shadow">
							<span className="sec1-text my-4 text-left">
								Här vänligen glöm tanken att det är svårt och dyrt att skicka
								blommor till någon.
								<br />
								<br />
								På PostaBlomster kan du överraska familj och vänner med
								originella blomgåvor med posten, så om det är någons födelsedag
								eller att börja en ny fas i hans eller hennes liv, kan en liten
								gest betyda mycket.
								<br />
								<br />
								Din blomgåva kommer att anlända vi tidpunkt du önskar, leverans
								direkt till
							</span>
						</div>
					</div>
				</div>
			</div>

			{/* <div className="sec8-padding">
				<h2 className="sec2-heading text-center">Recensioner</h2>

				<div className="owl-carousel owl-theme mt-5">
					<div className="owl-item">
						<div className="card">
							<div className="img-card">
								<img
									src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
									alt=""
								/>
							</div>
							<div className="testimonial mt-4 mb-2">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Accusamus expedita dicta doloremque odit saepe quo natus aut
								accusantium alias blanditiis.
							</div>
							<div className="name">Denis Richie</div>
						</div>
					</div>
					<div className="owl-item">
						<div className="card">
							<div className="img-card">
								<img
									src="https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
									alt=""
								/>
							</div>
							<div className="testimonial mt-4 mb-2">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Accusamus expedita dicta doloremque odit saepe quo natus aut
								accusantium alias blanditiis.
							</div>
							<div className="name">Lisa Sthalekar</div>
						</div>
					</div>
					<div className="owl-item">
						<div className="card">
							<div className="img-card">
								<img
									src="https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
									alt=""
								/>
							</div>
							<div className="testimonial mt-4 mb-2">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Accusamus expedita dicta doloremque odit saepe quo natus aut
								accusantium alias blanditiis.
							</div>
							<div className="name">Elizabith Richie</div>
						</div>
					</div>
					<div className="owl-item">
						<div className="card">
							<div className="img-card">
								<img
									src="https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
									alt=""
								/>
							</div>
							<div className="testimonial mt-4 mb-2">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Accusamus expedita dicta doloremque odit saepe quo natus aut
								accusantium alias blanditiis.
							</div>
							<div className="name">Daniel Xavier</div>
						</div>
					</div>
					<div className="owl-item">
						<div className="card">
							<div className="img-card">
								<img
									src="https://images.pexels.com/photos/1832959/pexels-photo-1832959.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
									alt=""
								/>
							</div>
							<div className="testimonial mt-4 mb-2">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Accusamus expedita dicta doloremque odit saepe quo natus aut
								accusantium alias blanditiis.
							</div>
							<div className="name">Emma Watson</div>
						</div>
					</div>
					<div className="owl-item">
						<div className="card">
							<div className="img-card">
								<img
									src="https://images.pexels.com/photos/718261/pexels-photo-718261.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
									alt=""
								/>
							</div>
							<div className="testimonial mt-4 mb-2">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Accusamus expedita dicta doloremque odit saepe quo natus aut
								accusantium alias blanditiis.
							</div>
							<div className="name">Mohammad Imran</div>
						</div>
					</div>
				</div>
			</div> */}

			<div className="sec9">
				<img src={Frame1} className="sec9-img-left" />
				<img src={Frame2} className="sec9-img-right" />
				<div className="sec9-Zindex">
					<h2 className="sec2-heading text-center my-0">
						15 % RABATT PÅ DITT FÖRSTA KÖP
					</h2>
					<span className="sec2-text my-5 text-center">
						Signa upp på vårt nyhetsbrev för exklusiva erbjudanden plus 15 %
						rabatt på din första beställning.
					</span>
					<div className="input-btn-wrapper">
						<input
							type="text"
							className="sec9-input"
							id="Prenumerera"
							name="Prenumerera"
							placeholder="Skriv in epostadress"
						/>
						<button className="sec9-btn my-4">Prenumerera</button>
					</div>
				</div>
			</div>

			<div className="sec10">
				<img src={Sec10} className="sec10-img" />
				<h2 className="sec2-heading text-center">Kontakta Oss</h2>
				<div className="row sec10-row">
					<div className="col-md-7 sec10-left">
						<span className="sec10-input-head">Skicka ett meddelande</span>
						<div className="sec-10-input-wrapper">
							<input
								type="text"
								className="sec10-input mt-5"
								id="Prenumerera"
								name="Prenumerera"
								placeholder="Your name"
							/>
							<input
								type="text"
								className="sec10-input my-4"
								id="Prenumerera"
								name="Prenumerera"
								placeholder="Your email"
							/>
							<input
								type="text"
								className="sec10-input"
								id="Prenumerera"
								name="Prenumerera"
								placeholder="Subject"
							/>
							<textarea
								type="text"
								className="sec10-input mt-4"
								id="Prenumerera"
								name="Prenumerera"
								placeholder="Your name"
								rows="10"
							/>
							<button className="sec1-btn my-4">Skicka in</button>
						</div>
					</div>
					<div className="col-md-3 sec-10-right">
						<span className="sec10-input-head mb-4">Kontakttider</span>
						<span className="sec2-text mb-3">Mån-Fre 08:00 - 19:00</span>
						<span className="sec2-text mb-5">Lör-Sön 10:00 – 13:00</span>
						<span className="sec10-input-head mt-4 mb-4">Skicka ett email</span>
						<span className="sec2-text mb-4 d-flex">
							<img src={Sec10Icon3} className="sec10-icon" />
							info@bostablomster.se
						</span>
						<span className="sec2-text mb-4 d-flex">
							<img src={Sec10Icon4} className="sec10-icon" />
							posta_blomster
						</span>
						<span className="sec2-text mb-4 d-flex">
							<img src={Sec10Icon1} className="sec10-icon" />
							posta_blomster
						</span>
						<span className="sec2-text d-flex">
							<img src={Sec10Icon2} className="sec10-icon" />
							posta.blomster
						</span>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
}
