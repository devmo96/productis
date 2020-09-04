import React, { Component } from "react";
import App from "./item";
import data from "./data/data";
import "./App.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
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
      <Container className="grid-container">
        <Row className="justify-content-md-center grid">
          {data.map((gridItem) => (
            <Col xs="6" md="4" lg="3">
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
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
export default Grid1;
