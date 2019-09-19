import React, { useContext } from "react";
import { Route } from "react-router-dom";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
import { ProductContext } from "./context/ProductContext";

// import { ProductContext } from "./contexts/ProductContext.js";

function App() {
  //   const [products] = useState(data);
  //   const [cart, setCart] = useState([]);

  //   const addItem = item => {
  //     setCart([...cart, item]);
  //   };

  const [cart] = useContext(ProductContext);

  return (
    //  <ProductContext.Provider value={{ products, addItem }}>
    <div className="App">
      <Navigation cart={cart} />

      {/* Routes */}
      <Route exact path="/" component={Products} />

      <Route path="/cart" component={ShoppingCart} />
    </div>
    //  </ProductContext.Provider>
  );
}

export default App;
