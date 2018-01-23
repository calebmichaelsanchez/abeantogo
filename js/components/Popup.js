import React, { Component } from 'react';

export default class Popup extends Component {
  constructor(props) {
    super(props);

    this.state= {
      visibility: false
    }

    this.showPopup = this.showPopup.bind(this);
    this.hidePopup = this.hidePopup.bind(this);
  }
  componentDidMount() {
    setTimeout(() => {
      this.showPopup();
    }, this.props.wait);
    window.localStorage.setItem('popup', 'hidden');
  }
  showPopup() {
    this.setState({ visibility: true });
  }
  hidePopup() {
    this.setState({ visibility: false });
  }
  render() {
    let visibilityClass;
    this.state.visibility ? visibilityClass = "popup--visible" : visibilityClass = "popup--hidden";
    return (
      <div className={`popup ${visibilityClass}`}>
        <div className="popup__container">
          <div className="popup__inner">
            <div className="popup__image">
              <div className="popup__close" onClick={this.hidePopup}>X</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
