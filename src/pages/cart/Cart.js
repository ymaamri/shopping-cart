import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/ShopContextP";
import CartItem from "./CartItem";
import "./cart.css";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const TotalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart-items">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem key={product.id} data={product} />;
          }
        })}
      </div>
      {TotalAmount > 0 ? (
        <div className="checkout">
          <p>Subtotal: ${TotalAmount}</p>
          <button onClick={() => navigate("/shopping-cart")}>
            {" "}
            Continue Shopping{" "}
          </button>
          <button> Checkout </button>
        </div>
      ) : (
        <h2>Your Cart Is Empty</h2>
      )}
    </div>
  );
}

export default Cart;
