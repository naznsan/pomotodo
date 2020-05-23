import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import SettingsIcon from "@material-ui/icons/Settings";
import CloseIcon from "@material-ui/icons/Close";

const styles = {
	Navbar: {
		width: "95%",
		height: "4em",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		color: "#eeeeee",
	},
	Icon: {
		color: "#bbbbbb",
		fontSize: "1.5em",
		cursor: "pointer",
	},
};

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.props.toggleSettings();
	}

	render() {
		const { classes, showSettings } = this.props;

		return (
			<div className={classes.Navbar}>
				<h1>PomoTodo</h1>
				{showSettings ? (
					<CloseIcon
						className={classes.Icon}
						fontSize="small"
						onClick={this.handleClick}
					/>
				) : (
					<SettingsIcon
						className={classes.Icon}
						fontSize="small"
						onClick={this.handleClick}
					/>
				)}
			</div>
		);
	}
}

export default withStyles(styles)(Navbar);
