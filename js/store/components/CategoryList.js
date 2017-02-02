import React, { Component } from "react";

export default class CategoryList extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <ul className="categories">
        <li className="categories__item" onClick={() => this.props.setFilter("regular")}>Regular</li>
        <li className="categories__item" onClick={() => this.props.setFilter("flavored")}>Flavored</li>
        <li className="categories__item" onClick={() => this.props.setFilter("decaf")}>Decaf</li>
        <li className="categories__item" onClick={() => this.props.setFilter("decaf-flavored")}>Flavored Decaf</li>
        <li className="categories__item" onClick={() => this.props.setFilter("espresso")}>Espresso</li>
        <li className="categories__item" onClick={() => this.props.setFilter("coffee-club")}>Coffee Club</li>
      </ul>
    )
  }
}
