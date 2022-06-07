import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import flower1 from "../assets/flower (1).png";
import flower2 from "../assets/flower (2).png";
import flower3 from "../assets/flower (3).png";
import flower4 from "../assets/flower (4).png";
import flower5 from "../assets/flower (5).png";
import flower6 from "../assets/flower (6).png";

export class Owldemo2 extends Component {
	render() {
		return (
			<div>
				<div class="container-fluid">
					<OwlCarousel
						items={3.5}
						loop={true}
						nav={true}
						className="owl-theme"
						autoplay={false}
						autoplayTimeout={3000}
						autoplayHoverPause={false}
						stagePadding={10}
						center={true}
						margin={30}
						dots={false}
					>
						<div>
							<div className="sec3-card shadow align-items-center">
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
								<span className="sec2-text my-2 text-center">
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry.
								</span>
								<span className="sec3-price">224.25$</span>
								<button className="sec2-btn mt-4">Beställ nu</button>
							</div>
						</div>
						<div>
							<div className="sec3-card shadow align-items-center">
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
								<span className="sec2-text my-2 text-center">
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry.
								</span>
								<span className="sec3-price">224.25$</span>
								<button className="sec2-btn mt-4">Beställ nu</button>
							</div>
						</div>
						<div>
							<div className="sec3-card shadow align-items-center">
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
								<span className="sec2-text my-2 text-center">
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry.
								</span>
								<span className="sec3-price">224.25$</span>
								<button className="sec2-btn mt-4">Beställ nu</button>
							</div>
						</div>
						<div>
							<div className="sec3-card shadow align-items-center">
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
								<span className="sec2-text my-2 text-center">
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry.
								</span>
								<span className="sec3-price">224.25$</span>
								<button className="sec2-btn mt-4">Beställ nu</button>
							</div>
						</div>
						<div>
							<div className="sec3-card shadow align-items-center">
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
								<span className="sec2-text my-2 text-center">
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry.
								</span>
								<span className="sec3-price">224.25$</span>
								<button className="sec2-btn mt-4">Beställ nu</button>
							</div>
						</div>
					</OwlCarousel>
				</div>
			</div>
		);
	}
}

export default Owldemo2;
