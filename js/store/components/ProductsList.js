import React, { Component } from "react";
import ProductsItem from "./ProductsItem";
import CategoryList from "./CategoryList";
import { toDollars } from "../../util/helpers";

export default class ProductsList extends Component {
  constructor(props) {
    super(props);
    this.filterList = this.filterList.bind(this);
  }
  filterList(type, filter) {
    if (type === "category") {
      return item => { if (item.categories.indexOf(filter) !== -1) return item };
    } else {
      if (filter === "") {
        return item => { return item };
      } else {
        return item => { if (item.tags.indexOf(filter) !== -1) return item };
      }
    }
  }
  render() {
    let { category, setFilter, items, tag } = this.props;
    return (
      <div>
        <CategoryList category={this.props.category} categories={this.props.categories} tags={this.props.tags} setFilter={setFilter} />
        <div className="products">
          <h2>{tag}</h2>
          {items.filter(this.filterList("category", category)).filter(this.filterList("tag", tag)).map((item) => {
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
    );
  }
}
