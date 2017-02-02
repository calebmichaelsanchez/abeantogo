import React, { Component } from "react";
import ProductsItem from "./ProductsItem";
import CategoryList from "./CategoryList";
import { toDollars } from "../../util/helpers";

const titles = {
  "regular": "Regular Coffee",
  "flavored": "Flavored Coffee",
  "decaf": "Decaf Coffee",
  "decaf-flavored": "Flavored Decaf Coffee",
  "espresso": "Espresso"
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
        <CategoryList setFilter={setFilter} />
        <div className="products">
          <h2>{titles[category]}</h2>
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
