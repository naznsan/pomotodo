import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

const styles = {
    TodoList: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        width: "100%",
        flexGrow: "1",
        paddingTop: "0.5em",
    },
    todos: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        flexGrow: "1",
        color: "#dddddd",
    },
};

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
        };
        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.toggleTodo = this.toggleTodo.bind(this);
    }

    addTodo(newTodo) {
        this.setState({ todos: [...this.state.todos, newTodo] });
    }

    removeTodo(delTodoId) {
        this.setState({
            todos: this.state.todos.filter(t => t.id !== delTodoId),
        });
    }

    toggleTodo(doneTodoId) {
        let newTodos = this.state.todos.map(todo => {
            if (todo.id === doneTodoId) {
                return { ...todo, done: !todo.done };
            }
            return todo;
        });
        this.setState({ todos: newTodos });
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.TodoList}>
                <div className={classes.todos}>
                    {this.state.todos.length === 0 ? (
                        <h3>What would you like to get done today?</h3>
                    ) : null}
                    {this.state.todos.map(t => (
                        <Todo
                            desc={t.desc}
                            key={t.id}
                            id={t.id}
                            done={t.done}
                            removeTodo={this.removeTodo}
                            toggleTodo={this.toggleTodo}
                        />
                    ))}
                </div>
                <NewTodoForm addTodo={this.addTodo} />
            </div>
        );
    }
}

export default withStyles(styles)(TodoList);
