import React, { Component, PropTypes } from "react";

export default class Hero extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isMobile: false
    }
  }
  componentDidMount() {
    let html = document.documentElement;
    if (html.classList.contains("no-touch")) {
      this.setState({ isMobile: false });
    } else {
      this.setState({ isMobile: true });
    }
  }
  render() {
    let { image } = this.props;
    let queryString;
    this.state.isMobile ? queryString = "1000w" : queryString = "original";
    let style = {
      backgroundImage: `url(${image}?format=${queryString})`
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
