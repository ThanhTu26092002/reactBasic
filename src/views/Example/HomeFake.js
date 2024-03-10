import React from "react";
import { withRouter } from "react-router";
class HomeFake extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.history.push("/todofake");
    }, 3000);
  }
  render() {
    return <div>HomeFake</div>;
  }
}
export default withRouter(HomeFake);
