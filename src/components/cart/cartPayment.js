import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Timage1 from "../../assets/table1.svg";
import Timage2 from "../../assets/table2.svg";
import greet1 from "../../assets/greet1.svg";
import greet2 from "../../assets/greet2.svg";
import greet3 from "../../assets/greet3.svg";
import greet4 from "../../assets/greet4.svg";
import greet5 from "../../assets/greet5.svg";
import greet6 from "../../assets/greet6.svg";
import greet7 from "../../assets/greet7.svg";
import payL from "../../assets/payment1.svg";
import payR from "../../assets/payment2.svg";

export default function Payment(props) {
  function createData(product, price, quantity) {
    return { product, price, quantity };
  }
  const [rows, setRows] = React.useState([
    createData(
      { image: Timage1, name: "Röda Rosor Mailbox" },
      "224$",
      1,
      "224$"
    ),
    createData(
      { image: Timage2, name: "Rose Money Plant" },
      "237.5$",
      1,
      "237.5$"
    ),
  ]);

  const [greeting] = React.useState([
    greet1,
    greet2,
    greet3,
    greet4,
    greet5,
    greet6,
    greet7,
    greet1,
  ]);
  return (
    <div>
      <div className="greetMessageMain shadow">
        <div className="cartTable">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>PRODUCT</TableCell>
                  <TableCell>QUANITIY</TableCell>
                  <TableCell>PRICE</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, i) => (
                  <TableRow
                    key={i}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>
                      <div className="d-flex tableProduct">
                        <img
                          className="col-md-4"
                          src={row.product.image}
                          alt="product"
                        />
                        <p className="col-md-8">{row.product.name}</p>
                      </div>
                    </TableCell>

                    <TableCell>{row.quantity}x</TableCell>
                    <TableCell>{row.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <hr />
        <div className="paymentSub row justify-content-between">
          <h6>SUBTOTAL</h6>
          <p>
            <b>590.00$</b>
          </p>
        </div>
        <hr />
        <div className="paymentShip row justify-content-between">
          <h6>SHIPPING</h6>
          <div>
            <p>
              POSTNORD: <b>45.00$</b>
            </p>
            <p>
              Shipping Date: <b>24-05-2022</b>
            </p>
            <p>
              Delivery Date: <b>26-05-2022</b>
            </p>
          </div>
        </div>
        <hr />
        <div className="paymentSub row justify-content-between">
          <h6>TOTAL</h6>
          <p>
            <b>635.00$</b>
          </p>
        </div>
        <hr />

        <div className="sec9 paymentMessage">
          <img src={payL} className="sec9-img-left" />
          <img src={payR} className="sec9-img-right" />
          <div className="sec9-Zindex">
            <h2 className="sec2-heading text-center my-0">
              Gratulationskort Meddelande
            </h2>
            <span className="sec2-text my-5 text-center">
              “Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.”
            </span>
          </div>
        </div>
        <div>
          <form action="/action_page.php">
            <div className="paymentForm">
              <div class="form-check">
                <label class="form-check-label">
                  <input
                    type="radio"
                    class="form-check-input"
                    name="optradio"
                    checked
                  />
                  <h5>
                    <b>Credit Card</b>
                  </h5>
                  <p>Pay with your credit card.</p>
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="email">Card Number*</label>
                <input
                  type="email"
                  className="form-control sec10-input"
                  placeholder="Enter card number"
                  id="email"
                />
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="pwd">Expiry Date*</label>
                  <input
                    type="date"
                    className="form-control sec10-input"
                    placeholder="MM/YY"
                    id="pwd"
                  />
                </div>
                <div className="form-group col-md-6 ">
                  <label htmlFor="pwd">CARD CODE (CVC)*</label>
                  <input
                    type="text"
                    className="form-control sec10-input"
                    placeholder="CVV"
                    id="pwd"
                  />
                </div>
              </div>
            </div>
            <div className="paymentForm paymentForm2">
              <div class="form-check">
                <label class="form-check-label">
                  <input
                    type="radio"
                    class="form-check-input"
                    name="optradio"
                  />
                  <h5>
                    <b>PayPal</b>
                  </h5>
                </label>
              </div>
            </div>
            <div className="paymentForm paymentForm2">
              <div class="form-check">
                <label class="form-check-label">
                  <input
                    type="radio"
                    class="form-check-input"
                    name="optradio"
                  />
                  <h5>
                    <b>Monthly Financing</b>
                  </h5>
                </label>
              </div>
            </div>
            <div className="paymentForm paymentForm2">
              <div class="form-check">
                <label class="form-check-label">
                  <input
                    type="radio"
                    class="form-check-input"
                    name="optradio"
                  />
                  <h5>
                    <b>Pay Now</b>
                  </h5>
                </label>
              </div>
            </div>
            <div className="paymentForm paymentForm2">
              <div class="form-check">
                <label class="form-check-label">
                  <input
                    type="radio"
                    class="form-check-input"
                    name="optradio"
                  />
                  <h5>
                    <b>Buy Now, Pay Later</b>
                  </h5>
                </label>
              </div>
            </div>
            <div class="form-group form-check">
              <label class="form-check-label">
                <input class="form-check-input" type="checkbox" /> I would like
                to receive exclusive emails with discounts and product
                information (Optional)
              </label>
            </div>
            <div className="greetFormBtn row justify-content-center">
              <button
                className="btn greetBack"
                onClick={(e) => {
                  e.preventDefault();
                //   props.stepBack();
                }}
              >
                Föregående
              </button>
              <button
                type="submit"
                className="btn greetAhead cartButtonActive"
                onClick={(e) => {
                  e.preventDefault();
                //   props.stepFinal();
                }}
              >
                Nästa
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
