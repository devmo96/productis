import React, { Component, useRef } from "react";
import Grid1 from "./grid";
import "./App.css";
import PopUp from "./PopUp";
import data from "./data/data";
import NavBar from "./navbar";
import { Link } from "react-scroll";

class Main extends React.Component {
  state = {
    n: 0,
    playedArray: [],
    playedArrayid: [],
    playingArray: new Array(100).fill(0),
    playingVolume: new Array(100).fill(0.5),
    tplayedArray: [],
    tplayedArrayid: [],
    tplayingArray: new Array(100).fill(0),
    tplayingVolume: new Array(100).fill(0.5),
    clicked: "false",
    visibility: "hidden",
    seen: false,
    pauseplay: "pause",
  };

  gotoAnimals = () => {
    const Crickets = useRef(null);
    window.scrollTo({ top: Crickets.current.offsetTop, behavior: "smooth" });
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
      if (this.state.pauseplay === "pause") {
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
        console.log("0 playing played array id  " + this.state.playedArrayid);
      } else if (this.state.pauseplay === "play") {
        const playedtemp2 = this.state.tplayedArrayid;
        if (!playedtemp2.includes(itemId)) {
          playedtemp2.push(itemId);
          const played2 = data.filter(function (item) {
            return playedtemp2.includes(item.id);
          });
          const playingtemp = this.state.tplayingArray;
          playingtemp[itemId] = 1;
          this.setState({
            playedArray: played2,
            playedArrayid: playedtemp2,
            tplayedArray: played2,
            playingArray: playingtemp,
            pauseplay: "pause",
          });
          console.log(
            "0 paused played array id  " +
              this.state.playedArrayid +
              "h" +
              this.state.tplayedArrayid
          );
        } else if (playedtemp2.includes(itemId)) {
          const playedtemp3 = playedtemp.filter((c) => c !== itemId);
          const playingtemp = this.state.tplayingArray;
          playingtemp[itemId] = 0;

          const played2 = this.state.tplayedArray.filter(
            (item) => item.id !== itemId
          );
          this.setState({
            playedArray: played2,
            tplayedArray: played2,
            playedArrayid: playedtemp2,
            playingArray: playingtemp,
            pauseplay: "pause",
          });
        }
      }
      //console.log("h1" + this.state.playedArray);
    } else if (playedtemp.length >= 0 && playedtemp.length < 8) {
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
        console.log(
          "several playing adding, played array id  " + this.state.playedArrayid
        );
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
        console.log(
          "several playing removing, played array id  " +
            this.state.playedArrayid
        );
      }
    } else {
      //change to message
      if (playedtemp.indexOf(itemId) === -1) {
        console.log("You can't add more items");
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
        console.log(
          "several playing removing, played array id  " +
            this.state.playedArrayid
        );
      }
    }
  };

  handlePlay2 = (itemId) => {
    if (this.state.pauseplay === "pause") {
      const playedtemp = this.state.playedArrayid;
      const playedtemp2 = playedtemp.filter((c) => c !== itemId);
      const playingtemp = this.state.playingArray;
      playingtemp[itemId] = 0;

      const played2 = this.state.playedArray.filter(
        (item) => item.id !== itemId
      );
      this.setState({
        playedArray: played2,
        tplayedArray: played2,
        playedArrayid: playedtemp2,
        playingArray: playingtemp,
      });
      if (played2.length === 0) {
        this.setState({
          seen: !this.state.seen,
        });
      }
    } else if (this.state.pauseplay === "play") {
      const playedtemp = this.state.tplayedArrayid;
      const playedtemp2 = playedtemp.filter((c) => c !== itemId);
      const playingtemp = this.state.tplayingArray;
      playingtemp[itemId] = 0;

      const played2 = this.state.tplayedArray.filter(
        (item) => item.id !== itemId
      );
      this.setState({
        playedArray: played2,
        tplayedArray: played2,
        playedArrayid: playedtemp2,
        tplayingArray: playingtemp,
      });
      console.log(
        this.state.playedArray.length + "hi" + this.state.tplayedArray.length
      );
      if (played2.length === 0) {
        this.setState({
          seen: !this.state.seen,
        });
      }
    }
  };

  togglePop = () => {
    this.setState({
      seen: !this.state.seen,
    });
  };
  stop = () => {
    const tplayedArray = [];
    const tplayedArrayid = [];
    const tplayingArray = new Array(100).fill(0);
    const tplayingVolume = new Array(100).fill(0.5);
    this.setState({
      playedArray: tplayedArray,
      playedArrayid: tplayedArrayid,
      playingArray: tplayingArray,
      playingVolume: tplayingVolume,
      tplayedArray: [],
      tplayedArrayid: [],
      tplayingArray: new Array(100).fill(0),
      tplayingVolume: new Array(100).fill(0.5),
      pauseplay: "pause",
    });
  };

  pauseplay = () => {
    if (this.state.pauseplay === "play") {
      this.setState({
        playedArray: this.state.tplayedArray,
        playedArrayid: this.state.tplayedArrayid,
        playingArray: this.state.tplayingArray,
        tplayedArray: [],
        tplayedArrayid: [],
        tplayingArray: new Array(100).fill(0),

        pauseplay: "pause",
      });
    } else if (this.state.pauseplay === "pause") {
      this.setState({
        tplayedArray: this.state.playedArray,
        tplayedArrayid: this.state.playedArrayid,
        tplayingArray: this.state.playingArray,
        playedArray: [],
        playedArrayid: [],
        playingArray: new Array(100).fill(0),
        pauseplay: "play",
      });
    }
  };

  mix1 = () => {
    const tplayedArrayid = [];
    const tplayingArray = new Array(100).fill(0);
    const tplayingVolume = new Array(100).fill(0.5);
    tplayedArrayid[0] = 0;
    const tplayedArray = data.filter(function (item) {
      return tplayedArrayid.includes(item.id);
    });
    tplayingArray[0] = 1;
    tplayingVolume[0] = 0.7;
    this.setState({
      playedArray: tplayedArray,
      playedArrayid: tplayedArrayid,
      playingArray: tplayingArray,
      playingVolume: tplayingVolume,
      tplayedArray: [],
      tplayedArrayid: [],
      tplayingArray: new Array(100).fill(0),
      tplayingVolume: new Array(100).fill(0.5),
      pauseplay: "pause",
    });
  };
  timer = (time) => {};
  render() {
    return (
      <React.Fragment>
        <NavBar timer={this.timer} />
        <div>
          {this.state.seen ? (
            <PopUp
              toggle={this.togglePop}
              playedArray={this.state.playedArray}
              onPlay={this.handlePlay2}
              playingVolume={this.state.playingVolume}
              volumeChange={this.volumeChange}
              stop={this.stop}
              pauseplay={this.pauseplay}
              pauseplayy={this.state.pauseplay}
              tplayedArray={this.state.tplayedArray}
            />
          ) : null}
          <div>
            <div className="bar">
              {this.state.tplayedArray.length !== 0 ||
              this.state.playedArray.length !== 0 ? (
                <div className="btn" onClick={this.togglePop}>
                  <button>adjust</button>
                </div>
              ) : null}
              {this.state.tplayedArray.length !== 0 ||
              this.state.playedArray.length !== 0 ? (
                <div className="btn" onClick={this.stop}>
                  <button>stop</button>
                </div>
              ) : null}
              {this.state.tplayedArray.length !== 0 ||
              this.state.playedArray.length !== 0 ? (
                <div className="btn" onClick={this.pauseplay}>
                  <button>{this.state.pauseplay}</button>
                </div>
              ) : null}
            </div>
            <div className="bar2">
              <div
                className="categ-div"
                id={this.props.label}
                ref={this.props.label}
              >
                <div className="btn button-div">
                  <button className={"img"} style={{ backgroundColor: "pink" }}>
                    <img src={this.props.imgsource} className="photo" />
                  </button>
                </div>

                <p className="label2">Hi</p>
              </div>
              <div
                className="categ-div"
                id={this.props.label}
                ref={this.props.label}
              >
                <div className="btn button-div">
                  <button
                    className={"img"}
                    style={{ backgroundColor: "pink" }}
                    onClick={this.mix1}
                  >
                    <img src={this.props.imgsource} className="photo" />
                  </button>
                </div>

                <p className="label2">Hi</p>
              </div>
              <div
                className="categ-div"
                id={this.props.label}
                ref={this.props.label}
              >
                <div className="btn button-div">
                  <button className={"img"} style={{ backgroundColor: "pink" }}>
                    <img src={this.props.imgsource} className="photo" />
                  </button>
                </div>

                <p className="label2">Hi</p>
              </div>
              <div
                className="categ-div"
                id={this.props.label}
                ref={this.props.label}
              >
                <div className="btn button-div">
                  <button
                    className={"img"}
                    style={{ backgroundColor: "pink" }}
                    onClick={this.mix1}
                  >
                    <img src={this.props.imgsource} className="photo" />
                  </button>
                </div>

                <p className="label2">Hi</p>
              </div>
              <div
                className="categ-div"
                id={this.props.label}
                ref={this.props.label}
              >
                <div className="btn button-div">
                  <button className={"img"} style={{ backgroundColor: "pink" }}>
                    <img src={this.props.imgsource} className="photo" />
                  </button>
                </div>

                <p className="label2">Hi</p>
              </div>
              <div
                className="categ-div"
                id={this.props.label}
                ref={this.props.label}
              >
                <div className="btn button-div">
                  <button
                    className={"img"}
                    style={{ backgroundColor: "pink" }}
                    onClick={this.mix1}
                  >
                    <img src={this.props.imgsource} className="photo" />
                  </button>
                </div>

                <p className="label2">Hi</p>
              </div>
              <div
                className="categ-div"
                id={this.props.label}
                ref={this.props.label}
              >
                <div className="btn button-div">
                  <button className={"img"} style={{ backgroundColor: "pink" }}>
                    <img src={this.props.imgsource} className="photo" />
                  </button>
                </div>

                <p className="label2">Hi</p>
              </div>
              <div
                className="categ-div"
                id={this.props.label}
                ref={this.props.label}
              >
                <div className="btn button-div">
                  <button
                    className={"img"}
                    style={{ backgroundColor: "pink" }}
                    onClick={this.mix1}
                  >
                    <img src={this.props.imgsource} className="photo" />
                  </button>
                </div>

                <p className="label2">Hi</p>
              </div>
              <div
                className="categ-div"
                id={this.props.label}
                ref={this.props.label}
              >
                <div className="btn button-div">
                  <button className={"img"} style={{ backgroundColor: "pink" }}>
                    <img src={this.props.imgsource} className="photo" />
                  </button>
                </div>

                <p className="label2">Hi</p>
              </div>
              <div
                className="categ-div"
                id={this.props.label}
                ref={this.props.label}
              >
                <div className="btn button-div">
                  <button
                    className={"img"}
                    style={{ backgroundColor: "pink" }}
                    onClick={this.mix1}
                  >
                    <img src={this.props.imgsource} className="photo" />
                  </button>
                </div>

                <p className="label2">Hi</p>
              </div>
            </div>
            <div className="bar3">
              <div className="iflex btn">
                <Link
                  className="btn2"
                  activeClass="active"
                  to="Heavy Rain"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={0}
                  duration={500}
                  isDynamic={true}
                  ignoreCancelEvents={false}
                >
                  Rain
                </Link>
              </div>
              <div className="iflex btn">
                <Link
                  className="btn2"
                  activeClass="active"
                  to="Lake"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={0}
                  duration={500}
                  isDynamic={true}
                  ignoreCancelEvents={false}
                >
                  Water
                </Link>
              </div>

              <div className="iflex btn">
                <Link
                  className="btn2"
                  activeClass="active"
                  to="Wind"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={0}
                  duration={500}
                  isDynamic={true}
                  ignoreCancelEvents={false}
                >
                  Wind
                </Link>
              </div>
              <div className="iflex btn">
                <Link
                  className="btn2"
                  activeClass="active"
                  to="White Noise"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={0}
                  duration={500}
                  isDynamic={true}
                  ignoreCancelEvents={false}
                >
                  Nature
                </Link>
              </div>
              <div className="iflex btn">
                <Link
                  className="btn2"
                  activeClass="active"
                  to="Crickets"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={0}
                  duration={500}
                  isDynamic={true}
                  ignoreCancelEvents={false}
                >
                  Animals
                </Link>
              </div>
              <div className="iflex btn">
                <Link
                  className="btn2"
                  activeClass="active"
                  to="Canary"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={0}
                  duration={500}
                  isDynamic={true}
                  ignoreCancelEvents={false}
                >
                  Birds
                </Link>
              </div>
              <div className="iflex btn">
                <Link
                  className="btn2"
                  activeClass="active"
                  to="Beach"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={0}
                  duration={500}
                  isDynamic={true}
                  ignoreCancelEvents={false}
                >
                  Ambiences
                </Link>
              </div>
              <div className="iflex btn">
                <Link
                  className="btn2"
                  activeClass="active"
                  to="Airplane"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={0}
                  duration={500}
                  isDynamic={true}
                  ignoreCancelEvents={false}
                >
                  Transportation
                </Link>
              </div>
              <div className="iflex btn">
                <Link
                  className="btn2"
                  activeClass="active"
                  to="Air Conditioner"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={0}
                  duration={500}
                  isDynamic={true}
                  ignoreCancelEvents={false}
                >
                  Objects
                </Link>
              </div>
              <div className="iflex btn">
                <Link
                  className="btn2"
                  activeClass="active"
                  to="White Noise"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={0}
                  duration={500}
                  isDynamic={true}
                  ignoreCancelEvents={false}
                >
                  Noise
                </Link>
              </div>
              <div className="iflex btn">
                <Link
                  className="btn2"
                  activeClass="active"
                  to="Fire"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={0}
                  duration={500}
                  isDynamic={true}
                  ignoreCancelEvents={false}
                >
                  Fire
                </Link>
              </div>
              <div className="iflex btn">
                <Link
                  className="btn2"
                  activeClass="active"
                  to="Wind Chimes"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={0}
                  duration={500}
                  isDynamic={true}
                  ignoreCancelEvents={false}
                >
                  Wind Chimes
                </Link>
              </div>
              <div className="iflex btn">
                <Link
                  className="btn2"
                  activeClass="active"
                  to="9in Crystal Bowl"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={0}
                  duration={500}
                  isDynamic={true}
                  ignoreCancelEvents={false}
                >
                  Meditation
                </Link>
              </div>
            </div>
            <div className="Grid">
              <Grid1
                onPlay={this.handlePlay}
                playingArray={this.state.playingArray}
                playingVolume={this.state.playingVolume}
                volumeChange={this.volumeChange}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Main;
