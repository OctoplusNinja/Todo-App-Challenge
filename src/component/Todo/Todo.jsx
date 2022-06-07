import React, { Component } from "react";
import "./Todo.css";
import { BiTrash } from "react-icons/bi";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.toggleCompleted = this.toggleCompleted.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }
  deleteTodo(e) {
    this.props.deleteTodo(this.props.todo.id);
  }
  toggleCompleted(e) {
    this.props.toggleStatus(this.props.todo.id);
  }
  render() {
    return (
      <li className={this.props.todo.completed ? "Todo-Completed" : ""}>
        <div className="todo-section">
          <input
            className="checkbox"
            type="checkbox"
            name=""
            id=""
            checked={this.props.todo.completed}
            onChange={this.toggleCompleted}
          />
          <span>{this.props.todo.task}</span>
        </div>
        <div onClick={this.deleteTodo} className="delete-section">
          {this.props.tab === "completed" ? <BiTrash /> : ""}
        </div>
      </li>
    );
  }
}

export default Todo;
