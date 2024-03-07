import React, { Component } from "react";
import "./ListTodo.scss";
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
  render() {
    let { listTodos } = this.state;
    return (
      <div className="list-todo-container">
        <div className="add-todo">
          <input type="text" />
          <button>Add</button>
        </div>
        <div className="list-todo-content">
          {listTodos &&
            listTodos.length > 0 &&
            listTodos.map((item, index) => {
              return (
                <div className="todo-child" key={item.id}>
                  <span>
                    {index + 1} - {item.title}
                  </span>
                  <button>Edit</button>
                  <button>Delete</button>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}
