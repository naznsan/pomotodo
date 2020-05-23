import React, { Component } from "react";
import { v4 as uuid } from "uuid";
import { withStyles } from "@material-ui/styles";

const styles = {
	NewTodoForm: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		justifySelf: "flex - end",
		height: "3.5em",
		"& input": {
			fontSize: "1.5em",
			width: "25rem",
			height: "2rem",
			margin: "0.25em auto",
			marginRight: "0.25em",
			border: "none",
			borderBottom: "2px solid #eeeeee",
			paddingLeft: "10px",
			backgroundColor: "#121212",
			color: "#eeeeee",
			outline: "none",
		},
		"& button": {
			height: "3em",
			width: "5em",
			border: "none",
			backgroundColor: "#121212",
			color: "#eeeeee",
			outline: "none",
		},
	},
};

class NewTodoForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			desc: "",
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value,
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		const newTodo = {
			desc: this.state.desc,
			id: uuid(),
			done: false,
			isEditing: false,
		};
		this.props.addTodo(newTodo);
		this.setState({ desc: "" });
	}

	render() {
		const { classes } = this.props;
		return (
			<form className={classes.NewTodoForm} onSubmit={this.handleSubmit}>
				<div>
					<label htmlFor="desc"></label>
					<input
						id="desc"
						type="text"
						onChange={this.handleChange}
						name="desc"
						value={this.state.desc}
						placeholder="Add New Todo"
					></input>
				</div>
				<button>
					<i className="fas fa-plus fa-2x"></i>
				</button>
			</form>
		);
	}
}

export default withStyles(styles)(NewTodoForm);
