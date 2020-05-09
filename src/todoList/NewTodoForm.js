import React, { Component } from "react";
import { v4 as uuid } from "uuid";
import "./NewTodoForm.css";

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
        const newTodo = { desc: this.state.desc, id: uuid(), done: false };
        this.props.addTodo(newTodo);
        this.setState({ desc: "" });
    }

    render() {
        return (
            <form className="NewTodoForm" onSubmit={this.handleSubmit}>
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
                    <i class="fas fa-plus fa-2x"></i>
                </button>
            </form>
        );
    }
}

export default NewTodoForm;
