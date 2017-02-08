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
      categories: [],
      category: "Regular"
    }
    this.setFilter = this.setFilter.bind(this);
  }
  componentDidMount() {
    axios("/store?format=json")
      .then((response) => {
        console.log(response);
        this.setState({
          items: response.data.items,
          categories: response.data.collection.categories
        });
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
        {this.state.items.length > 0 ? <ProductsList categories={this.state.categories} category={this.state.category} setFilter={this.setFilter} items={this.state.items} /> : null}
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
        this.setState({ item: response.data.item });
      })
      .catch((response) => {
        console.log(response);
      });
  }
  render() {
    return (
      <div>
        {Object.keys(this.state.item).length === 0 && this.state.item.constructor === Object ? null : <ProductItem item={this.state.item} />}
      </div>
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
