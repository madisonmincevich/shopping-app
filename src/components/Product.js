import React from "react";

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div className="col-sm-3 mb-4">
      <img src={product.image} alt={product.name} className="small img-fluid" />
      <div className="row">
        <h3 className="col-7">{product.name}</h3>
        <span className="col-3 fs-5">${product.price}</span>
      </div>
      <div className="col-8">
        <button onClick={() => onAdd(product)}>Add to Cart</button>
      </div>
    </div>
  );
}
