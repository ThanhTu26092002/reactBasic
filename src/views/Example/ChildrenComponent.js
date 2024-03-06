import React from "react";

class ChildrenComponent extends React.Component {
  /*
     JSX: cho phép viết html  trong file javascript
     state: giá trị của nó thay đổi thì ct sẽ dc reder lại 
  
  */
  state = {
    firstName: "",
    lastName: "",
  };
  handleOnchangeFirstName = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };
  handleOnchangeLastName = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };
  handleOnclickInput = (event) => {
    alert(this.state.firstName + this.state.lastName);
  };
  render() {
    console.log("render: ", this.state);
    return (
      <>
        <div>Child Components: {this.props.name}</div>
      </>
    );
  }
}
export default ChildrenComponent;
