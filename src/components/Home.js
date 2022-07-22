import Main from "./Main";
import Basket from "./Basket";
import Content from "./Content";
import PhotoSlide from "./PhotoSlide";

import data from "../data";
import React, { useState } from "react";

export default function Home() {
  const { products } = data;
  const [cartItems, setcartItems] = useState([]);

  const onAdd = (product) => {
    const exists = cartItems.find((x) => x.id === product.id);
    if (exists) {
      setcartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exists, qty: exists.qty + 1 } : x
        )
      );
    } else {
      setcartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exists = cartItems.find((x) => x.id === product.id);
    if (exists.qty === 1) {
      setcartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setcartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exists, qty: exists.qty - 1 } : x
        )
      );
    }
  };

  return (
    <div className="home" id="home">
      <Content />
      <div className="container">
        <PhotoSlide />
        <Main products={products} onAdd={onAdd} />

        <Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
      </div>
    </div>
  );
}
