import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";

const styles = {
	Todo: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#dddddd",
		borderRadius: "0.5em",
		color: "#121212",
		padding: "0.25em 0.5em",
		marginBottom: "5px",
		"& p": {
			width: "22.5em",
			textAlign: "left",
			fontSize: "24px",
			margin: "0",
			marginRight: "0.25em",
		},
		"& button": {
			padding: "4px 10px",
			color: "#eeeeee",
			border: "none",
			borderRadius: "0.5em",
			fontSize: "1.25em",
		},
	},
	todoInput: {
		width: "22.5em",
		border: "none",
		borderBottom: "1px solid black",
		backgroundColor: "#dddddd",
		fontSize: "24px",
		outline: "none",
	},
	done: {
		backgroundColor: "#03dac6",
		marginRight: "0.25em",
	},
	delete: {
		backgroundColor: "#cf6679",
	},
};

class Todo extends Component {
	constructor(props) {
		super(props);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleToggle = this.handleToggle.bind(this);
		this.toggleEdit = this.toggleEdit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleDelete() {
		this.props.removeTodo(this.props.id);
	}

	handleToggle() {
		this.props.toggleTodo(this.props.id);
	}

	toggleEdit() {
		this.props.toggleEditTodo(this.props.id);
	}

	handleChange(event) {
		this.props.editTodo(this.props.id, event.target.value);
	}

	render() {
		const { classes, desc, isEditing } = this.props;

		let doneStyle;
		if (this.props.done) {
			doneStyle = {
				textDecoration: "line-through",
				fontStyle: "italic",
				color: "#999999",
			};
		}
		return (
			<div className={classes.Todo}>
				{isEditing ? (
					<input
						type="text"
						value={desc}
						onChange={this.handleChange}
						onBlur={this.toggleEdit}
						className={classes.todoInput}
						autoFocus
					></input>
				) : (
					<p style={doneStyle} onDoubleClick={this.toggleEdit}>
						{desc}
					</p>
				)}

				<button className={classes.done} onClick={this.handleToggle}>
					<i class="fas fa-check"></i>
				</button>
				<button className={classes.delete} onClick={this.handleDelete}>
					<i class="fas fa-trash"></i>
				</button>
			</div>
		);
	}
}

export default withStyles(styles)(Todo);
