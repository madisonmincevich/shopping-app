import React from "react";

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice >= 200 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  return (
    <div>
      <h1 className="text-start mt-5">Your Cart</h1>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-1 fw-bold text-start">{item.name}</div>
            <div className="col-3">
              <button onClick={() => onAdd(item)}>+</button>{" "}
              <button onClick={() => onRemove(item)}>-</button>
            </div>
            <div className="col-1 text-start">
              {item.qty} x ${item.price.toFixed(2)}
            </div>
          </div>
        ))}
        {cartItems.length !== 0 && (
          <div className="row mb-5 text-start mt-3">
            <div className="row">
              <div className="col-2">Items Price</div>
              <div className="col-1">${itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Tax Price</div>
              <div className="col-1">${taxPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Shipping Price</div>
              <div className="col-1">${shippingPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Total Price</div>
              <div className="col-1">${totalPrice.toFixed(2)}</div>
            </div>
            <button className="col-3">Checkout</button>
          </div>
        )}
      </div>
    </div>
  );
}
