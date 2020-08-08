import React, { Component } from "react";
import Grid1 from "./grid";
import "./App.css";
import PopUp from "./PopUp";
import data from "./data/data";
import App from "./item";

class Main extends React.Component {
  state = {
    played: 1,
    n: 0,
    playedArray: [],
    playedArrayid: [],
    playingArray: new Array(3).fill(0),
    playingVolume: new Array(3).fill(0.9),
    clicked: "false",
    visibility: "hidden",
    seen: false,
  };

  componentDidMount() {
    console.log(this.state.playingArray);
  }

  volumeChange = (combo) => {
    const playingtemp = this.state.playingVolume;
    const volume = combo[0];
    const itemId = combo[1];
    playingtemp[itemId] = volume;
    this.setState({
      playingVolume: playingtemp,
    });
  };

  handlePlay = (itemId) => {
    // console.log(itemId);
    const playedtemp = this.state.playedArrayid;
    if (playedtemp.length == 0) {
      playedtemp.push(itemId);
      const played2 = data.filter(function (item) {
        return playedtemp.includes(item.id);
      });
      const playingtemp = this.state.playingArray;
      playingtemp[itemId] = 1;
      this.setState({
        playedArray: played2,
        playedArrayid: playedtemp,
        playingArray: playingtemp,
      });
      //console.log("h1" + this.state.playedArray);
    } else if (playedtemp.length >= 0 && playedtemp.length <= 3) {
      if (playedtemp.indexOf(itemId) === -1) {
        playedtemp.push(itemId);
        const played2 = data.filter(function (item) {
          return playedtemp.includes(item.id);
        });
        const playingtemp = this.state.playingArray;
        playingtemp[itemId] = 1;
        this.setState({
          playedArray: played2,
          playedArrayid: playedtemp,
          playingArray: playingtemp,
        });
        //console.log("h2" + this.state.playedArray);
      } else {
        const playedtemp2 = playedtemp.filter((c) => c !== itemId);
        const played2 = data.filter(function (item) {
          return playedtemp2.includes(item.id);
        });
        const playingtemp = this.state.playingArray;
        playingtemp[itemId] = 0;
        this.setState({
          playedArray: played2,
          playedArrayid: playedtemp2,
          playingArray: playingtemp,
        });
        //console.log("h3" + this.state.playedArray);
      }
    } else {
      //change to message
      console.log(
        "You can't add more items" + this.state.playedArray + this.state.n
      );
    }
  };

  handlePlay2 = (itemId) => {
    const playedtemp = this.state.playedArrayid;
    const playedtemp2 = playedtemp.filter((c) => c !== itemId);
    const playingtemp = this.state.playingArray;
    playingtemp[itemId] = 0;

    const played2 = this.state.playedArray.filter((item) => item.id !== itemId);

    // this.state.playedArray.map((item) => {
    //   if (playedtemp2.includes(item.id)) {
    //     alert("item");
    //   }
    // });

    this.setState({
      playedArray: played2,
      playedArrayid: playedtemp2,
      playingArray: playingtemp,
    });
    console.log("hi" + this.state.playedArrayid);
  };

  togglePop = () => {
    this.setState({
      seen: !this.state.seen,
    });
  };

  render() {
    return (
      <div>
        <div>
          <div>
            <div className="btn" onClick={this.togglePop}>
              <button>adjust</button>
            </div>
            {this.state.seen ? (
              <PopUp
                toggle={this.togglePop}
                playedArray={this.state.playedArray}
                onPlay={this.handlePlay2}
                playingVolume={this.state.playingVolume}
                volumeChange={this.volumeChange}
              />
            ) : null}
          </div>

          {/*<div>{PauseAll}</div>*/}
          <div>
            <Grid1
              onPlay={this.handlePlay}
              playingArray={this.state.playingArray}
              playingVolume={this.state.playingVolume}
              volumeChange={this.volumeChange}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Main;
