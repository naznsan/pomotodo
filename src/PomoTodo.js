import React, { Component } from "react";
import Pomodoro from "./pomodoro/Pomodoro";
import TodoList from "./todoList/TodoList";
import "./PomoTodo.css";
import "@fortawesome/fontawesome-free/css/all.css";

class PomoTodo extends Component {
    render() {
        return (
            <div className="PomoTodo">
                <div className="PomoTodo-header">
                    <h1>PomoTodo</h1>
                    <a href="https://github.com/naznsan/pomotodo">
                        <i class="far fa-question-circle"></i>
                    </a>
                </div>
                <Pomodoro />
                <TodoList />
            </div>
        );
    }
}

export default PomoTodo;
