import React, { Component } from "react";
import ReactDOM from "react-dom";
import Cell from "./cell.js";

import "./page.css";

export class Page extends Component {
  constructor(props) {
    super(props);
    const { rows, cols } = this.props;
    this.state = {
      cells: Array(rows)
        .fill(0)
        .map(row => Array(cols).fill(0))
    };
  }
  foo = e => {
    console.log(e);
  };
  render() {
    return (
      <svg width={1000} height={1000}>
        {this.state.cells.map((row, r) => {
          return row.map((el, c) => {
            return <Cell x={r} y={c} />;
          });
        })}
      </svg>
    );
  }
}

export default Page;
