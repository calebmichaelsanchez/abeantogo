import React, { Component } from "react";
import axios from "axios";
import BlogBlurb from "./BlogBlurb";
import EventBlurb from "./EventBlurb";
import PageBlurb from "./PageBlurb";

export default class Blurb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    }
    this.renderBlurb = this.renderBlurb.bind(this);
  }
  componentDidMount() {
    axios.get(`/${this.props.url}?format=json`)
      .then((response) => {
        this.setState({ data: response.data });
      })
      .catch((response) => {
        console.log(response);
      });
  }
  renderBlurb(type) {
    let components = {
      'BlogBlurb': function () {
        return BlogBlurb;
      },
      'EventBlurb': function () {
        return EventBlurb;
      },
      'PageBlurb': function () {
        return PageBlurb;
      }
    }
    return (components[type])();
  }
  render() {
    let { button, type } = this.props;
    let Component = this.renderBlurb(type);

    return (
      <div>
        {Object.keys(this.state.data).length === 0 && this.state.data.constructor === Object ? null : <Component data={this.state.data} button={button} />}
      </div>
    )
  }
}
