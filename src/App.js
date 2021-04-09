import React, { useState } from "react";
import data from "./data.json";
import Products from "./components/Products";

const App = () => {
  const [products, setPrducts] = useState(data.products);
  const [size, setSize] = useState("");
  const [sort, setSort] = useState("");

  return (
    <div>
      <div className="content">
        <div className="main">
          <Products products={products} />
        </div>
        <div className="side">Cart Items</div>
      </div>
    </div>
  );
};

export default App;
