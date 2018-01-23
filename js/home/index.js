import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Hero from "./components/Hero";
import Blurb from "../components/Blurb";
import MonthlyOrigin from "./components/MonthlyOrigin";
import WellWithContainer from "./components/WellWithContainer";
import Popup from "../components/Popup";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      image: "",
      popup: false
    }
    this.renderPopup = this.renderPopup.bind(this);
  }
  componentDidMount() {
    axios("/?format=json")
      .then((response) => {
        this.setState({ image: response.data.collection.mainImage.assetUrl });
      })
      .catch((response) => {
        console.log(response);
      });

    let popup = window.localStorage.getItem('popup');
    if (popup == null || !popup) {
      this.setState({ popup: true });
    } else {
      this.setState({ popup: false });
    }
  }
  renderPopup() {
    if (!this.state.popup) {
      return null
    }
    return <Popup wait={1000} />
  }
  render() {
    let { image } = this.state;
    return (
      <div className="welcome">
        {this.renderPopup()}
        <Hero image={image} />
        <div className="learn-more">
          <div className="learn-more__item">
            <Blurb url="store" button="Shop Now" type="PageBlurb"/>
          </div>
          <div className="learn-more__item">
            <Blurb url="about" button="Learn More" type="PageBlurb"/>
          </div>
          <img src="/assets/home-coffee-mug.png" className="learn-more__cup"/>
          <img src="/assets/home-beans.png" className="learn-more__beans"/>
        </div>
        <div className="hero-divider"></div>
        <MonthlyOrigin />
        <div className="featured-blogs">
          <div className="featured-blogs__inner">
            <h1>Featured Events & News</h1>
            <div className="featured-blogs__item">
              <Blurb type="EventBlurb" url="events" button="See Events" />
            </div>
            <div className="featured-blogs__item">
              <Blurb url="blog" button="See Blog" type="BlogBlurb"/>
            </div>
          </div>
        </div>
        <WellWithContainer />
      </div>
    );
  }
}

let Welcome = document.getElementById("welcome");

if (Welcome) {
  ReactDOM.render(<Home />, Welcome);
}
