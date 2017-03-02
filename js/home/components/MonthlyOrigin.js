import React, { Component } from "react";
import axios from "axios";
import MonthlyOriginItem from "./MonthlyOriginItem";

export default class MonthlyOrigin extends Component {
  constructor() {
    super();

    this.state = {
      item: []
    }
  }
  componentDidMount() {
    axios("/store/monthly-origin?format=json")
      .then((response) => {
        this.setState({ item: response.data.item });
      })
      .catch((response) => {
        console.log(response);
      });
  }
  render() {
    return (
      <div>
        {Object.keys(this.state.item).length === 0 && this.state.item.constructor === Object ? null : <MonthlyOriginItem item={this.state.item} />}
      </div>
    )
  }
}
