import React from "react";

class Filter extends React.Component {
  render() {
    return (
      <div className="filter">
        <div className="fliter-result">{this.props.count} Products</div>
        <div className="fliter-sort">
          Order{" "}
          <select onChange={this.props.sortProducts} value={this.props.sort}>
            <option value="">Latest</option>
            <option value="lowest">Low</option>
            <option value="highest">High</option>
          </select>
        </div>
        <div className="fliter-size">
          Filter{" "}
          <select onChange={this.props.filterProducts} value={this.props.size}>
            <option value="">All</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
        </div>
      </div>
    );
  }
}

export default Filter;
