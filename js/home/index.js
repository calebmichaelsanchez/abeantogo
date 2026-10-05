import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import axios from "axios";
import Popup from "../components/Popup";
import Hero from "./components/Hero";
import GetProducts from "../components/GetProducts";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      image: null,
      popup: false
    }
    this.renderPopup = this.renderPopup.bind(this);
    this.getLinks = this.getLinks.bind(this);
    this.addSlide = this.addSlide.bind(this);
  }
  componentDidMount() {
    axios("/?format=json")
      .then((response) => {
        this.setState({ image: response.data.collection.mainImage.assetUrl });
      })
      .catch((response) => {
        console.log(response);
    });
    this.addSlide(this.getLinks());
  }
  getLinks() {
    let links = document.querySelectorAll('.slide-link');
    return links;
  }
  addSlide(linkList) {
    linkList.forEach(link => {
      link.addEventListener('click', function(event) {
        // 3. Stop the default instant "jump" behavior
        event.preventDefault();

        // 4. Get the target section ID from the href attribute (e.g., "#section1")
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        // 5. Slide smoothly to the target element
        if (targetSection) {
          targetSection.scrollIntoView({
              behavior: 'smooth',
              block: 'start' // Aligns the top of the section to the top of the viewport
          });
        }
      });
    });
  }
  renderPopup() {
    if (!this.state.popup) {
      return null
    }
    return <Popup wait={1000} />
  }
  render() {
    let image = this.state.image ? this.state.image : "/assets/contact-background.jpg";
    return (
      <div className="welcome">
        <div className="video-header">
          <div className="video-header__inner">
            <video className="video-header__video" src="/assets/hero-video-small.mp4" playsInline muted loop autoPlay crossOrigin="anonymous">
              <img src="/assets/contact-background.jpg" alt="" />
            </video>
          </div>
          <div className="video-header__logo">
            <img src="/assets/header-new.svg" />
            <a href="/store" className="btn">Online Store</a>
            <a href="#mobile-ordering" className="btn slide-link">Mobile Ordering</a>
          </div>
          <div className="video-header__arrow">^</div>
        </div>
        <div className="hero-divider hero-divider--no-height hero-divider--no-border">
          <div className="hero-divider__inner">
            <h1>Master Roasted.<br />Never Burnt.</h1>
            <p>At ABeanToGo, roasting is our craft, and good coffee is our passion. <a className="slide-link" href="#mobile-ordering">Order ahead</a> at our stores in <a href="/locations">Goodrich or Lake Orion</a>, or buy fresh roasted beans in our <a href="/store">online store</a> to find out&nbsp;for&nbsp;yourself.</p>
          </div>
        </div>
        <div className="hero-divider hero-divider--one">
          <div className="hero-divider__inner">
            <h2>Get fresh roasted coffee delivered straight to your&nbsp;door.</h2>
            <p>For more than 20 years all of our coffee has been roasted on site in small batches at our headquarters in Goodrich,&nbsp;Michigan.</p>
            <a href="/store" className="btn">Shop Now</a>
          </div>
        </div>
        <div className="hero-divider hero-divider--no-height hero-divider--no-border">
          <div className="hero-divider__inner">
            <h2>Fresh Coffee. Forever.</h2>
            <p>Join our Coffee Club and get your favorite coffee, and espresso delivered weekly, bi-weekly, or monthly.</p>
            <a href="/coffee-club" className="btn">Join Now</a>
          </div>
        </div>
        {/*<GetProducts title="Coffee of the month" starred={true} />*/}
        <GetProducts title="ABeanToGo Merch" starred={false} category="Merchandise" />
      </div>
    );
  }
}

let Welcome = document.getElementById("welcome");
if (Welcome) {
  const homePage = createRoot(Welcome);
  homePage.render(<Home />);
}

