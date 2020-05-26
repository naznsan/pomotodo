import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import Navbar from "./navbar/Navbar";
import Pomodoro from "./pomodoro/Pomodoro";
import TodoList from "./todoList/TodoList";
import Settings from "./navbar/Settings";
import "@fortawesome/fontawesome-free/css/all.css";

const styles = {
	PomoTodo: {
		height: "100%",
		borderRadius: "0.25em",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		backgroundColor: "#121212",
		padding: "0 0.5em",
	},
};

class PomoTodo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showSettings: true,
			workTime: 45,
			restTime: 15,
			savedTodos: [],
		};
		this.toggleSettings = this.toggleSettings.bind(this);
		this.saveTodos = this.saveTodos.bind(this);
		this.changeWorkTime = this.changeWorkTime.bind(this);
		this.changeRestTime = this.changeRestTime.bind(this);
	}

	toggleSettings() {
		this.setState({
			showSettings: !this.state.showSettings,
		});
	}

	saveTodos(todos) {
		this.setState({
			savedTodos: todos,
		});
	}

	changeWorkTime(sign) {
		if (sign === "plus") {
			this.setState({ workTime: this.state.workTime + 1 });
		} else if (sign === "minus") {
			if (this.state.workTime > 0)
				this.setState({ workTime: this.state.workTime - 1 });
		}
	}

	changeRestTime(sign) {
		if (sign === "plus") {
			this.setState({ restTime: this.state.restTime + 1 });
		} else if (sign === "minus") {
			if (this.state.restTime > 0)
				this.setState({ restTime: this.state.restTime - 1 });
		}
	}

	render() {
		const { classes } = this.props;
		const { showSettings, savedTodos, workTime, restTime } = this.state;

		return (
			<div className={classes.PomoTodo}>
				<Navbar
					toggleSettings={this.toggleSettings}
					showSettings={showSettings}
				/>
				{showSettings ? (
					<Settings
						workTime={workTime}
						restTime={restTime}
						changeWorkTime={this.changeWorkTime}
						changeRestTime={this.changeRestTime}
					/>
				) : (
					<React.Fragment>
						<Pomodoro />
						<TodoList
							savedTodos={savedTodos}
							saveTodos={this.saveTodos}
						/>
					</React.Fragment>
				)}
			</div>
		);
	}
}

export default withStyles(styles)(PomoTodo);
