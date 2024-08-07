import React, { Component } from "react";
import axios from "axios";
import { toDollars } from "../util/helpers";
import ProductsItem from "../store/components/ProductsItem";

export default class GetProducts extends Component {
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
    let { title, category, tag, starred } = this.props;
    let { items } = this.state;
    console.log("items", items);
    console.log("props", this.props);
    return (
      <div className="products">
        <div className="products__inner">
          <h2>{title}</h2>
          {items.filter((item) => starred ? item.starred : tag ? item.categories[0] === category & item.tags[0] === tag : item.categories[0] === category).slice(0, 3).map((item) => {
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