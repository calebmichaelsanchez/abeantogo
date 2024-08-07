import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import axios from "axios";
import ProductsList from "./components/ProductsList";
import ProductItem from "./components/ProductItem";

class Store extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      categories: [],
      tags: [],
      category: "Coffee",
      tag: "Regular"
    }
    this.setFilter = this.setFilter.bind(this);
    this.updateTags = this.updateTags.bind(this);
  }
  componentDidMount() {
    axios("/store?format=json")
      .then((response) => {
        this.setState({
          items: response.data.items,
          categories: response.data.collection.categories,
          tags: response.data.collection.tags
        }, () => {
          this.updateTags(this.state.category);
          console.log(response);
        });
      })
      .catch((response) => {
        console.log(response);
      });
  }
  setFilter(type, filter) {
    if (type === "category") {
      // http://stackoverflow.com/questions/31400468/react-js-you-called-setstate-with-a-callback-that-isnt-callable
      this.setState({ category: filter }, () => {this.updateTags(filter)});
    } else {
      this.setState({ tag: filter });
    }
  }
  updateTags(category) {
    let tagsArray = [];
    // loop through all of the products
    this.state.items.forEach((item) => {
      // check to see if active category is in categories array
      // if it is then add the tag for that product
      if (item.categories.indexOf(category) !== -1) {
        // loop through the tags of each product
        item.tags.forEach((tag) => {
          // http://stackoverflow.com/questions/1988349/array-push-if-does-not-exist
          // check to see if the tag is already in the tags array
          if (tagsArray.indexOf(tag) === -1) {
            // push tags to the tags array
            tagsArray.push(tag);
          }
        });
      }
    });
    this.setState({ tags: tagsArray });
    if (tagsArray.length > 0) {
      this.setFilter("tag", tagsArray[0]);
    } else {
      this.setFilter("tag", "");
    }
  }
  render() {
    return (
      <div>
        {this.state.items.length > 0 ? <ProductsList categories={this.state.categories} category={this.state.category} tags={this.state.tags} tag={this.state.tag} setFilter={this.setFilter} items={this.state.items} /> : null}
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
        this.setState({ item: response.data.item }, () => {
          console.log(this.state.item);
        });
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
  const storePage = createRoot(ProductListContainer);
  storePage.render(<Store />);
}
if (ProductItemContainer) {
  const productPage = createRoot(ProductItemContainer);
  ProductItemUrl = ProductItemContainer.dataset.url;
  productPage.render(<Product url={ProductItemUrl} />);
}
