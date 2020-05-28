import React, { Component } from "react";
import PomoTodo from "./PomoTodo";
import { withStyles } from "@material-ui/styles";

const styles = {
	LoadingWrapper: {
		width: "100%",
		height: "100%",
	},
};

class LoadingWrapper extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
			workTime: 0,
			restTime: 0,
			saveLocalStorage: true,
		};
		this.loadData = this.loadData.bind(this);
	}

	toggleLoading() {
		this.setState({
			isLoading: !this.state.isLoading,
		});
	}

	loadData() {
		const saveLocalStorage = window.localStorage.getItem(
			"saveLocalStorage"
		);

		const savedTimes = window.localStorage.getItem("savedTimes") || "45 15";
		const workTime = parseInt(savedTimes.split(" ")[0]);
		const restTime = parseInt(savedTimes.split(" ")[1]);

		this.setState({
			saveLocalStorage: saveLocalStorage === "true",
			workTime: workTime,
			restTime: restTime,
			isLoading: false,
		});

		console.log("loaded");
	}

	render() {
		const { isLoading, saveLocalStorage, workTime, restTime } = this.state;
		const { classes } = this.props;

		return (
			<div className={classes.LoadingWrapper}>
				{isLoading ? (
					<h1>Loading...</h1>
				) : (
					<PomoTodo
						isLoading={isLoading}
						saveLocalStorage={saveLocalStorage}
						workTime={workTime}
						restTime={restTime}
					/>
				)}
			</div>
		);
	}

	componentDidMount() {
		this.loadData();
	}
}

export default withStyles(styles)(LoadingWrapper);
