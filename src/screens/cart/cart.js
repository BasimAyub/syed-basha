import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cart2 from "../../components/cart/cart2";
import Cart3 from "../../components/cart/cart3";
import Cart4 from "../../components/cart/cart4";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import "./cart.css";

export default function Cart() {
  const [step, setStep] = useState(2);
  const [flag, setFlag] = useState(true);
  const [stepClass, setClass] = useState(["", "", "", ""]);
  useEffect(() => {
    if (flag) {
      var temp = ["", "", "", ""];
      for (var i = 0; i < step; i++) {
        temp[i] = "doneStep";
      }
      setClass(temp);
      setFlag(false);
    }
  });
  function change3() {
    setStep(3);
    setFlag(true);
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
          <p className={stepClass[0]}>1</p>
          <hr />
          <p
            className={stepClass[1]}
            onClick={() => {
              setStep(2);
              setFlag(true);
            }}
          >
            2
          </p>
          <hr />
          <p
            className={stepClass[2]}
            onClick={() => {
              setStep(3);
              setFlag(true);
            }}
          >
            3
          </p>
          <hr />
          <p
            className={stepClass[3]}
            onClick={() => {
              setStep(4);
              setFlag(true);
            }}
          >
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
