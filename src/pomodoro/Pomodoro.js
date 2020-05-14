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
            workTime: 45,
            restTime: 15,
            isPaused: true,
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

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.Pomodoro}>
                <PomodoroClock
                    initialMinutes={this.state.workTime}
                    isPaused={this.state.isPaused}
                    changed={false}
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
}

export default withStyles(styles)(Pomodoro);
