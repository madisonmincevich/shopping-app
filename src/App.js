import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/Main";
import Header from "./components/Header";
import Basket from "./components/Basket";
import data from "./data";
import { useState } from "react";

function App() {
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
      setcartItems(cartItems.filter((x) => x.id != product.id));
    } else {
      setcartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exists, qty: exists.qty - 1 } : x
        )
      );
    }
    return (
      <div className="App">
        <div className="container">
          <Header />
          <Main products={products} onAdd={onAdd} />
          <Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
        </div>
      </div>
    );
  };
}

export default App;
