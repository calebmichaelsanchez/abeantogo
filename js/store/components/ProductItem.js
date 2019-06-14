import React, { Component } from "react";
import update from "immutability-helper"
import Price from "./Price";
import Select from "./Select";
import { strip } from "../../util/helpers";

export default class ProductItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageStatus: "product--loading",
      price: "",
      quantity: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      options: {}
    }

    this.imageLoaded = this.imageLoaded.bind(this);
    this.imageErrored = this.imageErrored.bind(this);
    this.updatePrice = this.updatePrice.bind(this);
  }
  imageLoaded() {
    this.setState({ imageStatus: "product--loaded" });
  }
  imageErrored() {
    this.setState({ imageStatus: "product--errored" });
  }
  updatePrice(prefix) {
    this.setState({ price: `${prefix}${document.querySelectorAll(".product-cart-info .product-price")[0].innerHTML}` });
  }
  addToCart() {
    document.querySelectorAll(".sqs-add-to-cart-button")[0].click();
  }
  componentDidMount() {
    this.updatePrice("from ");
    this.createOptions();
  }
  createOptions() {
    let { variantOptionOrdering, variants } = this.props.item;
    let options = {};
    variantOptionOrdering.forEach((item) => {
      options[item] = [];
    });
    variants.forEach((variant) => {
      variant.optionValues.forEach((optionValue) => {
        variantOptionOrdering.forEach((variantOptionOrder) => {
          if (optionValue.optionName === variantOptionOrder) {
            if (options[variantOptionOrder].indexOf(optionValue.value) === -1) {
              options[variantOptionOrder].push(optionValue.value);
            }
          }
        });
      });
    });
    var newState = update(this.state.options, { $merge: options });
    this.setState({options: newState});
  }
  render() {
    let { imageStatus, options, price } = this.state;
    let { title, assetUrl, excerpt, variantOptionOrdering, variants, categories } = this.props.item;
    return (
      <div className={`product ${imageStatus}`}>
        <a href="/store" className="product__link">
          <img src="/assets/store-back-button.png" />
          Back
        </a>
        <img
          onLoad={this.imageLoaded}
          onError={this.imageErrored}
          data-src={assetUrl}
          data-img={assetUrl}
          data-type="image"
          src={`${assetUrl}?format=300w`}
          className="product__item product__image"
        />
        <div className="product__item product__info">
          <div className="product__title">{title}</div>
          <div className="product__excerpt">{strip(excerpt)}</div>
          <div className="product__price">{price}</div>
          <div className="product__variants">
            <Select
              title="Quantity"
              options={this.state.quantity}
              updatePrice={this.updatePrice}
            />
            {variantOptionOrdering.map((select, index) => {
              if (Object.keys(this.state.options).length === 0 && this.state.options.constructor === Object) {
                return null
              }
              return <Select key={index} title={select} options={options[select]} updatePrice={this.updatePrice} />
            })}
          </div>
          <div className="product__button" onClick={this.addToCart}>Add To Cart</div>
        </div>
      </div>
    )
  }
}
