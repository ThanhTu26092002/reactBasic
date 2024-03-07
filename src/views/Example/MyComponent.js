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
  addNewJob = (job) => {
    let currentJobs = this.state.arrJobs;
    currentJobs.push(job);
    this.setState({
      arrJobs: currentJobs,
    });
  };
  // deleteAJob = (job) => {
  //   let currentJobs = this.state.arrJobs;
  //   currentJobs = currentJobs.filter((item) => item.id !== job.id);
  //   this.setState({
  //     arrJobs: currentJobs,
  //   });
  // };
  deleteAJob = (job) => {
    let currentJobs = this.state.arrJobs;
    currentJobs = currentJobs.filter((item) => item.id !== job.id);
    this.setState({
      arrJobs: currentJobs,
    });
  };
  render() {
    console.log("check render: ", this.state);
    return (
      <>
        <AddComponents addNewJob={this.addNewJob} />

        <ChildrenComponent
          arrJobs={this.state.arrJobs}
          deleteAJob={this.deleteAJob}
        />
      </>
    );
  }
}
export default MyComponent;
