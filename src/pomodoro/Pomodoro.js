import React, { Component } from "react";
import PomodoroClock from "./PomodoroClock";
import PomodoroControls from "./PomodoroControls";
import "./Pomodoro.css";

class Pomodoro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            workTime: 45,
            restTime: 15,
            isPaused: true,
        };
        this.changeTime = this.changeTime.bind(this);
    }

    changeTime(newTime) {
        this.setState({
            workTime: newTime.workTime,
            restTime: newTime.restTime,
            isPaused: true,
        });
    }

    render() {
        return (
            <div className="Pomodoro">
                <h1>Pomodoro goes here</h1>
                <PomodoroClock
                    workTime={this.state.workTime}
                    restTime={this.state.restTime}
                    isPaused={this.state.isPaused}
                />
                <PomodoroControls
                    changeTime={this.changeTime}
                    workTime={this.state.workTime}
                    restTime={this.state.restTime}
                />
            </div>
        );
    }
}

export default Pomodoro;
