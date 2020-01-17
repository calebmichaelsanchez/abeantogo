import React, { Component } from "react";
import { procEvent } from "../../util/helpers";

export default class WellWithItem extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    procEvent(window.document, "DOMContentLoaded");
  }
  render() {
    let { assetUrl, clickthroughUrl, title } = this.props.item;
    return (
      <div className="sponsorship__item">
        <a target="_blank" href={clickthroughUrl} className="sponsorship__link">
          <img className="sponsorship__image" src={assetUrl} />
          {/* <h3 className="sponsorship__title">{title}</h3> */}
        </a>
      </div>
    )
  }
}
