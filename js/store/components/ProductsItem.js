import React, { Component } from "react";
import { strip } from "../../util/helpers";

export default class ProductsItem extends Component {
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
    let { pricePerPound, image, title, url, excerpt } = this.props;
    return (
      <a href={url} className={`products__item products__item--${imageStatus}`}>
        <img
          onLoad={this.imageLoaded}
          onError={this.imageErrored}
          data-src={image}
          data-img={image}
          data-type="image"
          src={`${image}?format=300w`}
          className="products__image"
        />
        <div className="products__info">
          <div className="products__title">{title}</div>
          <div className="products__price">${pricePerPound}/lb</div>
        </div>
        <div className="products__overlay">
          <div className="products__overlay-title">{title}</div>
          <div className="products__overlay-excerpt">{strip(excerpt)}</div>
        </div>
      </a>
    )
  }
}
