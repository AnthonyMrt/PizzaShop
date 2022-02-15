import React from "react";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import { productData, productDataTwo } from "./components/Products/data";

function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyle />
        <Hero />
        <Products heading="Choissisez votre favori" data={productData} />
        <Feature />
        <Products heading="Douceurs sucrées pour vous" data={productDataTwo} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
