import React, { Component } from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
class home extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.history.push("/todo");
    }, 3000);
  }
  render() {
    console.log("check props: ", this.props);
    return <div>Home</div>;
  }
}
export default withRouter(home);
