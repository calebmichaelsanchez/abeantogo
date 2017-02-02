import React, { Component } from "react";
import axios from "axios";
import BlogBlurbItem from "./BlogBlurbItem";
import EventBlurbItem from "./EventBlurbItem";
import PageBlurbItem from "./PageBlurbItem";

const Components = { BlogBlurbItem, EventBlurbItem, PageBlurbItem };

export default class Blurb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    }
  }
  componentDidMount() {
    axios.get(`/${this.props.url}?format=json`)
      .then((response) => {
        console.log(response);
        this.setState({ data: response.data });
      })
      .catch((response) => {
        console.log(response);
      });
  }
  render() {
    let { button, type } = this.props;
    let { data } = this.state;

    // switch (type) {
    //   case 'page':
    //       return <PageBlurbItem data={data} button={button} />
    //   case 'event':
    //       return <EventBlurbItem data={data} button={button} />
    //   case 'blog':
    //       return <BlogBlurbItem data={data} button={button} />
    // }
    // return <div />
    return React.createElement(Components[type], { data: this.state.data, button: this.props.button })
  }
}
