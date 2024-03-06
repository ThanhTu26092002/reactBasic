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
    console.log("check props ", this.props);
    let { name, age, address, Jobs } = this.props;
    return (
      <>
        {/* <div className="Joblist">
          {Jobs.map((item, index) => {
            return (
              <div key={item.id}>
                {item.title}-{item.salary}
              </div>
            );
          })}
        </div> */}
        <div className="Jobs">
          {Jobs.map((item, index) => {
            return (
              <div key={item.id}>
                {item.name} - {item.address}
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
export default ChildrenComponent;
