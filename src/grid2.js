import React, { Component } from "react";
import App from "./item";
import data from "./data/data";
import "./App.css";

//https://github.com/STORIS/react-material-responsive-grid/blob/master/LICENSE
class Grid1 extends React.Component {
  state = {
    playingArray: this.props.playingArray,
    playingVolume: this.props.playingVolume,
  };
  fun1 = (param) => {
    this.props.onPlay(param);
  };
  handleChange = (combo) => {
    console.log(combo);
    this.props.volumeChange(combo);
  };
  render() {
    return (
      <div className="grid-container">
        <div className="grid">
          {data.map((gridItem) => (
            <App
              id={gridItem.id}
              imgsource={gridItem.imgsource}
              audiosource={gridItem.audiosource}
              label={gridItem.label}
              fun1={this.fun1}
              handleChange={this.handleChange}
              volume={this.props.playingVolume[gridItem.id]}
              playing={this.props.playingArray[gridItem.id]}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default Grid1;
