import React, { Component } from "react";

export default class CategoryList extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <ul className="categories">
        {this.props.categories.map((item) => {
          return (<li key={item} className="categories__item" onClick={() => this.props.setFilter(item)}>{item}</li> )
        })}
      </ul>
    )
  }
}
