import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";

const styles = {
	PomodoroControls: {
		height: "2.5em",
		"& button": {
			fontSize: "1.75em",
			border: "none",
			color: "#eeeeee",
			backgroundColor: "#353535",
		},
	},
};

class PomodoroControls extends Component {
	constructor(props) {
		super(props);
		this.state = {
			workTime: 45,
			restTime: 15,
			isEditing: false,
		};
		this.toggleEdit = this.toggleEdit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handlePlay = this.handlePlay.bind(this);
	}

	toggleEdit(event) {
		event.preventDefault();
		this.props.changeTime(this.state);
		this.setState({ ...this.state, isEditing: !this.state.isEditing });
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: parseInt(event.target.value),
		});
	}

	handlePlay() {
		this.props.togglePlay();
	}

	render() {
		const { classes } = this.props;
		return (
			<div className={classes.PomodoroControls}>
				{this.state.isEditing ? (
					<form>
						<div>
							<label htmlFor="workTime">Work: </label>
							<input
								type="number"
								name="workTime"
								value={this.state.workTime}
								onChange={this.handleChange}
							></input>
						</div>
						<div>
							<label htmlFor="restTime">Rest: </label>
							<input
								type="number"
								name="restTime"
								value={this.state.restTime}
								onChange={this.handleChange}
							></input>
						</div>
						<button onClick={this.toggleEdit}>Submit</button>
					</form>
				) : (
					<div>
						<button onClick={this.handlePlay}>
							{this.props.isPaused ? (
								<i className="fas fa-play"></i>
							) : (
								<i className="fas fa-pause"></i>
							)}
						</button>
						{/* <button onClick={this.toggleEdit}>Edit</button> */}
					</div>
				)}
			</div>
		);
	}
}

export default withStyles(styles)(PomodoroControls);
