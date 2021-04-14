import React, { useState } from "react";
import data from "./data.json";
import Products from "./components/Products";
import Filter from "./components/Filter";

const App = () => {
  const [products, setProducts] = useState(data.products);
  const [size, setSize] = useState("");
  const [sort, setSort] = useState("");

  const sortProducts = (event) => {
    console.log(event.target.value);
  };

  const filterProducts = (event) => {
    let e = event.target.value;
    console.log(e);
    if (e === "") {
      setProducts({
        size: e,
        filteredItems: data.products,
      });
    } else {
      let filteredItems = data.products.filter(
        (product) => product.availableSizes.indexOf(e) >= 0
      );
      console.log("after filteration ", filteredItems);
      setProducts({
        // [products]->{{size},[filterdItems]}
        // ...products,
        size: e,
        filteredItems: filteredItems,
      });
    }
  };

  return (
    <div>
      <div className="content">
        <div className="main">
          <Filter
            count={products.length}
            size={size}
            sort={sort}
            filterProducts={filterProducts}
            sortProducts={sortProducts}
          ></Filter>
          <Products
            products={
              products.filteredItems ? products.filteredItems : products
            }
          />
        </div>
        <div className="side">Cart Items</div>
      </div>
    </div>
  );
};

export default App;
