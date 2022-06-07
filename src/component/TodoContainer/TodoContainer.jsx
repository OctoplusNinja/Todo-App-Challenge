import React, { Component } from "react";
import StatusBar from "../StatusBar/StatusBar";
import InputContainer from "../InputContainer/InputContainer";
import TodoList from "../TodoList/TodoList";
import { v4 as uuidv4 } from "uuid";

class TodoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "all",
      todos: [],
    };
    this.changeStatus = this.changeStatus.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.toggleStatus = this.toggleStatus.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.deleteAllCompleted = this.deleteAllCompleted.bind(this);
  }
  componentDidMount() {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length !== 0) {
      this.setState({ todos });
    }
  }
  changeStatus(status) {
    this.setState({ status });
  }
  addTodo(todo) {
    let newTodo = { task: todo, completed: false, id: uuidv4() };
    this.setState(
      {
        todos: [...this.state.todos, newTodo],
      },
      () => {
        localStorage.setItem("todos", JSON.stringify(this.state.todos));
      }
    );
  }
  deleteTodo(id) {
    this.setState(
      { todos: this.state.todos.filter((todo) => todo.id !== id) },
      () => {
        localStorage.setItem("todos", JSON.stringify(this.state.todos));
      }
    );
  }
  deleteAllCompleted() {
    const updatedTodos = this.state.todos.filter((todo) => {
      return !todo.completed;
    });
    this.setState({ todos: updatedTodos }, () => {
      localStorage.setItem("todos", JSON.stringify(this.state.todos));
    });
  }
  toggleStatus(id) {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos }, () => {
      localStorage.setItem("todos", JSON.stringify(this.state.todos));
    });
  }
  render() {
    return (
      <>
        <StatusBar
          changeStatus={this.changeStatus}
          status={this.state.status}
        />

        {this.state.status !== "completed" ? (
          <InputContainer addTodo={this.addTodo} />
        ) : (
          ""
        )}

        <TodoList
          deleteTodo={this.deleteTodo}
          deleteAllCompleted={this.deleteAllCompleted}
          toggleStatus={this.toggleStatus}
          todolist={this.state}
        />
      </>
    );
  }
}

export default TodoContainer;
