import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Nav = (props) => {
  const [sum, setSum] = useState(0);

  useEffect(() => {
    addTotalAmounts();
  },);

  const addTotalAmounts = () => {
    let tot = props.cart.reduce((accumulator, curVal) => {
      return accumulator + Number(curVal.amount);
    }, 0);
    setSum(tot);
  };

  return (
    <nav>
     
      <ul className="nav-links">
      <Link to="/" className="react-link">
        <li>home</li>
      </Link>
        <Link to="/about" className="react-link">
          <li>About</li>
        </Link>
        <Link to="/shop" className="react-link">
          <li>Shop</li>
        </Link>
        <Link to="/cart" className="react-link">
          <li>Cart({sum})</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;