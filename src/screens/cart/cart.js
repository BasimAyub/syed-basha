import { useState } from "react";
import { Link } from "react-router-dom";
import Cart2 from "../../components/cart/cart2";
import Cart3 from "../../components/cart/cart3";
import Cart4 from "../../components/cart/cart4";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import "./cart.css";

export default function Cart() {
  const [step, setStep] = useState(2);
  function change3() {
    setStep(3);
  }
  return (
    <div>
      <Header />
      <div className="catMain">
        <div className="cartTopNav d-flex justify-content-center">
          <Link to="/cart" className="active">
            Shopping Cart <span className="activeSpan">1</span>
          </Link>
          <Link to="/cart" className="">
            WishList <span>0</span>
          </Link>
          <Link to="/cart" className="">
            Login
            {/* <span>1</span> */}
          </Link>
        </div>
        <div className="cartSteps d-flex justify-content-center">
          <p className="doneStep">1</p>
          <hr />
          <p className="doneStep" onClick={() => setStep(2)}>
            2
          </p>
          <hr />
          <p className="" onClick={() => setStep(3)}>
            3
          </p>
          <hr />
          <p className="" onClick={() => setStep(4)}>
            4
          </p>
        </div>
        <div className="cartContent">
          {step === 2 ? <Cart2 step={change3} /> : ""}
          {step === 3 ? <Cart3 /> : ""}
          {step === 4 ? <Cart4 /> : ""}
        </div>
      </div>
      <Footer />
    </div>
  );
}
