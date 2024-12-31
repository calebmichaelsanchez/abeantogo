import React, { Component } from "react";
import { procEvent } from "../../util/helpers";

export default class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      title: ""
    }

    this.handleClick = this.handleClick.bind(this);
    this.toggleSelect = this.toggleSelect.bind(this);
    this.openSelect = this.openSelect.bind(this);
    this.closeSelect = this.closeSelect.bind(this);
    this.setSquarespaceSelectValue = this.setSquarespaceSelectValue.bind(this);
    this.setQuantityInputValue = this.setQuantityInputValue.bind(this);
  }
  handleClick(event) {
    let value = event.target.innerHTML;
    this.setState({ title: value });
    if (this.props.title === "Quantity") {
      this.setQuantityInputValue(value);
    } else {
      this.setSquarespaceSelectValue(this.props.title, value);
    }
    this.toggleSelect();
    this.props.updatePrice("");
  }
  toggleSelect() {
    this.setState({ open: !this.state.open });
  }
  openSelect() {
    this.setState({ open: true });
  }
  closeSelect() {
    this.setState({ open: false });
  }
  componentDidMount() {
    this.setState({ title: this.props.options[0] });
    this.selectCollection        = document.querySelectorAll("[data-variant-option-name]");
    this.selectArray             = [...this.selectCollection];
    this.sizeSelectList          = [...document.querySelectorAll(".select--Size .select__list .select__item")]
    this.quantityInputCollection = document.querySelectorAll("input[type=number]");
    this.quantityInput           = [...this.quantityInputCollection][0];
    if (this.props.title === "Quantity") {
      this.setQuantityInputValue(1);
    } else {
      this.setSquarespaceSelectValue(this.props.title, this.props.options[0]);
    }
    // if (this.props.title === "Size") {
    //   console.log(this.sizeSelectList);
    //   console.log(this.props.options);
    //   if (this.sizeSelectList.length <= 1) {
    //     this.setSquarespaceSelectValue("Size", this.props.options[0]);
    //     this.setState({ title: this.props.options[0]});
    //   } else {
    //     this.setSquarespaceSelectValue("Size", this.props.options[1]);
    //     this.setState({ title: this.props.options[1]});
    //   }
    // }
    this.props.updatePrice("");
  }
  setSquarespaceSelectValue(select, value) {
    for (var i = 0; i < this.selectArray.length; i++) {
      if (this.selectArray[i].dataset.variantOptionName === select) {
        this.selectArray[i].value = value;
        procEvent(this.selectArray[i], "change");
      }
    }
  }
  setQuantityInputValue(value) {
    this.quantityInput.value = value;
    procEvent(this.quantityInput, "change");
  }
  render() {
    let { title } = this.state;
    let { options } = this.props;
    let open = this.state.open ? "select--open" : "";
    return (
      <div className={`select ${open} select--${this.props.title}`} onClick={this.toggleSelect} >
        <div className="select__title">{title}</div>
        <ul className="select__list">
          {options.map((item, index) => (
            <li key={`${item}-${index}`} className="select__item" onClick={this.handleClick}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
