import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import axios from "axios";
import Blurb from "../components/Blurb";
// import MonthlyOrigin from "./components/MonthlyOrigin";
// import Sponsorships from "./components/Sponsorships";
import Popup from "../components/Popup";
import Hero from "./components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import MerchProducts from "../components/MerchProducts";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      image: null,
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
    // let popup = window.localStorage.getItem('popup');
    // if (popup == null || !popup) {
    //   this.setState({ popup: true });
    // } else {
    //   this.setState({ popup: false });
    // }
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
        {/*this.renderPopup()*/}
        {/*<Hero image={image} />*/}
        <div className="video-header">
          <div className="video-header__inner">
            <video className="video-header__video" src="/assets/hero-video-new.mp4" playsInline muted loop autoPlay crossOrigin="anonymous">
              <img src="/assets/contact-background.jpg" alt="" />
            </video>
          </div>
          <img className="video-header__logo" src="/assets/header-new.svg" />
          <div className="video-header__arrow">^</div>
        </div>
        <div className="big-quote">
          <div className="big-quote__inner">
            <h2 className="h2-home">Master Roasted.</h2>
            <h2 className="h2-home">Never Burnt.</h2>
          </div>
        </div>
        <div className="hero-divider hero-divider--one">
          <div className="hero-divider__inner">
            <h2 className="h2-home h2-home--small">Get fresh roasted coffee delivered straight to your door.</h2>
            <a href="/store" className="btn">Shop Now</a>
          </div>
        </div>
        <div className="hero-divider hero-divider--two">
          <div className="hero-divider__inner">
            <h2 className="h2-home h2-home--small">Fresh Coffee. Forever.</h2>
            <p>Join the coffee club and get your favorite coffee delivered, automagically.</p>
            <a href="/coffee-club" className="btn">Coffee Club</a>
          </div>
        </div>
        <FeaturedProducts />
        <div className="hero-divider hero-divider--two">
          <div className="hero-divider__inner">
            <h2 className="h2-home h2-home--small">Order from our menu and pick up in store!</h2>
            <a className="btn">coming soon</a>
          </div>
        </div>
        <MerchProducts />
      </div>
    );
  }
}

let Welcome = document.getElementById("welcome");
if (Welcome) {
  const homePage = createRoot(Welcome);
  homePage.render(<Home />);
}

