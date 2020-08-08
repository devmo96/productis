import React from "react";
import ReactHowler from "react-howler";
import "./App.css";
import Button from "react-bootstrap/Button";

class PauseAll extends React.Component {
  state = {};

  componentDidMount = () => {
    this.setState({
      imgsource: this.props.imgsource,
      audiosource: this.props.audiosource,
      label: this.props.label,
    });
  };

  handleOnChange = (value) => {
    this.setState({
      volume: value,
    });
  };

  render() {
    return (
      <button
        onClick={() => {
          this.state.playing == false
            ? this.setState({
                playing: true,
                saveLabel: this.state.label,
                label: "",
                className: "img-clicked",
              })
            : this.setState({
                playing: false,
                label: this.state.saveLabel,
                className: "img-btn",
              });
        }}
      ></button>
    );
  }
}

export default PauseAll;
