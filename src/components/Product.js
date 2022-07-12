import React from "react";
import "../style/Product.css";

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
        <h3 className="item-name col-8 text-start">{product.name}</h3>

        <span className="current-price col-2">${product.price}</span>
      </div>
      <div className="row">
        <span className="description col-sm text-start">
          {product.description}
        </span>
      </div>
      <div className="col-8">
        <button onClick={() => onAdd(product)} className="add-btn float-start">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
