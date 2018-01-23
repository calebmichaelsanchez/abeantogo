import React, { Component } from "react";
import axios from "axios";
import WellWithItem from "./WellWithItem";

export default class WellWithContainer extends Component {
  constructor() {
    super();
    this.state = {
      items: []
    }
  }
  componentDidMount() {
    axios("/wellwith?format=json")
      .then((response) => {
        this.setState({
          items: response.data.items
        });
      })
      .catch((response) => {
        console.log(response);
      });
  }
  render() {
    return (
      <div>
        {this.state.items.length > 0 ? <WellWithItem item={this.state.items[0]} /> : null}
      </div>
    )
  }
}
