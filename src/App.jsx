import React from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intros from "./components/intro/Intros";
import ProductList from "./components/productList/ProductList";

function App() {
  return (
    <div>
      <Intros />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
}

export default App;
