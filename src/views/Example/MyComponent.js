import React from "react";
import ChildrenComponent from "./ChildrenComponent.js";
class MyComponent extends React.Component {
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
        <form>
          <label htmlFor="FirstName">FirstName: </label>
          <br />
          <input
            type="text"
            value={this.state.firstName}
            onChange={(event) => this.handleOnchangeFirstName(event)}
          />
          <br />
          <label htmlFor="LastName">LastName: </label>
          <br />
          <input
            type="text"
            value={this.state.lastName}
            onChange={(event) => this.handleOnchangeLastName(event)}
          />
          <br />
          <input
            type="submit"
            value="submit"
            onClick={(event) => this.handleOnclickInput(event)}
          />
        </form>
        <ChildrenComponent name={"child one"} />
        <ChildrenComponent name={"child two"} />
        <ChildrenComponent name={"child three"} />
      </>
    );
  }
}
export default MyComponent;
