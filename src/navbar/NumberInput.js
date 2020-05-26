import React, { Component } from "react";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { withStyles } from "@material-ui/styles";

const styles = {
	NumberInput: {
		width: "6em",
		height: "2.5em",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	numberDisplay: {},
	minusButton: {
		marginLeft: "3px",
		marginRight: "auto",
	},
	plusButton: {
		marginRight: "3px",
		marginLeft: "auto",
	},
};

class NumberInput extends Component {
	constructor(props) {
		super(props);

		this.handleAdd = this.handleAdd.bind(this);
		this.handleSubtract = this.handleSubtract.bind(this);
		this.handleScroll = this.handleScroll.bind(this);
	}

	handleAdd() {
		this.props.changeTime("plus");
	}

	handleSubtract() {
		this.props.changeTime("minus");
	}

	handleScroll(event) {
		if (event.deltaY < 0) this.handleAdd();
		else this.handleSubtract();
	}

	render() {
		const { classes, value } = this.props;

		return (
			<div className={classes.NumberInput} onWheel={this.handleScroll}>
				<RemoveIcon
					className={classes.minusButton}
					onClick={this.handleSubtract}
				/>
				<p className={classes.numberDisplay}>{value}</p>
				<AddIcon
					className={classes.plusButton}
					onClick={this.handleAdd}
				/>
			</div>
		);
	}
}

export default withStyles(styles)(NumberInput);
