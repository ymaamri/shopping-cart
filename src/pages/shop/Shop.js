import React from "react";
import { PRODUCTS } from "../../products";
import Product from "../../assets/Product";
import "./shop.css";

function Shop() {
  return (
    <div className="shop-section">
      <div className="container">
        <div className="shop">
          <div className="shop-title">
            <h1>VilaTech Shop</h1>
          </div>
          <div className="products">
            {PRODUCTS.map((product) => (
              <Product key={product.id} data={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
