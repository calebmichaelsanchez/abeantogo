import React, { Component } from "react";
import { procEvent, getBody } from "../../util/helpers";

export default class AboutContent extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.body.append(getBody(this.props.body));
    // This allows the squarespace image loader to
    // grab images that have been added to the
    // wysiwyg by clients
    procEvent(window.document, "DOMContentLoaded");
  }
  render() {
    return (
      <div className="about__inner" ref={(body) => { this.body = body }} />
    );
  }
}
