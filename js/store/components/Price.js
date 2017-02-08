import React, { Component } from "react";

export default class Price extends Component {
  render() {
    let { price } = this.props;
    return (
      <div className="product__price">{price}</div>
    )
  }
}
