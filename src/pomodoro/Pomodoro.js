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
			isWorking: true,
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

	toggleWorkRest() {
		this.setState({
			isWorking: !this.state.isWorking,
			currMinutes: this.state.isWorking
				? this.props.restTime
				: this.props.workTime,
			currSeconds: 0,
		});
	}

	render() {
		const { classes } = this.props;
		const { isWorking, currMinutes, currSeconds } = this.state;

		return (
			<div className={classes.Pomodoro}>
				<PomodoroClock
					isWorking={isWorking}
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
		this.countdown = setInterval(() => {
			if (this.state.currMinutes === 0 && this.state.currSeconds === 0) {
				this.setState({ isPaused: true });
				this.toggleWorkRest();
			}
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

	componentWillUnmount() {
		clearInterval(this.countdown);
	}
}

export default withStyles(styles)(Pomodoro);
