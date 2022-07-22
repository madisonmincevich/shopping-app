import React from "react";
import "../style/Basket.css";
import { Link, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice >= 200 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  return (
    <div id="basket">
      <h1 className="cartTitle mt-5">Your Cart</h1>
      <div>
        {cartItems.length === 0 && (
          <div className="text-start">Cart is empty</div>
        )}
        {cartItems.map((item) => (
          <div key={item.id} className="row mb-3">
            <div className="col-2 fw-bold text-start fs-5">{item.name}</div>
            <div className="addRemoveBtn col-2">
              <button onClick={() => onAdd(item)}>+</button>{" "}
              <button onClick={() => onRemove(item)}>-</button>
            </div>
            <div className="col-3 text-start fs-5">
              {item.qty} x ${item.price.toFixed(2)}
            </div>
          </div>
        ))}
        {cartItems.length !== 0 && (
          <div className="row text-start mt-5">
            <div className="row mb-1">
              <div className="col-2">Items Price</div>
              <div className="col-1">${itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row mb-1">
              <div className="col-2">Tax Price</div>
              <div className="col-1">${taxPrice.toFixed(2)}</div>
            </div>
            <div className="row mb-1">
              <div className="col-2">Shipping Price</div>
              <div className="col-1">${shippingPrice.toFixed(2)}</div>
            </div>
            <div className="row mb-1">
              <div className="col-2 fw-bold">Total Price</div>
              <div className="col-1 fw-bold">${totalPrice.toFixed(2)}</div>
            </div>
            <Link to="/checkout">
              <button className="col-5 mt-3 mb-5">Checkout</button>
            </Link>
          </div>
        )}
      </div>
      <Routes>
        <Route path="/checkout" element={<Checkout />}></Route>
      </Routes>
    </div>
  );
}
