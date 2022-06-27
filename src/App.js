import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/Main";
import Header from "./components/Header";
import Basket from "./components/Basket";
import data from "./data";

function App() {
  const { products } = data;
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Main products={products} />
        <Basket />
      </div>
    </div>
  );
}

export default App;
