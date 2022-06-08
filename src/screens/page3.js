import React, { useState } from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Square1 from "../assets/square (1).png";
import Square2 from "../assets/square (2).png";
import Square3 from "../assets/square (3).png";
import Male from "../assets/male.png";
import Top1 from "../assets/pg3-top.png";
import RightBtn from "../assets/pg3-btn.png";
import Icon1 from "../assets/postnod.png";
import Flower1 from "../assets/pg3 flower (1).png";
import Flower2 from "../assets/pg3 flower (2).png";
import Flower3 from "../assets/pg3 flower (3).png";
import Flower4 from "../assets/pg3 flower (4).png";
import Flower5 from "../assets/pg3 flower (5).png";
export default function Page3() {
	const [count1, setCount1] = useState(0);

	const incrementCount1 = () => {
		setCount1(count1 + 1);
	};

	const decrementCount1 = () => {
		if (count1 > 0) setCount1(count1 - 1);
	};
	return (
		<div>
			<Header page={4} />
			<div className="row pg3-sec1 m-0">
				<div className="col-md-6 p-0">
					<div className="d-flex flex-column">
						<img className="pg3-img1" src={Top1}></img>
					</div>
					<div className="d-flex flex-row justify-content-between mt-3">
						<img className="pg3-img1-small" src={Top1}></img>
						<img className="pg3-img1-small" src={Top1}></img>
						<img className="pg3-img1-small" src={Top1}></img>
						<img className="pg3-img1-small" src={Top1}></img>
						<img className="pg3-img1-small" src={Top1}></img>
					</div>
				</div>
				<div className="col-md-6 p-0 align-items-center d-flex flex-column pg3-sec1-right">
					<h4 className="sec1-heading my-4">Red Roses Mailbox</h4>
					<span className="pg3-line4 pg3-icon-grey">
						CATEGORY:<span>FRESH FLOWERS</span>
					</span>
					<div className="pg3-upper-spacer my-4"></div>
					<span className="pg3-line2 text-center">
						12 röda rosor i brevlådan! Romantisk present Överraska med kärlek
					</span>
					<div className="pg3-upper-spacer my-4"></div>
					<span className="pg3-price">290.00$</span>
					<img className="pg3-right-btn" src={RightBtn}></img>
					<div className="sec4-cart-btn-wrapper mt-3 row w-100">
						<div className="col-md-6 d-flex align-items-center pg3-float-right">
							<button
								className="sec4-btn pg3-icon-grey"
								onClick={decrementCount1}
							>
								<i className="fa-solid fa-minus"></i>
							</button>
							<span className="sec2-text mx-2">{count1}</span>
							<button
								className="sec4-btn pg3-icon-grey"
								onClick={incrementCount1}
							>
								<i className="fa-solid fa-plus"></i>
							</button>
						</div>
						<div className="col-md-6 pg3-float-center">
							<button className="sec1-btn my-4 ml-3 pg3-icon-grey d-flex">
								<i className="bi bi-bag mr-1"></i>
								<span>Beställ nu</span>
							</button>
						</div>
					</div>
					<div className="pg3-upper-spacer my-4"></div>
					<div className="d-flex align-items-center justify-content-center">
						<img src={Icon1} width={"40%"}></img>
						<span className="pg3-line2 ml-3">Delivery to the mailbox</span>
					</div>

					<div className="pg3-upper-spacer my-4"></div>
					<div className="sec5-icons align-items-center">
						<i className="fa-brands fa-instagram pg3-icon-grey pg3-icon1"></i>
						<span className="pg3-line3">INSTAGRAM</span>
						<i className="fa-brands fa-snapchat pg3-icon-grey pg3-icon2"></i>
						<span className="pg3-line3">SNAPCHAT</span>
						<i className="fa-brands fa-facebook pg3-icon-grey pg3-icon2"></i>
						<span className="pg3-line3">FACEBOOK</span>
					</div>
				</div>
			</div>
			<div className="pg3-card-area">
				<div className="sec3-card shadow">
					<span className="pg3-line1 mb-3">Red Roses Mailbox</span>
					<span className="pg3-line2 mb-5">
						Do you want to surprise your love with roses? send him or her these
						romantic red roses through the mailbox as a gift! 12 red roses
						wrapped in a luxurious gift box and delivered in the mailbox. The
						recipient does not have to be at home. As soon as the delivery
						person delivers these red roses to your loved one, he or she will be
						pleasantly surprised. Do you prefer to send nice roses from
						anonymously? yes, it is also possible! Do not write personal text on
						your greeting card or do not choose a card at all, because it is
						also possible. It's not for nothing that the red mailbox roses are
						popular at Posta Blomster on Valentine's Day. By the way, did you
						know that red rose not only stands for love and romance, but also
						for respect? Who are you sending Röda Rosor Mailbox to?
					</span>
					<span className="pg3-line1 mb-3">Product type:</span>
					<li className=" mb-5">
						<span className="pg3-line2">fresh red flowers</span>
					</li>

					<span className="pg3-line1 mb-3">
						Mailbox flowers are ordered in just 4 steps:
					</span>
					<img src={Square2} className="pg3-square"></img>
					<span className="pg3-line1 mt-5 mb-3">
						Your flowers are ordered before 12:00, delivered tomorrow
					</span>
					<span className="pg3-line2 mb-5">
						If you have ordered your Red Mailbox Roses from Posta Blomster
						before 12:00, we will deliver to your home the next working day. The
						recipient does not have to be at home, as we simply deliver your red
						roses through the mailbox.
					</span>
					<img src={Square3} className="pg3-square"></img>
					<span className="pg3-line1 mt-5 mb-3 font-weight-bold">
						What do we promise?
					</span>

					<div className="pg3-line2 mb-2 d-flex">
						<i class="fa-solid fa-check mr-3"></i>
						<span>Red roses with 7 days freshness guarantee</span>
					</div>

					<div className="pg3-line2 mb-2 d-flex">
						<i class="fa-solid fa-check mr-3"></i>Your gift is Original, durable
						and a real surprise for the recipient
					</div>
					<div className="pg3-line2 mb-2 d-flex">
						<i class="fa-solid fa-check mr-3"></i>Fast and cheap shipping that
						arrives at the time you specified
					</div>
					<div className="pg3-line2 mb-2 d-flex">
						<i class="fa-solid fa-check mr-3"></i>Quick response customer
						service always with you
					</div>
					<div className="pg3-line2 mb-2 d-flex">
						<i class="fa-solid fa-check mr-3"></i>You and the recipient are
						satisfied
					</div>

					<img src={Square1} className="pg3-square"></img>

					<span className="sec1-text mt-5 mb-2">Reviews</span>

					<span className="sec1-text font-weight-bold">
						4.2
						<i class="bi bi-star-fill gold mr-1 ml-2"></i>
						<i class="bi bi-star-fill gold mr-1"></i>
						<i class="bi bi-star-fill gold mr-1"></i>
						<i class="bi bi-star-fill gold mr-1"></i>
						<i class="bi bi-star-fill gold mr-1"></i>
					</span>
					<div className="pg3-spacer my-5"></div>
					<div className="d-flex mb-3">
						<img
							className="img person-img"
							src={Male}
							width={"80px"}
							height={"80px"}
						/>
						<div className="owl-small-text">
							<span className="owl-text1">Wade Warren</span>
							<span className="owl-text2">4 june 2021</span>
							<span className="sec1-text">
								<i class="bi bi-star-fill gold mr-1"></i>
								<i class="bi bi-star-fill gold mr-1"></i>
								<i class="bi bi-star-fill gold mr-1"></i>
								<i class="bi bi-star-fill gold mr-1"></i>
								<i class="bi bi-star-fill grey mr-1"></i>
							</span>
						</div>
					</div>
					<span className="sec1-text">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Pellentesque ac consequat, ipsum in sed magnis amet sem. Egestas non
						pretium ac fermentum convallis massa lorem morbi. Ac laoreet massa,
						quisque fermentum ut eu at.
					</span>
					<div className="pg3-spacer my-5"></div>
					<div className="d-flex mb-3">
						<img
							className="img person-img"
							src={Male}
							width={"80px"}
							height={"80px"}
						/>
						<div className="owl-small-text">
							<span className="owl-text1">Cameron Williamson</span>
							<span className="owl-text2">4 june 2021</span>
							<span className="sec1-text">
								<i class="bi bi-star-fill gold mr-1"></i>
								<i class="bi bi-star-fill gold mr-1"></i>
								<i class="bi bi-star-fill gold mr-1"></i>
								<i class="bi bi-star-fill gold mr-1"></i>
								<i class="bi bi-star-fill gold mr-1"></i>
							</span>
						</div>
					</div>
					<span className="sec1-text">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Pellentesque ac consequat, ipsum in sed magnis amet sem. Egestas non
						pretium ac fermentum convallis massa lorem morbi. Ac laoreet massa,
						quisque fermentum ut eu at.
					</span>
					<div className="pg3-spacer my-5"></div>
					<div className="d-flex mb-3">
						<img
							className="img person-img"
							src={Male}
							width={"80px"}
							height={"80px"}
						/>
						<div className="owl-small-text">
							<span className="owl-text1">Robert Fox</span>
							<span className="owl-text2">1 june 2021</span>
							<span className="sec1-text">
								<i class="bi bi-star-fill gold mr-1"></i>
								<i class="bi bi-star-fill gold mr-1"></i>
								<i class="bi bi-star-fill gold mr-1"></i>
								<i class="bi bi-star-fill gold mr-1"></i>
								<i class="bi bi-star-fill grey mr-1"></i>
							</span>
						</div>
					</div>
					<span className="sec1-text">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Pellentesque ac consequat, ipsum in sed magnis amet sem. Egestas non
						pretium ac fermentum convallis massa lorem morbi. Ac laoreet massa,
						quisque fermentum ut eu at.
					</span>
				</div>
			</div>
			<div className="pg3-last-sec">
				<h2 className="sec2-heading">Related products</h2>
				<div className="row mx-2 text-center">
					<div className="col p-0 img-col">
						<img src={Flower1} className="pg3-mxw"></img>
						<span
							className="pg3-line1 my-3 d-block"
							style={{ color: "black", fontSize: "1rem" }}
						>
							13
						</span>
						<span
							className="pg3-line1 d-block"
							style={{ color: "black", fontSize: "1rem" }}
						>
							253.00$
						</span>
					</div>
					<div className="col p-0 img-col">
						<img src={Flower2} className="pg3-mxw"></img>
						<span
							className="pg3-line1 my-3 d-block"
							style={{ color: "black", fontSize: "1rem" }}
						>
							13
						</span>
						<span
							className="pg3-line1 d-block"
							style={{ color: "black", fontSize: "1rem" }}
						>
							253.00$
						</span>
					</div>
					<div className="col p-0 img-col">
						<img src={Flower3} className="pg3-mxw"></img>
						<span
							className="pg3-line1 my-3 d-block"
							style={{ color: "black", fontSize: "1rem" }}
						>
							13
						</span>
						<span
							className="pg3-line1 d-block"
							style={{ color: "black", fontSize: "1rem" }}
						>
							253.00$
						</span>
					</div>
					<div className="col p-0 img-col">
						<img src={Flower4} className="pg3-mxw"></img>
						<span
							className="pg3-line1 my-3 d-block"
							style={{ color: "black", fontSize: "1rem" }}
						>
							13
						</span>
						<span
							className="pg3-line1 d-block"
							style={{ color: "black", fontSize: "1rem" }}
						>
							253.00$
						</span>
					</div>
					<div className="col p-0 img-col">
						<img src={Flower5} className="pg3-mxw"></img>
						<span
							className="pg3-line1 my-3 d-block"
							style={{ color: "black", fontSize: "1rem" }}
						>
							13
						</span>
						<span
							className="pg3-line1 d-block"
							style={{ color: "black", fontSize: "1rem" }}
						>
							253.00$
						</span>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
}
