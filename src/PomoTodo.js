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
			showSettings: false,
		};
		this.toggleSettings = this.toggleSettings.bind(this);
	}

	toggleSettings() {
		this.setState({
			showSettings: !this.state.showSettings,
		});
	}

	render() {
		const { classes } = this.props;
		const { showSettings } = this.state;

		return (
			<div className={classes.PomoTodo}>
				<Navbar
					toggleSettings={this.toggleSettings}
					showSettings={showSettings}
				/>
				{showSettings ? (
					<Settings />
				) : (
					<React.Fragment>
						<Pomodoro />
						<TodoList />
					</React.Fragment>
				)}
			</div>
		);
	}
}

export default withStyles(styles)(PomoTodo);
