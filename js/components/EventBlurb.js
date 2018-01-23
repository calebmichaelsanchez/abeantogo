import React, { Component } from "react";
import axios from "axios";
import { strip } from "../util/helpers";

export default class EventBlurb extends Component {
  constructor() {
    super();
  }
  render() {
    let { button } = this.props;
    if (this.props.data.upcoming.length > 0) {
      let { title, description, fullUrl, pageUrl } = this.props.data.upcoming[0];
      let blurb_description = description ? strip(description) : "";
      return (
        <div className="blurb">
          <a href={fullUrl} className="blurb__title blurb__title--i"><em>{title}</em></a>
          <p className="blurb__description">{blurb_description}</p>
          <a href="/events" className="btn">{button}</a>
        </div>
      )
    } else {
      return (
        <p>Check back for more events!</p>
      )
    }
  }
}
