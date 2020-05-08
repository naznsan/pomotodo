import React, { Component } from "react";

class PomodoroClock extends Component {
    static defaultProps = {
        minutes: 45,
        seconds: 0,
        isPaused: true,
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="PomodoroClock">
                <h2>
                    {this.props.minutes} : {this.props.seconds}
                </h2>
            </div>
        );
    }
}

export default PomodoroClock;
