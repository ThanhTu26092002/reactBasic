import React, { Component } from "react";
import "./NavFake.scss";

export default class NavFake extends Component {
  render() {
    return (
      <div className="topnav">
        <a className="active" href="/">
          Home
        </a>
        <a href="/todofake">Todofake</a>
        <a href="/aboutfake">Aboutfake</a>
      </div>
    );
  }
}
