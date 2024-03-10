import React, { Component } from "react";
import "./ListTodo.scss";
import { toast } from "react-toastify";
import AddTodo from "./AddTodo";
import Color from "../HOC/Color";
class ListTodo extends Component {
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
    editTodo: {},
  };
  AddNewTodo = (todo) => {
    let updatedListTodo = this.state.listTodos;
    updatedListTodo.push(todo);
    this.setState({
      AddNewTodo: updatedListTodo,
    });
    toast.success("Wow so easy!");
  };
  handleDeleteTodo = (todo) => {
    let currentListTodo = this.state.listTodos;
    currentListTodo = currentListTodo.filter((item) => item.id !== todo.id);
    this.setState({
      listTodos: currentListTodo,
      editTodo: {},
    });
    toast.success("Delete succed");
  };
  handleEditTodo = (todo) => {
    let { editTodo, listTodos } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    //save
    if (isEmptyObj === false && editTodo.todo === todo.id) {
      let listTodosCopy = [...listTodos];
      let objIndex = listTodosCopy.findIndex((item) => item.id === todo.id);
      listTodosCopy[objIndex].title = editTodo.title;
      this.setState({
        listTodos: listTodosCopy,
        editTodo: {},
      });
      toast.success("Edit succed");
      return;
    } else {
      //edit
      this.setState({
        editTodo: {
          todo: todo.id,
          title: todo.title,
        },
      });
    }
  };
  handleOnchangeEditTodo = (event) => {
    let editTodoCopy = { ...this.state.editTodo };
    editTodoCopy.title = event.target.value;
    this.setState({
      editTodo: editTodoCopy,
    });
  };
  handleSaveTodo = () => {
    this.setState({
      editTodo: {},
    });
  };
  render() {
    let { listTodos, editTodo } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    return (
      <>
        <p>Simple ToDo App</p>
        <div className="list-todo-container">
          <AddTodo AddNewTodo={this.AddNewTodo} />
          <div className="list-todo-content">
            {listTodos &&
              listTodos.length > 0 &&
              listTodos.map((item, index) => {
                return (
                  <div className="todo-child" key={item.id}>
                    {isEmptyObj === true ? (
                      <span>
                        {index + 1} - {item.title}
                      </span>
                    ) : (
                      <>
                        {editTodo.todo === item.id ? (
                          <span>
                            {index + 1} -{" "}
                            <input
                              value={editTodo.title}
                              onChange={(event) =>
                                this.handleOnchangeEditTodo(event)
                              }
                            />
                          </span>
                        ) : (
                          <span>
                            {index + 1} - {item.title}
                          </span>
                        )}
                      </>
                    )}
                    <button
                      className="edit"
                      onClick={() => this.handleEditTodo(item)}
                    >
                      {isEmptyObj === false && editTodo.todo === item.id
                        ? "Save"
                        : "Edit"}
                    </button>
                    <button
                      className="delete"
                      onClick={() => this.handleDeleteTodo(item)}
                    >
                      Delete
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </>
    );
  }
}
export default Color(ListTodo);
