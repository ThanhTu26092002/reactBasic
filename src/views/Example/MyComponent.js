import React from "react";
import ChildrenComponent from "./ChildrenComponent.js";
import AddComponents from "./AddComponents.js";

class MyComponent extends React.Component {
  /*
     JSX: cho phép viết html  trong file javascript
     state: giá trị của nó thay đổi thì ct sẽ dc reder lại 
  
  */
  state = {
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

  render() {
    console.log("check render: ", this.state);
    return (
      <>
        <AddComponents />
        <ChildrenComponent arrJobs={this.state.arrJobs} />
      </>
    );
  }
}
export default MyComponent;
