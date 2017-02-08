import React, { Component } from "react";
import Price from "./Price";
import Select from "./Select";
import { strip } from "../../util/helpers";

export default class ProductItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageStatus: "loading",
      price: "",
      options: {
        Quantity: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        Type: ["Caffeinated", "Decaffeinated"],
        Size: ["1/2 lb.", "1 lb.", "5 lb."],
        Grind: ["Whole Bean", "Electric Percolator", "French Press", "Drip", "Auto Drip", "Fine", "Espresso", "Turkish"]
      }
    }

    this.imageLoaded = this.imageLoaded.bind(this);
    this.imageErrored = this.imageErrored.bind(this);
    this.updatePrice = this.updatePrice.bind(this);
  }
  imageLoaded() {
    this.setState({ imageStatus: "loaded" });
  }
  imageErrored() {
    this.setState({ imageStatus: "errored" });
  }
  updatePrice() {
    this.setState({ price: document.querySelectorAll(".sqs-money-native")[0].innerHTML });
  }
  addToCart() {
    document.querySelectorAll(".sqs-add-to-cart-button")[0].click();
  }
  componentDidMount() {
    this.updatePrice();
  }
  render() {
    let { imageStatus, options, price } = this.state;
    let { title, assetUrl, excerpt, variantOptionOrdering, variants } = this.props.item;
    return (
      <div className={`product product--${imageStatus}`}>
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
          <div className="product__price">${price}</div>
          <div className="product__variants">
            <Select
              title="Quantity"
              options={options["Quantity"]}
              updatePrice={this.updatePrice}
            />
            {variantOptionOrdering.map((select, index) => (
              <Select
                key={index}
                title={select}
                options={options[select]}
                updatePrice={this.updatePrice}
              />
            ))}
          </div>
          <div className="product__button" onClick={this.addToCart}>Add To Cart</div>
        </div>
      </div>
    )
  }
}
