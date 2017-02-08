import React, { Component } from "react";
import axios from "axios";
import { strip } from "../util/helpers";

export default class BlogBlurb extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      description: "",
      fullUrl: ""
    }
  }
  componentDidMount() {
    axios(`/${this.props.url}?format=json`)
      .then((response) => {
        console.log(response);
        this.setState({
          title: response.data.items[0].title,
          description: response.data.items[0].excerpt,
          fullUrl: response.data.items[0].fullUrl,
          pageUrl: response.data.collection.fullUrl
        });
      })
      .catch((response) => {
        console.log(response);
      });
  }
  render() {
    let { button } = this.props;
    let { title, description, fullUrl, pageUrl } = this.state;
    return (
      <div className="blurb">
        <a href={fullUrl} className="blurb__title blurb__title--i"><em>{title}</em></a>
        <p className="blurb__description">{strip(description)}</p>
        <a href={pageUrl} className="btn">{button}</a>
      </div>
    )
  }
}
