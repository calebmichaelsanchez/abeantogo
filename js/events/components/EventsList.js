import React, { Component } from "react";
import EventsItem from "./EventsItem";

export default class EventsList extends Component {
  render() {
    let { upcoming } = this.props;
    return (
      <div className="events">
        {upcoming.map((item, index) => {
          let startDate = new Date(item.structuredContent.startDate);
          let endDate   = new Date(item.structuredContent.endDate);
          return (
            <EventsItem
              key={index}
              title={item.title}
              excerpt={item.excerpt}
              url={item.fullUrl}
              image={item.assetUrl}
              startDate={startDate}
              endDate={endDate}
            />
          )
        })}
      </div>
    )
  }
}
