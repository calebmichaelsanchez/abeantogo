import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import ProductsList from "./components/ProductsList";
import ProductItem from "./components/ProductItem";

class Store extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      category: "regular"
    }
    this.setFilter = this.setFilter.bind(this);
  }
  componentDidMount() {
    axios("/store?format=json")
      .then((response) => {
        this.setState({ items: response.data.items });
      })
      .catch((response) => {
        console.log(response);
      });
  }
  setFilter(category) {
    this.setState({ category: category });
  }
  render() {
    return (
      <div>
        {this.state.items.length > 0 ? <ProductsList category={this.state.category} setFilter={this.setFilter} items={this.state.items} /> : null}
      </div>
    )
  }
}

class Product extends Component {
  constructor() {
    super();
    this.state = {
      item: {}
    }
  }
  componentDidMount() {
    axios(`${this.props.url}?format=json`)
      .then((response) => {
        console.log(response);
        this.setState({ item: response.data.item });
      })
      .catch((response) => {
        console.log(response);
      });
  }
  render() {
    return (
      <ProductItem item={this.state.item} />
    )
  }
}

let ProductListContainer = document.getElementById("product-list");
let ProductItemContainer = document.getElementById("product-item");
let ProductItemUrl;

if (ProductListContainer) {
  ReactDOM.render(<Store />, ProductListContainer);
}
if (ProductItemContainer) {
  ProductItemUrl = ProductItemContainer.dataset.url;
  ReactDOM.render(<Product url={ProductItemUrl} />, ProductItemContainer);
}
