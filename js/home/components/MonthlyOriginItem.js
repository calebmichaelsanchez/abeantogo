import React, { Component } from "react";

export default class MonthlyOriginItem extends Component {
  constructor() {
    super();
  }
  render() {
    let { assetUrl, workflowState } = this.props.item;
    if (workflowState === 4) {
      return <div />
    }
    return (
      <div className="monthly">
        <div className="monthly__inner">
          <div className="monthly__item monthly__info">
            <h1 className="monthly__title">Coffee of the month</h1>
            <p className="monthly__description">Every month we feature a single origin coffee from a different part of the world. Travel the world with us and pick up a pound today!</p>
            <a href="/store/monthly-origin" className="monthly__button btn">Shop Now</a>
          </div>
          <img className="monthly__item monthly__image" src={assetUrl} />
        </div>
      </div>
    )
  }
}
