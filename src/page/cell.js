import React, { Component } from "react";
import ReactDOM from "react-dom";

export class Cell extends Component {
  state = {
    width: 30,
    height: 30,
    hilighted: false,
    ...this.props
  };
  render() {
    const { x, y, hilighted } = this.props;
    return (
      <rect
        x={x * 30}
        y={y * 30}
        width="30"
        height="30"
        stroke={hilighted ? "red" : "lightgray"}
        fill={hilighted ? "pink" : "transparent"}
        strokeWidth="2"
      />
    );
  }
}

export default Cell;
