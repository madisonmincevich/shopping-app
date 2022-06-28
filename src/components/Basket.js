import React from "react";

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 50;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  return (
    <div>
      <h1>Your Cart</h1>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="">
            <div>{item.name}</div>
            <div>
              <button onClick={() => onAdd(item)}>+</button>
              <button onClick={() => onRemove(item)}>-</button>
            </div>
            <div>
              {item.qty} x ${item.price}
            </div>
            {cartItems.length !== 0 && (
              <div>
                <div>Items Price</div>
                <div>{itemsPrice}</div>
                <div>Tax Price</div>
                <div>{taxPrice}</div>
                <div>Shipping Price</div>
                <div>{shippingPrice}</div>
                <div>Total Price</div>
                <div>{totalPrice}</div>
                <button>Checkout</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
