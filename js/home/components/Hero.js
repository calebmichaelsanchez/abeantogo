import React, { Component, PropTypes } from "react";

export default class Hero extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { image } = this.props;
    let style = {
      backgroundImage: `url(${image})`
    }
    return (
      <div className="hero" style={style}>
        <img className="hero__inner" src="/assets/header-new.svg" />
      </div>
    )
  }
}

Hero.propTypes = {
  "image": PropTypes.string
}
