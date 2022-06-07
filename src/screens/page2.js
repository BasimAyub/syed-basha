import React, { useState } from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import OwlCarousel1 from "../components/owlCarousel1";
import OwlCarousel2 from "../components/owlCarousel2";
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
import red4 from "../assets/red (4).png";
import red5 from "../assets/red (5).png";
import Sec6Vector1 from "../assets/vector-sec6 (1).png";
import Sec6Vector2 from "../assets/vector-sec6 (2).png";
import Sec6Vector3 from "../assets/vector-sec6 (3).png";
import Sec6Vector4 from "../assets/vector-sec6 (4).png";
import Sec6Vector5 from "../assets/vector-sec6 (5).png";
import Sec6Vector6 from "../assets/vector-sec6 (6).png";

import Frame1 from "../assets/frame1.png";
import Frame2 from "../assets/frame2.png";
import Sec10Icon1 from "../assets/sec10 icon (1).png";
import Sec10Icon2 from "../assets/sec10 icon (2).png";
import Sec10Icon3 from "../assets/sec10 icon (3).png";
import Sec10Icon4 from "../assets/sec10 icon (4).png";
import Sec10 from "../assets/sec10.png";

export default function Page2() {
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
		if (count1 > 0) setCount1(count1 - 1);
	};
	const decrementCount2 = () => {
		if (count2 > 0) setCount2(count2 - 1);
	};
	const decrementCount3 = () => {
		if (count3 > 0) setCount3(count3 - 1);
	};
	return (
		<div>
			<Header page={3} />

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

			<div className="sec-padding pt-1 text-center">
				<div className="sec4-dropdown-wrapper"></div>
				<h2 className="sec2-heading">
					Plocka gärna minst 8 blommor - mest 12 blommor.
				</h2>

				<h5 className="sec4-caption mt-5 mb-4">Säsongens blommor</h5>
				<div
					id="carouselExample2"
					className="carousel slide text-center"
					data-ride="carousel"
				>
					<div className="carousel-inner text-center px-5 pg3-carousel-item">
						<div className="carousel-item active border-0 sec4-carousel-item">
							<div className="row sec4-row">
								<div className="col-md-4 sec4-left-col">
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
								<div className="col-md-4 sec4-right-col">
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
								<div className="col-md-4 sec4-left-col">
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
								<div className="col-md-4 sec4-right-col">
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
						<div className="carousel-item border-0 sec4-carousel-item">
							<div className="row sec4-row">
								<div className="col-md-4 sec4-left-col">
									<div className="sec4-img-wrapper shadow">
										<img
											className="d-block m-auto sec4-carousel-img"
											src={red2}
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
											src={red1}
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
								<div className="col-md-4 sec4-right-col">
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

				<h5 className="sec4-caption mt-5 mb-4">Populära blommor </h5>
				<div
					id="carouselExample2"
					className="carousel slide text-center"
					data-ride="carousel"
				>
					<div className="carousel-inner text-center px-5 pg3-carousel-item">
						<div className="carousel-item active border-0 sec4-carousel-item">
							<div className="row sec4-row">
								<div className="col-md-4 sec4-left-col">
									<div className="sec4-img-wrapper shadow">
										<img
											className="d-block m-auto sec4-carousel-img"
											src={red4}
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
											src={red5}
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
								<div className="col-md-4 sec4-right-col">
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
								<div className="col-md-4 sec4-left-col">
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
								<div className="col-md-4 sec4-right-col">
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
						<div className="carousel-item border-0 sec4-carousel-item">
							<div className="row sec4-row">
								<div className="col-md-4 sec4-left-col">
									<div className="sec4-img-wrapper shadow">
										<img
											className="d-block m-auto sec4-carousel-img"
											src={red2}
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
											src={red1}
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
								<div className="col-md-4 sec4-right-col">
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

				<h5 className="sec4-caption mt-5 mb-4">Alla blommor </h5>
				<div
					id="carouselExample2"
					className="carousel slide text-center"
					data-ride="carousel"
				>
					<div className="carousel-inner text-center px-5 pg3-carousel-item">
						<div className="carousel-item active border-0 sec4-carousel-item">
							<div className="row sec4-row">
								<div className="col-md-4 sec4-left-col">
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
								<div className="col-md-4 sec4-right-col">
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
								<div className="col-md-4 sec4-left-col">
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
								<div className="col-md-4 sec4-right-col">
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
						<div className="carousel-item border-0 sec4-carousel-item">
							<div className="row sec4-row">
								<div className="col-md-4 sec4-left-col">
									<div className="sec4-img-wrapper shadow">
										<img
											className="d-block m-auto sec4-carousel-img"
											src={red2}
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
											src={red1}
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
								<div className="col-md-4 sec4-right-col">
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

			<div className="sec8-padding">
				<h2 className="sec2-heading text-center mb-0">Rekommenderade Blomgåvor </h2>
				<OwlCarousel2 />
			</div>

			<div className="sec8-padding">
				<h2 className="sec2-heading text-center mb-0">Recensioner</h2>

				<OwlCarousel1 />
			</div>

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
