import React, { Component } from "react";
import Pomodoro from "./pomodoro/Pomodoro";
import TodoList from "./todoList/TodoList";
import "./PomoTodo.css";

class PomoTodo extends Component {
    render() {
        return (
            <div className="PomoTodo">
                <h1>Welcome to PomoTodo</h1>
                <Pomodoro />
                <TodoList />
            </div>
        );
    }
}

export default PomoTodo;
