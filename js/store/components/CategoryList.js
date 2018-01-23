import React, { Component } from "react";

export default class CategoryList extends Component {
  constructor() {
    super();
    this.state = {
      tagsActive: true,
      categoryClickTarget: "Coffee",
      activeCategoryIndex: 0,
      activeTagIndex: 0
    }
    this.toggleTags = this.toggleTags.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  toggleTags(event) {
    if (this.state.categoryClickTarget === event.target.innerHTML) {
      this.setState({ tagsActive: !this.state.tagsActive });
    } else {
      this.setState({ tagsActive: true });
      this.setState({ categoryClickTarget: event.target.innerHTML });
    }
  }
  handleClick(index, type) {
    // http://stackoverflow.com/questions/40792164/change-active-element-in-a-list-using-react
    if (type === "category") {
      this.setState({ activeCategoryIndex: index });
    } else {
      this.setState({ activeTagIndex: index });
    }
  }
  render() {
    let tagsActive;
    this.state.tagsActive ? tagsActive = "tags--active" : tagsActive = "";
    return (
      <div className="filters">
        <ul className="categories">
          {this.props.categories.map((item, index) => {
            let className = this.state.activeCategoryIndex === index ? "categories__item categories__item--active" : "categories__item";
            return (
              <li
                key={index}
                className={className}
                onClick={(event) => {
                  this.props.setFilter("category", item);
                  this.toggleTags(event);
                  this.handleClick(index, "category");
                  this.handleClick(0, "tag");
                }}>
                {item}
              </li>
            )
          })}
        </ul>
        <div className={`tags ${tagsActive}`}>
          <ul className="tags__list">
            {this.props.tags.map((item, index) => {
              let className = this.state.activeTagIndex === index ? "tags__item tags__item--active" : "tags__item";
              return (
                <li
                  key={item}
                  className={className}
                  onClick={() => {
                    this.props.setFilter("tag", item);
                    this.handleClick(index, "tag");
                  }}>
                  {item}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}
