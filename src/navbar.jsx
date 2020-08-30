import React, { Component } from "react";
import TimeField from "react-simple-timefield";
import TextField from "@material-ui/core/TextField";

class NavBar extends Component {
  constructor() {
    super();

    this.state = {
      timeSeconds: "00:00:00",
      time2: 0,
    };

    this.onTimeChange = this.onTimeChange.bind(this);
  }

  onTimeChange(event, value) {
    const newTime = value.replace(/-/g, ":");

    const timeSeconds = newTime.padEnd(8, this.state.timeSeconds.substr(5, 3));
    var time = newTime.split(/[:]/);
    const hours = parseInt(time[0]);
    const minutes = parseInt(time[1]);
    const seconds = parseInt(time[2]);

    const time2 = hours * 3600 + minutes * 60 + seconds;
    this.setState({ timeSeconds, time2 });
  }

  render() {
    const { timeSeconds } = this.state;

    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Focus Melodies
        </a>
        <TimeField
          showSeconds
          value={timeSeconds}
          onChange={this.onTimeChange}
          style={{ width: 95 }}
          input={
            <TextField label="Timer" value={timeSeconds} variant="outlined" />
          }
        />
        <div className="btn" onClick={this.props.timer(this.state.time2)}>
          <button>Start</button>
        </div>
        .
      </nav>
    );
  }
}

export default NavBar;
