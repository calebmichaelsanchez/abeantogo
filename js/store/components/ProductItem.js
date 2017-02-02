import React, { Component } from "react";
import { strip } from "../../util/helpers";

export default class ProductItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageStatus: "loading"
    }

    this.imageLoaded = this.imageLoaded.bind(this);
    this.imageErrored = this.imageErrored.bind(this);
  }
  imageLoaded() {
    this.setState({ imageStatus: "loaded" });
  }
  imageErrored() {
    this.setState({ imageStatus: "errored" });
  }
  render() {
    let { imageStatus } = this.state;
    let { assetUrl, title } = this.props.item;
    return (
      <div className={`product product--${imageStatus}`}>
        <img
          onLoad={this.imageLoaded}
          onError={this.imageErrored}
          src={assetUrl}
          className="product__image"
        />
        <div className="product__info">
          <div className="product__title">{title}</div>
        </div>
      </div>
    )
  }
}
