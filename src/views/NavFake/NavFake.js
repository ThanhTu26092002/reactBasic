import React, { Component } from "react";
import "./NavFake.scss";

export default class NavFake extends Component {
  render() {
    return (
      <div className="topnav" exact={true}>
        <a className="active" href="/">
          Home
        </a>
        <a className="active" href="/todofake">
          Todofake
        </a>
        <a className="active" href="/aboutfake">
          Aboutfake
        </a>
      </div>
    );
  }
}
