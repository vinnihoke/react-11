import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, withRouter } from "react-router-dom";
import "./sass/index.scss";
import App from "./App";

import { ProductProvider } from "./context/ProductContext";

import { CartProvider } from "./context/CartContext.js";

const AppWithRouter = withRouter(App);

ReactDOM.render(
  <Router>
    <CartProvider>
      <ProductProvider>
        <AppWithRouter />
      </ProductProvider>
    </CartProvider>
  </Router>,
  document.getElementById("root")
);
