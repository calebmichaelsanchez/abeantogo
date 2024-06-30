import React, { Component } from "react";
import axios from "axios";
import { toDollars } from "../util/helpers";
import ProductsItem from "../store/components/ProductsItem";

export default class FeaturedProducts extends Component {
  constructor() {
    super();
    this.state = {
      items: []
    }
  }
  componentDidMount() {
    axios("/store?format=json")
      .then((response) => {
        this.setState({
          items: response.data.items
        });
      })
      .catch((response) => {
        console.error(response)
      });
  }
  render () {
    let { items } = this.state;
    return (
      <div className="products">
        <div className="products__inner">
          <h2>Coffee of the Month</h2>
          {items.filter((item) => item.starred).map((item) => {
            // console.log(item);
            return (
              <ProductsItem
                key={item.id}
                title={item.title}
                image={item.assetUrl}
                excerpt={item.excerpt}
                url={item.fullUrl}
                pricePerPound={toDollars(item.variants[0].price)}
              />
            )
          })}
          </div>
      </div>
    )
  }
}