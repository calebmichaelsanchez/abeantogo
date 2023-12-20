import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import axios from "axios";
import { getBody } from "../util/helpers";
import AboutContent from "./components/AboutContent";

class AboutContainer extends Component {
  constructor() {
    super();
    this.state = {
      mainContent: ""
    }
  }
  componentDidMount() {
    axios("/about?format=json")
      .then((response) => {
        console.log(response);
        this.setState({
          mainContent: response.data.mainContent });
      })
      .catch((response) => {
        console.log(response);
      });
  }
  render() {
    return (
      <div className="about">
        {this.state.mainContent === "" ? null : <AboutContent body={this.state.mainContent} />}
      </div>
    );
  }
}

let About = document.getElementById("about");
if (About) {
  const aboutPage = createRoot(About);
  aboutPage.render(<AboutContainer />);
}
