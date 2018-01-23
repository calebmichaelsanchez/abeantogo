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
    let blurb_excerpt = excerpt ? strip(excerpt) : "";
    return (
      <div className="blurb">
        <a href={fullUrl} className="blurb__title blurb__title--i"><em>{title}</em></a>
        <p className="blurb__description">{blurb_excerpt}</p>
        <a href="/blog" className="btn">{button}</a>
      </div>
    )
  }
}
