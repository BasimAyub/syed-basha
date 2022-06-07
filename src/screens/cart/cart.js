import { Link } from "react-router-dom";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import "./cart.css";

export default function Cart() {
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
          <p className="doneStep">2</p>
          <hr />
          <p className="">3</p>
          <hr />
          <p className="">4</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
