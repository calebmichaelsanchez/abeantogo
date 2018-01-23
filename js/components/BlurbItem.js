import React, { Component } from "react";
import axios from "axios";

export default class BlurbItem extends Component {
  constructor() {
    super();
  }
  strip(html) {
    let tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  }
  render() {
    console.log(this.props.type);
    let { button, type } = this.props;

    return <div />

    // let { title, fullUrl } = data;
    // let description;
    // if (type === 'page') {
    //   description = data.description;
    // } else {
    //   description = data.excerpt;
    // }
    // return (
    //   <div className="blurb">
    //     <h1 className="blurb__title">{title}</h1>
    //     <p className="blurb__description">{this.strip(description)}</p>
    //     <a href={fullUrl} className="btn">{button}</a>
    //   </div>
    // )
  }
}
