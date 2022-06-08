import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Timage1 from "../../assets/table1.svg";
import Timage2 from "../../assets/table2.svg";
import greet1 from "../../assets/greet1.svg";
import greet2 from "../../assets/greet2.svg";
import greet3 from "../../assets/greet3.svg";
import greet4 from "../../assets/greet4.svg";
import greet5 from "../../assets/greet5.svg";
import greet6 from "../../assets/greet6.svg";
import greet7 from "../../assets/greet7.svg";
import "./cartSteps.css";

export default function Cart2(props) {
  function createData(product, price, quantity, subtotal) {
    return { product, price, quantity, subtotal };
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
      2,
      "237.5$"
    ),
  ]);
  function increment(q, i) {
    q = q + 1;
    var temp = rows;
    temp[i].quantity = q;
    setRows(temp);
  }
  function decrement(q, i) {
    q = q - 1;
    var temp = rows;
    temp[i].quantity = q;
    setRows(temp);
  }
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
      <div className="cartTable">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>PRODUCT</TableCell>
                <TableCell>PRICE</TableCell>
                <TableCell>QUANITIY</TableCell>
                <TableCell>SUBTOTAL</TableCell>
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
                  <TableCell>{row.price}</TableCell>
                  <TableCell>
                    <div className="d-flex cartIncrementer">
                      <button
                        className="sec4-btn"
                        onClick={() => decrement(row.quantity, i)}
                      >
                        <i className="fa-solid fa-minus"></i>
                      </button>
                      <span className="sec2-text mx-2">{rows[i].quantity}</span>
                      <button
                        className="sec4-btn"
                        onClick={() => increment(row.quantity, i)}
                      >
                        <i className="fa-solid fa-plus"></i>
                      </button>
                    </div>
                  </TableCell>
                  <TableCell>{row.subtotal}</TableCell>
                  <TableCell>
                    <span className="cartDeleteIcon">
                      <CloseIcon style={{ cursor: "pointer" }} />
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className="cartTableBottom row justify-content-between align-center">
        <p>Do you want to send without a card?</p>
        <button className="cartButtonActive"  onClick={props.step}>
          Without Greeting Cards{" "}
          <ArrowForwardIosIcon
            style={{ fontSize: "15px", marginLeft: "10px" }}
          />
        </button>
      </div>
      <div className="greetingCardsMain">
        <h4>CHOOSE A GREETING CARD</h4>
        <div className="greetingCards row">
          {greeting.map((greet, i) => (
            <div className="col-md-3 col-sm-6 greetindCard" key={i}>
              <div>
                <img src={greet} />
                <p>13</p>
                <p>253.00$</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
