import React, { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
        };
        this.addTodo = this.addTodo.bind(this);
    }

    addTodo(newTodo) {
        this.setState({ todos: [...this.state.todos, newTodo] });
    }

    render() {
        return (
            <div className="TodoList">
                <h1>TodoList goes here</h1>
                {this.state.todos.map(t => (
                    <Todo desc={t.desc} key={t.id} id={t.id} />
                ))}
                <NewTodoForm addTodo={this.addTodo} />
            </div>
        );
    }
}

export default TodoList;