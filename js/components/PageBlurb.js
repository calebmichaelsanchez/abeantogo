import React, { Component } from "react";
import axios from "axios";
import { strip } from "../util/helpers";

export default class PageBlurb extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { button } = this.props;
    let { title, description, fullUrl } = this.props.data.collection;

    return (
      <div className="blurb">
        <h1 className="blurb__title">{title}</h1>
        <p className="blurb__description">{strip(description)}</p>
        <a href={fullUrl} className="btn">{button}</a>
      </div>
    )
  }
}
