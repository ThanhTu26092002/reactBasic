import React, { Component } from "react";

export default class ditMe extends Component {
  state = {
    listTodos: [
      {
        id: "001",
        des: "lethanhtu",
      },
      {
        id: "002",
        des: "nguyenthiha",
      },
      {
        id: "003",
        des: "lenguyenhoainam",
      },
    ],
  };
  render() {
    let { listTodos } = this.state;
    return (
      <div className="todo-container">
        <div className="add-todo">
          <input type="text" />
          <button>Add</button>
        </div>
        <div className="list-todo-container">
          {listTodos &&
            listTodos.length > 0 &&
            listTodos.map((item, index) => {
              return (
                <div className="todo-child" key={item.id}>
                  <span>
                    {index + 1} - {item.des}
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
