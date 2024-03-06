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
    arrJobs: [
      {
        id: "abc01",
        title: "dev",
        salary: "400",
      },
      {
        id: "abc02",
        title: "manager",
        salary: "1000",
      },
      {
        id: "abc03",
        title: "designer",
        salary: "300",
      },
    ],
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
    console.log("check render: ", this.state);
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
        <ChildrenComponent
          name={this.state.firstName}
          arrJobs={this.state.arrJobs}
        />
      </>
    );
  }
}
export default MyComponent;
