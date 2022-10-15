import React from "react";
import About from "./components/about/About";
import Intros from "./components/intro/Intros";
import ProductList from "./components/productList/ProductList";

function App() {
  return (
    <div>
      <Intros />
      <About />
      <ProductList />
    </div>
  );
}

export default App;
