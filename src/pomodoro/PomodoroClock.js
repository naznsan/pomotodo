import React, { Component } from "react";
import "./PomodoroClock.css";

class PomodoroClock extends Component {
    static defaultProps = {
        initialMinutes: 45,
        seconds: 0,
        isPaused: true,
    };

    constructor(props) {
        super(props);
        this.state = {
            minutes: this.props.initialMinutes,
            seconds: 0,
        };
        this.countdown = this.countdown.bind(this);
    }

    countdown() {
        setInterval(() => {
            if (this.props.isPaused) {
                return;
            }
            let newState;
            if (this.state.seconds === 0) {
                newState = { minutes: this.state.minutes - 1, seconds: 59 };
            } else {
                newState = { seconds: this.state.seconds - 1 };
            }
            this.setState(newState);
        }, 1000);
    }

    render() {
        let parsedSeconds = this.state.seconds;
        if (parsedSeconds < 10) {
            parsedSeconds = "0" + this.state.seconds.toString(10);
        }
        return (
            <div className="PomodoroClock">
                <h2 className="PomodoroClock-clock">
                    {this.state.minutes} : {parsedSeconds}
                </h2>
            </div>
        );
    }

    componentDidMount() {
        this.countdown();
    }

    componentDidUpdate() {
        console.log("Updated");
    }
}

export default PomodoroClock;
