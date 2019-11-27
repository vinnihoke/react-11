import React, { useContext } from "react";

import { ProductContext } from "../context/ProductContext.js";

// Components
import Product from "./Product";

const Products = () => {
  const [products, addItem] = useContext(ProductContext);
  return (
    <div className="products-container">
      {/* Note the this utilizes prop drilling because it's going to a particular
      item, in this case 'product'. */}
      {products.map(product => (
        <Product key={product.id} product={product} addItem={addItem} />
      ))}
    </div>
  );
};

export default Products;
