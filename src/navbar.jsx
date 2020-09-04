import React, { Component } from "react";
import TimeField from "react-simple-timefield";
import TextField from "@material-ui/core/TextField";

class NavBar extends Component {
  constructor() {
    super();

    this.state = {
      timeSeconds: "00:00:00",
      time2: 0,
      time3: 5,
      isClicked: false,
    };
    this.onTimeChange = this.onTimeChange.bind(this);
    this.startCountDown = this.startCountDown.bind(this);
    this.tick = this.tick.bind(this);
    this.popUp = this.popUp.bind(this);
  }

  tick = () => {
    if (this.state.time2 > 0) {
      this.setState({ time2: this.state.time2 - 1 });
      const time2 = this.state.time2;
      var hours = Math.floor(time2 / 3600);
      console.log("hours :" + hours);
      var min = Math.floor((time2 - hours * 3600) / 60);
      console.log("minutes :" + min);
      var sec = time2 - min * 60 - hours * 3600;
      console.log("seconds :" + sec);
      var strhours = "";
      var strmin = "";
      var strsec = "";
      if (hours >= 10) {
        strhours = String(hours);
      } else {
        strhours = "0" + String(hours);
      }
      if (min >= 10) {
        strmin = String(min);
      } else {
        strmin = "0" + String(min);
      }
      if (sec >= 10) {
        strsec = String(sec);
      } else {
        strsec = "0" + String(sec);
      }

      const timeSeconds = strhours + ":" + strmin + ":" + strsec;
      this.setState({
        timeSeconds,
      });
      console.log(this.state.time2);
    }
    if (this.state.time2 === 0) {
      this.props.timer();
      clearInterval(this.intervalHandle);
    }
  };
  startCountDown() {
    this.intervalHandle = setInterval(this.tick, 1000);
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

  popUp() {
    this.props.popUp2(2);
  }

  render() {
    const { timeSeconds } = this.state;

    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Focus Melodies
        </a>
        <div>
          <TimeField
            showSeconds
            value={timeSeconds}
            onChange={this.onTimeChange}
            style={{ width: 95 }}
            input={
              <TextField label="Timer" value={timeSeconds} variant="outlined" />
            }
          />
          <div
            className="btn"
            onClick={
              this.props.playedArray.length === 0 &&
              this.props.tplayedArray.length === 0
                ? this.popUp
                : this.startCountDown
            }
          >
            <button>Start</button>
          </div>
        </div>
        .
      </nav>
    );
  }
}

export default NavBar;
