import React, { Component } from "react";
import axios from "axios";
import { strip } from "../util/helpers";

export default class PageBlurb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      fullUrl: ""
    }
  }
  componentDidMount() {
    axios.get(`/${this.props.url}?format=json`)
      .then((response) => {
        this.setState({
          title: response.data.collection.title,
          description: response.data.collection.description,
          fullUrl: response.data.collection.fullUrl,
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
        <h1 className="blurb__title">{title}</h1>
        <p className="blurb__description">{strip(description)}</p>
        <a href={fullUrl} className="btn">{button}</a>
      </div>
    )

  }
}
