import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Color from "../HOC/Color";
class Home extends Component {
  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.props.history.push("/todo");
    }, 3000);
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutId);
  }

  render() {
    console.log("Kiểm tra props: ", this.props);
    return <div>Hello Home</div>;
  }
}

export default Color(Home);
