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
		height: "200px",
		overflowX: "hidden",
		overflowY: "auto",
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
		this.toggleEditTodo = this.toggleEditTodo.bind(this);
		this.editTodo = this.editTodo.bind(this);
	}

	async addTodo(newTodo) {
		await this.setState({ todos: [...this.state.todos, newTodo] });
		this.props.saveTodos(this.state.todos);
	}

	async removeTodo(delTodoId) {
		await this.setState({
			todos: this.state.todos.filter(t => t.id !== delTodoId),
		});
		this.props.saveTodos(this.state.todos);
	}

	async toggleTodo(doneTodoId) {
		let newTodos = this.state.todos.map(todo => {
			if (todo.id === doneTodoId) {
				return { ...todo, done: !todo.done };
			}
			return todo;
		});
		await this.setState({ todos: newTodos });
		this.props.saveTodos(this.state.todos);
	}

	toggleEditTodo(editTodoId) {
		let newTodos = this.state.todos.map(todo => {
			if (todo.id === editTodoId) {
				return { ...todo, isEditing: !todo.isEditing };
			}
			return todo;
		});
		this.setState({ todos: newTodos });
	}

	async editTodo(editTodoId, newDesc) {
		let newTodos = this.state.todos.map(todo => {
			if (todo.id === editTodoId) {
				return { ...todo, desc: newDesc };
			}
			return todo;
		});
		await this.setState({ todos: newTodos });
		this.props.saveTodos(this.state.todos);
	}

	render() {
		const { classes } = this.props;
		const { todos } = this.state;

		let notDoneTodos = todos.filter(t => !t.done);
		let doneTodos = todos.filter(t => t.done);

		return (
			<div className={classes.TodoList}>
				<div className={classes.todos}>
					{todos.length === 0 ? (
						<h3>What would you like to get done today?</h3>
					) : null}
					{notDoneTodos.map(t => (
						<Todo
							desc={t.desc}
							key={t.id}
							id={t.id}
							done={t.done}
							isEditing={t.isEditing}
							removeTodo={this.removeTodo}
							toggleTodo={this.toggleTodo}
							toggleEditTodo={this.toggleEditTodo}
							editTodo={this.editTodo}
						/>
					))}
					{doneTodos.map(t => (
						<Todo
							desc={t.desc}
							key={t.id}
							id={t.id}
							done={t.done}
							isEditing={t.isEditing}
							removeTodo={this.removeTodo}
							toggleTodo={this.toggleTodo}
							toggleEditTodo={this.toggleEditTodo}
							editTodo={this.editTodo}
						/>
					))}
				</div>
				<NewTodoForm addTodo={this.addTodo} />
			</div>
		);
	}

	componentDidMount() {
		this.setState({
			todos: this.props.savedTodos,
		});
	}

	componentWillUnmount() {
		this.props.saveTodos(this.state.todos);
	}
}

export default withStyles(styles)(TodoList);
