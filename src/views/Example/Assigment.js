import React, { Component } from "react";
import { toast } from "react-toastify";

export default class Assigment extends Component {
  state = {
    listTodo: [
      {
        id: "001",
        title: "Le Thanh Tu",
      },
      {
        id: "002",
        title: "Le Thanh Tung",
      },
      {
        id: "003",
        title: "Le Thanh Tuan",
      },
    ],
    title: "",
  };
  AddNewTodo = (todo) => {
    let updatedListTodo = this.state.listTodo;
    updatedListTodo.push(todo);
    this.setState({
      AddNewTodo: updatedListTodo,
    });
  };
  handleUpdateListTodo = () => {
    let todo = {
      id: Math.floor(Math.random() * 1001),
      title: this.state.title,
    };
    this.AddNewTodo(todo);
    this.setState({
      title: "",
    });
  };
  handleOnchangeTitle = (event) =>
    this.setState({
      title: event.target.value,
    });
  handleDelete = (todo) => {
    let currentDelete = this.state.listTodo;
    currentDelete = currentDelete.filter((item) => item.id !== todo.id);
    this.setState({
      listTodo: currentDelete,
    });
  };
  render() {
    let { listTodo, title } = this.state;
    return (
      <div className="todo-container">
        <div className="add-todo">
          <input
            type="text"
            value={title}
            onChange={(event) => this.handleOnchangeTitle(event)}
          />
          <button onClick={() => this.handleUpdateListTodo()}>Add</button>
        </div>
        <div className="list-todo-container">
          {listTodo &&
            listTodo.length > 0 &&
            listTodo.map((item, index) => {
              return (
                <div className="todo-child">
                  {index + 1} - {item.title}
                  <button>Edit</button>
                  <button onClick={() => this.handleDelete(item)}>
                    Delete
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}
