import React, { Component } from "react";
import ProductsItem from "./ProductsItem";
import CategoryList from "./CategoryList";
import { toDollars } from "../../util/helpers";

const titles = {
  "Regular": "Regular Coffee",
  "Flavored": "Flavored Coffee",
  "Decaf": "Decaf Coffee",
  "Flavored Decaf": "Flavored Decaf Coffee",
  "Espresso": "Espresso",
  "coffee-club": "Coffee Club"
};

export default class ProductsList extends Component {
  constructor(props) {
    super(props);
    this.filterList = this.filterList.bind(this);
  }
  filterList(category) {
    return item => { if (item.categories.indexOf(category) !== -1) return item };
  }
  render() {
    let { category, setFilter, items } = this.props;
    return (
      <div>
        <CategoryList categories={this.props.categories} setFilter={setFilter} />
        <div className="products">
          <h2>{category}</h2>
          {items.filter(this.filterList(category)).map((item) => {
            return (
              <ProductsItem
                key={item.id}
                title={item.title}
                image={item.assetUrl}
                excerpt={item.excerpt}
                url={item.fullUrl}
                pricePerPound={toDollars(item.variants[8].price)}
              />
            )
          })}
        </div>
      </div>
    );
  }
}
