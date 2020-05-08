import React, { Component } from "react";
import "./Todo.css";

class Todo extends Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleDelete(event) {
        this.props.removeTodo(this.props.id);
    }

    handleToggle(event) {
        this.props.toggleTodo(this.props.id);
    }

    render() {
        let doneStyle;
        if (this.props.done) {
            doneStyle = {
                textDecoration: "line-through",
                fontStyle: "italic",
            };
        }
        return (
            <div className="Todo">
                <p style={doneStyle}>{this.props.desc}</p>
                <button onClick={this.handleToggle}>Done</button>
                <button onClick={this.handleDelete}>Delete</button>
            </div>
        );
    }
}

export default Todo;
