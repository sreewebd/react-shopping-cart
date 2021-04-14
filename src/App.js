import React from "react";
import data from "./data.json";
import Products from "./components/Products";
import Filter from "./components/Filter";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: data.products,
      size: "",
      sort: "",
    };
  }

  sortProducts = (event) => {
    const val = event.target.value;
    this.setState((state) => ({
      sort: val,
      products: this.state.products
        .slice()
        .sort((a, b) =>
          val === "lowest"
            ? a.price > b.price
              ? 1
              : -1
            : val === "highest"
            ? a.price < b.price
              ? 1
              : -1
            : a._id > b._id
            ? 1
            : -1
        ),
    }));
  };

  filterProducts = (event) => {
    // impl
    console.log(event.target.value);
    if (event.target.value === "") {
      this.setState({ size: event.target.value, products: data.products });
    } else {
      this.setState({
        size: event.target.value,
        products: data.products.filter(
          (product) => product.availableSizes.indexOf(event.target.value) >= 0
        ),
      });
    }
  };

  render() {
    return (
      <div>
        <div className="content">
          <div className="main">
            <Filter
              count={this.state.products.length}
              size={this.state.size}
              sort={this.state.sort}
              filterProducts={this.filterProducts}
              sortProducts={this.sortProducts}
            ></Filter>
            <Products products={this.state.products} />
          </div>
          <div className="side">Cart Items</div>
        </div>
      </div>
    );
  }
}

export default App;
