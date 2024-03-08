import React, { Component } from "react";
import AddDitMe from "./addDitMe";
import { toast } from "react-toastify";

export default class ditMe extends Component {
  state = {
    listTodos: [
      {
        id: "001",
        title: "lethanhtu",
      },
      {
        id: "002",
        title: "nguyenthiha",
      },
      {
        id: "003",
        title: "lenguyenhoainam",
      },
    ],
  };
  AddNewTodo = (todo) => {
    let currentListTodo = this.state.listTodos;
    currentListTodo.push(todo);
    this.setState({
      AddNewTodo: currentListTodo,
    });
  };
  handleDeleteTodo = (todo) => {
    let currentDeleteTodo = this.state.listTodos;
    currentDeleteTodo = currentDeleteTodo.filter((item) => item.id !== todo.id);
    this.setState({
      listTodos: currentDeleteTodo,
    });
    toast.success("Delete succed");
  };
  render() {
    let { listTodos } = this.state;
    return (
      <div className="todo-container">
        <AddDitMe AddNewTodo={this.AddNewTodo} />
        <div className="list-todo-container">
          {listTodos &&
            listTodos.length > 0 &&
            listTodos.map((item, index) => {
              return (
                <div className="todo-child" key={item.id}>
                  <span>
                    {index + 1} - {item.title}
                  </span>
                  <button>Edit</button>
                  <button onClick={() => this.handleDeleteTodo(item)}>
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
