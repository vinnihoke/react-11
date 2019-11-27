import React, { useState, createContext, useContext } from "react";
import data from "../data";

import { CartContext } from "./CartContext.js";

export const ProductContext = createContext();

export const ProductProvider = props => {
  const [products] = useState(data);
  const [cart, setCart] = useContext(CartContext);

  const addItem = item => {
    setCart([...cart, item]);
  };

  return (
    <ProductContext.Provider value={[products, addItem]}>
      {props.children}
    </ProductContext.Provider>
  );
};
