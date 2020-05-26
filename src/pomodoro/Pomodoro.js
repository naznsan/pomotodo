import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import PomodoroClock from "./PomodoroClock";
import PomodoroControls from "./PomodoroControls";

const styles = {
	Pomodoro: {
		width: "100%",
		height: "15em",
		color: "#eeeeee",
		backgroundColor: "#353535",
		borderRadius: "0.5em",
	},
};

class Pomodoro extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isPaused: true,
			currMinutes: this.props.workTime,
			currSeconds: 0,
		};
		this.changeTime = this.changeTime.bind(this);
		this.togglePlay = this.togglePlay.bind(this);
	}

	changeTime(newTime) {
		// Setting custom time requires work still
		// Can't get new set time into PomodoroClock
		// as PomodoroClock just keeps the old time and only updates initial time
		this.setState({
			workTime: newTime.workTime,
			restTime: newTime.restTime,
			isPaused: true,
			changed: true,
		});
	}

	togglePlay() {
		const newState = { ...this.state, isPaused: !this.state.isPaused };
		this.setState(newState);
	}

	countdown() {
		setInterval(() => {
			if (this.state.isPaused) {
				return;
			}
			let newState;
			if (this.state.currSeconds === 0) {
				newState = {
					currMinutes: this.state.currMinutes - 1,
					currSeconds: 59,
				};
			} else {
				newState = { currSeconds: this.state.currSeconds - 1 };
			}
			this.setState(newState);
		}, 1000);
	}

	render() {
		const { classes } = this.props;
		const { currMinutes, currSeconds } = this.state;

		return (
			<div className={classes.Pomodoro}>
				<PomodoroClock
					currMinutes={currMinutes}
					currSeconds={currSeconds}
				/>
				<PomodoroControls
					changeTime={this.changeTime}
					workTime={this.state.workTime}
					restTime={this.state.restTime}
					togglePlay={this.togglePlay}
					isPaused={this.state.isPaused}
				/>
			</div>
		);
	}

	componentDidMount() {
		this.countdown();
	}
}

export default withStyles(styles)(Pomodoro);
