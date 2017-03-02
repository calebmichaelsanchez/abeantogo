import React, { Component } from "react";
import axios from "axios";
import { strip } from "../util/helpers";

export default class BlogBlurb extends Component {
  constructor() {
    super();
  }
  render() {
    let { button } = this.props;
    let { title, excerpt, fullUrl } = this.props.data.items[0];
    return (
      <div className="blurb">
        <a href={fullUrl} className="blurb__title blurb__title--i"><em>{title}</em></a>
        <p className="blurb__description">{strip(excerpt)}</p>
        <a href="/blog" className="btn">{button}</a>
      </div>
    )
  }
}
