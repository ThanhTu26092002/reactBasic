import React from "react";

class MyComponent extends React.Component {
  /*
     JSX: cho phép viết html  trong file javascript
     state: giá trị của nó thay đổi thì ct sẽ dc reder lại 
  
  */
  // state = {
  //   name: "",
  //   address: "Da Nang",
  // };
  // handleOnchangeInput = (event) => {
  //   this.setState({
  //     name: event.target.value,
  //   });
  // };

  // handleOnclickButton = () => {
  //   alert(this.state.name);
  // };
  state = {
    firstName: "",
    lastName: "",
  };
  handleChangeFirstName = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };
  handleOnchangeLastName = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };
  handleOnclickSubmit = (event) => {
    alert(this.state.firstName + this.state.lastName);
  };
  render() {
    console.log("render: ", this.state);
    return (
      // <React.Fragment>
      //   <div className="first">
      //     <input
      //       value={this.state.name}
      //       type="text"
      //       onChange={(event) => this.handleOnchangeInput(event)}
      //     />
      //   </div>
      //   <div className="second">Xin chao, tui ten la {this.state.name}</div>
      //   <div className="third">
      //     <button onClick={() => this.handleOnclickButton()}>Click Here</button>
      //   </div>
      // </React.Fragment>
      <>
        <form>
          <label htmlFor="name">First Name: </label>
          <br />
          <input
            type="text"
            value={this.state.firstName}
            onChange={(event) => this.handleChangeFirstName(event)}
          />
          <br />
          <label htmlFor="lastname">Last Name: </label>
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
            onClick={(event) => this.handleOnclickSubmit(event)}
          />
        </form>
      </>
    );
  }
}
export default MyComponent;
