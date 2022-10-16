import React, { useContext } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intros from "./components/intro/Intros";
import ProductList from "./components/productList/ProductList";
import Toggle from "./components/Toggle/Toggle";
import { ThemeContext } from "./context.js";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "#fff",
        color: darkMode && "#fff",
      }}
    >
      <Toggle />
      <Intros />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
}

export default App;
