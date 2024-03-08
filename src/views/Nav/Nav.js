import React, { Component } from "react";
import "./Nav.scss";

export default class Nav extends Component {
  render() {
    return (
      <div className="topnav">
        <a className="active" href="#home">
          Home
        </a>
        <a href="todo">Todo</a>
        <a href="about">About</a>
      </div>
    );
  }
}
