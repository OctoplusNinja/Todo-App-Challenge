import React, { Component } from "react";
import "./DeleteAllCompleted.css";
import { BiTrash } from "react-icons/bi";

class DeleteAllCompleted extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.deleteAll();
  }
  render() {
    return (
      <div className="Delete-Button-Container">
        <button onClick={this.handleClick}>
          <BiTrash /> delete all
        </button>
      </div>
    );
  }
}

export default DeleteAllCompleted;
