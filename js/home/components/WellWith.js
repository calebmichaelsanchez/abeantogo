import React, { Component } from "react";

export default class WellWith extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="wellwith">
        <div className="wellwith__inner">
          <div className="wellwith__item wellwith__info">
            <img className="wellwith__title" src="/assets/wellwith.png" />
            <p className="wellwith__description">
              COMING SOON<br/>
              ABeanToGo and WellWith will soon be partnering as local leaders to help bring awareness to a growing problem accross the globe. Stay tuned for further details, and in the meantime, pour another cup of fresh roasted coffee and learn more about WellWith by clicking below!
            </p>
            <a target="_blank" href="http://wellwith.com" className="wellwith__button">Learn More</a>
            <img className="wellwith__image" src="/assets/wellwith-thermos.png" />
          </div>
        </div>
      </div>
    )
  }
}
