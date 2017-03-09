import React, { Component } from "react";

export default class WellWithItem extends Component {
  constructor() {
    super();
  }
  render() {
    let { body, assetUrl } = this.props.item;
    console.log(body);
    return (
      <div className="wellwith">
        <div className="wellwith__inner">
          <div className="wellwith__item wellwith__info">
            <div dangerouslySetInnerHTML={{__html: body}} />
            <a target="_blank" href="http://wellwith.com" className="wellwith__button">Learn More</a>
            <img className="wellwith__image" src={assetUrl} />
          </div>
        </div>
      </div>
    )
  }
}
