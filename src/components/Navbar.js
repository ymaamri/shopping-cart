import "./navbar.css";
import { ShoppingCart } from "phosphor-react";
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/shopping-cart">Shop</Link>
        <Link to="/shopping-cart/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
