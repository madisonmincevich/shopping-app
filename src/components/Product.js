import React from "react";

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div className="col-sm-3 mb-4">
      <img
        src={product.image}
        alt={product.name}
        className="img-fluid rounded"
      />
      <div className="row">
        <h3 className="col-8 text-start">{product.name}</h3>
        <span className="col-2 fs-5 fw-light text-decoration-line-through">
          ${product.previousprice}
        </span>

        <span className="col-2 fs-5">${product.price}</span>
      </div>
      <div className="row">
        <span className="col-sm text-start">{product.description}</span>
      </div>
      <div className="col-8">
        <button onClick={() => onAdd(product)} className="float-start">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
