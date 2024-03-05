import React from "react";

class MyComponent extends React.Component {
  /*
     JSX: cho phép viết html  trong file javascript
     state: giá trị của nó thay đổi thì ct sẽ dc reder lại 
  
  */

  state = {
    name: "Nguyen Thi Ha",
    address: "Dai Phong",
  };
  handleOnchangeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handClickButton = () => {
    alert("click here");
  };
  render() {
    return (
      <React.Fragment>
        <div className="first">
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => this.handleOnchangeName(event)}
          />
          {console.log("my name is", this.state.name)}
        </div>
        <div className="second">Hello, My name is {this.state.name}</div>
        <div className="third">
          <button onClick={() => this.handClickButton()}>Click Here</button>
        </div>
      </React.Fragment>
    );
  }
}
export default MyComponent;
