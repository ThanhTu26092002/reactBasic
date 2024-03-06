import React from "react";

class AddComponents extends React.Component {
  state = {
    titleJob: "",
    salary: "",
  };
  handleOnchangeTitleJob = (event) => {
    this.setState({
      titleJob: event.target.value,
    });
  };
  handleOnchangeSalary = (event) => {
    this.setState({
      salary: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("check data", this.state);
  };
  render() {
    return (
      <form>
        <label htmlFor="FirstName">Job's Title</label>
        <br />
        <input
          type="text"
          value={this.state.titleJob}
          onChange={(event) => this.handleOnchangeTitleJob(event)}
        />
        <br />
        <label htmlFor="LastName">Salary</label>
        <br />
        <input
          type="text"
          value={this.state.salary}
          onChange={(event) => this.handleOnchangeSalary(event)}
        />
        <br />
        <input
          type="submit"
          value="submit"
          onClick={(event) => this.handleSubmit(event)}
        />
      </form>
    );
  }
}
export default AddComponents;
