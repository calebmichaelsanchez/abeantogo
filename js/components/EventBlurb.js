import React, { Component } from "react";
import axios from "axios";
import { strip } from "../util/helpers";

export default class EventBlurb extends Component {
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
        this.setState({
          title: response.data.upcoming[0].title,
          description: response.data.upcoming[0].excerpt,
          fullUrl: response.data.upcoming[0].fullUrl
        });
      })
      .catch((response) => {
        console.log(response);
      });
  }
  render() {
    let { button } = this.props;
    let { title, description, fullUrl } = this.state;
    return (
      <div className="blurb">
        <p className="blurb__title blurb__title--i"><em>{title}</em></p>
        <p className="blurb__description">{strip(description)}</p>
        <a href={fullUrl} className="btn">{button}</a>
      </div>
    )
  }
}
