import React from "react";
// import ReactDOM from "react-dom";
import ReactHowler from "react-howler";
import "./App.css";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import Button from "react-bootstrap/Button";

class App extends React.Component {
  state = {
    playing: false,
    label: this.props.label,
    saveLabel: "label",
    className: "img-btn",
  };

  handleChange = (value) => {
    const id = this.props.id;
    const combo = [value, id];
    console.log("to" + id);
    this.props.handleChange(combo);
  };

  handlePlay = () => {
    this.state.playing == false
      ? this.setState({
          playing: true,
        })
      : this.setState({
          playing: false,
        });
  };
  render() {
    let { volume } = this.state;

    return (
      <div className="item-div">
        <div className="button-div">
          <button
            className={this.props.playing === 1 ? "img-clicked" : "img-btn"}
            style={{ backgroundColor: "white" }}
            onClick={() => {
              this.props.fun2(this.props.id);
            }}
          >
            <img src={this.props.imgsource} className="photo" />
          </button>
        </div>

        {/*<ReactHowler
          preload={true}
          src={this.state.audiosource}
          playing={this.state.playing}
          loop={true}
          volume={this.state.volume}
        />*/}
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
      </div>
    );
  }
}

export default App;
