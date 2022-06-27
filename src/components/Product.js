import React from "react";

export default function Product(props) {
  const { product } = props;
  return (
    <div className="col-sm-3">
      <img src={product.image} alt={product.name} className="small img-fluid" />

      <h3>{product.name}</h3>
      <div>${product.price}</div>

      <div>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}
