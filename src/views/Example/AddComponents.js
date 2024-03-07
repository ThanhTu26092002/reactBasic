import React from "react";

class AddComponents extends React.Component {
  state = {
    title: "",
    salary: "",
  };
  handleOnchangeTitleJob = (event) => {
    this.setState({
      title: event.target.value,
    });
  };
  handleOnchangeSalary = (event) => {
    this.setState({
      salary: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    if (!this.state.salary || !this.state.title) {
      alert("please enter text: ");
      return;
    }
    this.props.addNewJob({
      id: Math.floor(Math.random() * 1001),
      title: this.state.title,
      salary: this.state.salary,
    });
    this.setState({
      title: "",
      salary: "",
    });
  };
  render() {
    return (
      <form>
        <label htmlFor="FirstName">Job's Title</label>
        <br />
        <input
          type="text"
          value={this.state.title}
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
