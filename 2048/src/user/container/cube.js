import React from "react";
import PropTypes from "prop-types";
import config from "../config.json";

export default class Cube extends React.Component {
  getCubeStyle(value = 0) {
    return {
      backgroundColor: config.style[value].background,
      color: config.style[value].color
    };
  }
  render() {
    const { value, rowIndex, colIndex, cubeStyle = {} } = this.props;
    const style = Object.assign(cubeStyle, this.getCubeStyle(value));
    return (
      <div
        style={cubeStyle}
        className={"grid-cell grid-cell-" + rowIndex + "-" + colIndex}
      >
        {value}
      </div>
    );
  }
}
