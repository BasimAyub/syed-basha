import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import Person1 from "../assets/person (1).png";
import Person2 from "../assets/person (2).png";
import Person3 from "../assets/person (3).png";

export class Owldemo1 extends Component {
  render() {
    return (
      <div>
        <div class="container-fluid">
          <OwlCarousel
            items={2.4}
            loop
            className="owl-theme"
            autoplay={true}
            autoplayTimeout={3000}
            autoplayHoverPause={false}
            stagePadding={10}
            center={true}
            margin={30}
            dots={true}
          >
            <div>
              <div className="owl-card shadow">
                <h4 className="owl-heading">“BRIX Templates is the #1”</h4>
                <span className="sec2-text my-4">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat aute irure
                  sint amet occaecat cupidatat non proident
                </span>
                <div className="d-flex">
                  <img className="img carousel1" src={Person2} />
                  <div className="owl-small-text">
                    <span className="owl-text1">Adam Smith</span>
                    <span className="owl-text2">Webflow Developer</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="owl-card shadow">
                <h4 className="owl-heading">
                  “Webflow is the best nocode tool”
                </h4>
                <span className="sec2-text my-4">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat aute irure
                  sint amet occaecat cupidatat non proident
                </span>
                <div className="d-flex">
                  <img className="img" src={Person1} />
                  <div className="owl-small-text">
                    <span className="owl-text1">Mike Warren</span>
                    <span className="owl-text2">
                      Developer at BRIX Templates
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="owl-card shadow">
                <h4 className="owl-heading">“The best Webflow Templates”</h4>
                <span className="sec2-text my-4">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat aute irure
                  sint amet occaecat cupidatat non proident
                </span>
                <div className="d-flex">
                  <img className="img" src={Person3} />
                  <div className="owl-small-text">
                    <span className="owl-text1">Sophia Moore</span>
                    <span className="owl-text2">CEO at Webflow Agency</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="owl-card shadow">
                <h4 className="owl-heading">“BRIX Templates is the #1”</h4>
                <span className="sec2-text my-4">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat aute irure
                  sint amet occaecat cupidatat non proident
                </span>
                <div className="d-flex">
                  <img className="img" src={Person2} />
                  <div className="owl-small-text">
                    <span className="owl-text1">Adam Smith</span>
                    <span className="owl-text2">Webflow Developer</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="owl-card shadow">
                <h4 className="owl-heading">
                  “Webflow is the best nocode tool”
                </h4>
                <span className="sec2-text my-4">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat aute irure
                  sint amet occaecat cupidatat non proident
                </span>
                <div className="d-flex">
                  <img className="img" src={Person1} />
                  <div className="owl-small-text">
                    <span className="owl-text1">Mike Warren</span>
                    <span className="owl-text2">
                      Developer at BRIX Templates
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="owl-card shadow">
                <h4 className="owl-heading">“The best Webflow Templates”</h4>
                <span className="sec2-text my-4">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat aute irure
                  sint amet occaecat cupidatat non proident
                </span>
                <div className="d-flex">
                  <img className="img" src={Person3} />
                  <div className="owl-small-text">
                    <span className="owl-text1">Sophia Moore</span>
                    <span className="owl-text2">CEO at Webflow Agency</span>
                  </div>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    );
  }
}

export default Owldemo1;
