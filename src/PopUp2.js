import React, { useEffect, useState, useRef, Component } from "react";
import App from "./itemAdjust";
import "./App.css";

export default class PopUp2 extends Component {
  handleChange = (combo) => {
    console.log(combo);
    this.props.volumeChange(combo);
  };
  handleClick = () => {
    this.props.toggle();
  };
  fun2 = (param) => {
    this.props.onPlay(param);
  };

  render() {
    return (
      <div className="modals">
        <div className="modals2" onClick={this.handleClick} />
        <div className="modal_content">
          <span className="close" onClick={this.handleClick}>
            &times;
          </span>
          <br />
        </div>
      </div>
    );
  }
}
