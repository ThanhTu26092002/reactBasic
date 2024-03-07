import React, { Component } from "react";
import "./ListTodo.scss";
import { toast } from "react-toastify";
import AddTodo from "./AddTodo";
export default class ListTodo extends Component {
  state = {
    listTodos: [
      {
        id: "001",
        title: "John",
      },
      {
        id: "002",
        title: "Herry",
      },
      {
        id: "003",
        title: "Bitter",
      },
    ],
  };
  AddNewTodo = (todo) => {
    let currentListTodo = this.state.listTodos;
    currentListTodo.push(todo);
    this.setState({
      AddNewTodo: currentListTodo,
    });
    toast.success("Wow so easy!");
  };
  render() {
    let { listTodos } = this.state;
    return (
      <div className="list-todo-container">
        <AddTodo AddNewTodo={this.AddNewTodo} />
        <div className="list-todo-content">
          {listTodos &&
            listTodos.length > 0 &&
            listTodos.map((item, index) => {
              return (
                <div className="todo-child" key={item.id}>
                  <span>
                    {index + 1} - {item.title}
                  </span>
                  <button className="edit">Edit</button>
                  <button className="delete">Delete</button>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}
