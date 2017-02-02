import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Hero from "./components/Hero";
import PageBlurb from "../components/PageBlurb.js";
import BlogBlurb from "../components/BlogBlurb.js";
import EventBlurb from "../components/EventBlurb.js";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      image: ""
    }
  }
  componentDidMount() {
    axios("/?format=json")
      .then((response) => {
        this.setState({ image: response.data.collection.mainImage.assetUrl });
      })
      .catch((response) => {
        console.log(response);
      });
  }
  render() {
    let { image } = this.state;
    return (
      <div>
        <Hero image={image} />
        <div className="learn-more">
          <div className="learn-more__item">
            <PageBlurb url="store" button="Shop Now" type="PageBlurbItem"/>
          </div>
          <div className="learn-more__item">
            <PageBlurb url="about" button="Learn More" type="PageBlurbItem"/>
          </div>
          <img src="/assets/home-coffee-mug.png" className="learn-more__cup"/>
          <img src="/assets/home-beans.png" className="learn-more__beans"/>
        </div>
        <div className="hero-divider"></div>
        <div className="featured-blogs">
          <div className="featured-blogs__inner">
            <h1>Featured Events & News</h1>
            <div className="featured-blogs__item">
              <EventBlurb url="events" button="See Events" type="EventBlurbItem"/>
            </div>
            <div className="featured-blogs__item">
              <BlogBlurb url="blog" button="See Blog" type="BlogBlurbItem"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

let Welcome = document.getElementById("welcome");

if (Welcome) {
  ReactDOM.render(<Home />, Welcome);
}
