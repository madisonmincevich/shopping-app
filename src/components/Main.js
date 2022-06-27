import Product from "./Product";

export default function Main(props) {
  const { products } = props;
  return (
    <div className="row">
      <h1>Products</h1>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
