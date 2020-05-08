import React, { Component } from "react";

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

    render() {
        return (
            <div className="PomodoroControls">
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
                        <button>Play/Pause</button>
                        <button onClick={this.toggleEdit}>Edit</button>
                    </div>
                )}
            </div>
        );
    }
}

export default PomodoroControls;
