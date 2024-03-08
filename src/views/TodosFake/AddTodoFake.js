import React, { Component } from "react";
import { toast } from "react-toastify";
export default class AddTodoFake extends Component {
  state = {
    title: "",
  };
  handleOnChangeTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };
  handleAddTodo = () => {
    if (!this.state.title) {
      toast.error("địt con mẹ mày nhập");
      return;
    }
    let todo = {
      id: Math.floor(Math.random() * 1001),
      title: this.state.title,
    };
    this.props.AddNewTodo(todo);
    this.setState({
      title: "",
    });
    toast.success("ok rồi đó thằng ngu");
  };
  render() {
    let { title } = this.state;
    return (
      <>
        <p>Hello Todo AppFake</p>
        <div className="add-todo">
          <input
            type="text"
            value={title}
            onChange={(event) => this.handleOnChangeTitle(event)}
          />
          <button type="button" onClick={() => this.handleAddTodo()}>
            Add
          </button>
        </div>
      </>
    );
  }
}
