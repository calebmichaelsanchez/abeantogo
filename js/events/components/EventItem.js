import React, { Component } from "react";
import { procEvent, getBody } from "../../util/helpers";

export default class EventItem extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    // This allows the squarespace image loader to
    // grab images that have been added to the
    // wysiwyg by clients
    procEvent(window.document, "DOMContentLoaded");
  }
  render() {
    let { title, assetUrl, body, structuredContent } = this.props.item;
    let startDate = new Date(structuredContent.startDate);
    let endDate   = new Date(structuredContent.endDate);
    let style = { backgroundImage: `url(${assetUrl})` }
    return (
      <div className="event">
        <div className="event__inner">
          <div className="event__image">
            <div className="event__image-inner" style={style}></div>
          </div>
          <div className="event__info">
            <h2 className="event__title">{title}</h2>
            <div className="event__date">{`${startDate.customFormat("#MMMM# #DD#, #h#:#mm#")} - ${endDate.customFormat("#h#:#mm#")}`}</div>
            <div className="event__body" dangerouslySetInnerHTML={{__html: body}}></div>
          </div>
        </div>
      </div>
    )
  }
}
