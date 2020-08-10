import React, { Component } from "react";
import App from "./itemAdjust";
export default class PopUp extends Component {
  /*
  componentDidMount() {
    const playedTemp = this.props.playedArray;
    const played2 = data.filter(function (item) {
      return playedTemp.includes(item.id);
    });
    this.setState({ played: played2 });
    console.log(this.state.playedTemp);
  }*/
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
      <div className="modal">
        <div className="modal_content">
          <span className="close" onClick={this.handleClick}>
            &times;
          </span>
          <br />
          {this.props.tplayedArray.length === 0 ? (
            <div>
              {this.props.playedArray.map((gridItem) => (
                <App
                  id={gridItem.id}
                  imgsource={gridItem.imgsource}
                  audiosource={gridItem.audiosource}
                  label={gridItem.label}
                  fun2={this.fun2}
                  handleChange={this.handleChange}
                  volume={this.props.playingVolume[gridItem.id]}
                  playing={1}
                />
              ))}
            </div>
          ) : (
            <div>
              {this.props.tplayedArray.map((gridItem) => (
                <App
                  id={gridItem.id}
                  imgsource={gridItem.imgsource}
                  audiosource={gridItem.audiosource}
                  label={gridItem.label}
                  fun2={this.fun2}
                  handleChange={this.handleChange}
                  volume={this.props.playingVolume[gridItem.id]}
                  playing={0}
                />
              ))}
            </div>
          )}
          <div className="btn" onClick={this.props.stop}>
            <button>stop</button>
          </div>
          <div className="btn" onClick={this.props.pauseplay}>
            <button>{this.props.pauseplayy}</button>
          </div>
        </div>
      </div>
    );
  }
}
