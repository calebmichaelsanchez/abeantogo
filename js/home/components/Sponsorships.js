import React, { Component } from 'react';
import axios from "axios";
import SponsorItem from "./SponsorItem"

export default class Sponsorships extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }
  componentDidMount() {
    axios.get(`/sponsorships?format=json`)
      .then((response) => {
        console.log(response)
        this.setState({ items: response.data.items });
      })
      .catch((response) => {
        console.error(response);
      });
  }
  render() {
    return (
      <div className="sponsorships">
        <div className="sponsorships__inner">
          <h1>Friends We Sponsor</h1>
          <div className="sponsorship">
            {this.state.items.length > 0 ? <SponsorItem item={this.state.items[0]} /> : null}
          </div>
        </div>
      </div>
    );
  }
}
