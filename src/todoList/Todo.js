import React, { Component } from "react";
import "./Todo.css";

class Todo extends Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(event) {
        this.props.removeTodo(this.props.id);
    }

    render() {
        return (
            <div className="Todo">
                <p>{this.props.desc}</p>
                <button onClick={this.handleDelete}>Delete</button>
            </div>
        );
    }
}

export default Todo;
