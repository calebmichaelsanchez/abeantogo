import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import EventsList from "./components/EventsList";
import EventItem from "./components/EventItem";

class Events extends Component {
  constructor() {
    super();
    this.state = {
      upcoming: []
    }
    // this.setFilter = this.setFilter.bind(this);
  }
  componentDidMount() {
    axios("/events?format=json")
      .then((response) => {
        console.log(response);
        this.setState({
          upcoming: response.data.upcoming
        });
      })
      .catch((response) => {
        console.log(response);
      });
  }
  // setFilter(category) {
  //   this.setState({ category: category });
  // }
  render() {
    return (
      <div>
        {this.state.upcoming.length > 0 ? <EventsList upcoming={this.state.upcoming} /> : null}
      </div>
    )
  }
}

class Event extends Component {
  constructor() {
    super();
    this.state = {
      item: {}
    }
  }
  componentDidMount() {
    axios(`${this.props.url}?format=json`)
      .then((response) => {
        console.log(response)
        this.setState({ item: response.data.item });
      })
      .catch((response) => {
        console.log(response);
      });
  }
  render() {
    return (
      <div>
        {Object.keys(this.state.item).length === 0 && this.state.item.constructor === Object ? null : <EventItem item={this.state.item} />}
      </div>
    )
  }
}

let EventListContainer = document.getElementById("event-list");
let EventItemContainer = document.getElementById("event-item");
let EventItemUrl;

if (EventListContainer) {
  ReactDOM.render(<Events />, EventListContainer);
}
if (EventItemContainer) {
  EventItemUrl = EventItemContainer.dataset.url;
  ReactDOM.render(<Event url={EventItemUrl} />, EventItemContainer);
}
