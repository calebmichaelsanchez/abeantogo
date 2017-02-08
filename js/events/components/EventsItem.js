import React, { Component } from "react";
import { strip } from "../../util/helpers";

export default class EventsItem extends Component {
  render() {
    let { title, excerpt, url, image, startDate, endDate } = this.props;
    let style = {
      backgroundImage: `url(${image})`
    }
    return (
      <div className="events__item">
        <div className="events__inner">
          <div className="events__image">
            <div className="events__image-inner" style={style}></div>
          </div>
          <div className="events__info">
            <h2 className="events__title">{title}</h2>
            <div className="events__date">{`${startDate.customFormat("#MMMM# #DD#, #h#:#mm#")} - ${endDate.customFormat("#h#:#mm#")}`}</div>
            <p className="events__excerpt">{strip(excerpt)}</p>
            <a href={url} className="events__button">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}
