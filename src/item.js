import React from "react";
// import ReactDOM from "react-dom";
import ReactHowler from "react-howler";
import "./App.css";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import Button from "react-bootstrap/Button";
import image from "./assets/photo/8.jpg";

class App extends React.Component {
  state = {
    playing: false,
    volume: this.props.volume,
    label: this.props.label,
    saveLabel: "label",
  };

  handleChange = (value) => {
    const id = this.props.id;
    const combo = [value, id];
    console.log("to" + id);
    this.props.handleChange(combo);
  };

  render() {
    return (
      <div className="item-div">
        <div className="button-div">
          <button
            className={this.props.playing == 0 ? " img-btn" : " img-clicked"}
            style={{ backgroundColor: "white" }}
            onClick={() => {
              this.props.fun1(this.props.id);
            }}
          >
            <img src={this.props.imgsource} className="photo" />
          </button>
        </div>

        <ReactHowler
          src={this.props.audiosource}
          playing={this.props.playing == 0 ? false : true}
          loop={true}
          volume={this.props.volume}
        />
        <p className="label">
          {this.props.playing == 0 ? this.props.label : ""}
        </p>
        {this.props.playing !== 0 && (
          <Slider
            //https://github.com/react-component/slider
            value={this.props.volume}
            onChange={this.handleChange}
            max={1}
            step={0.01}
            style={{ width: 100 }}
            railStyle={{ color: "red" }}
            className="slider"
          />
        )}
      </div>
    );
  }
}

export default App;
