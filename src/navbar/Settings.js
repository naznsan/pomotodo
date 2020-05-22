import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import { Checkbox } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";

const styles = {
	Settings: {
		height: "100%",
		width: "100%",
		color: "white",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
	settingsGroup: {
		width: "80%",
		display: "flex",
		justifyContent: "space-between",
	},
	checkbox: {
		color: "white",
	},
	githubIcon: {
		padding: "9px",
		color: "white",
	},
};

class Settings extends Component {
	render() {
		const { classes } = this.props;

		return (
			<div className={classes.Settings}>
				{/* <div className={classes.settingsGroup}>
					<p>Timer Sounds</p>
					<Checkbox className={classes.checkbox} color="primary" />
				</div>
				<div className={classes.settingsGroup}>
					<p>Save Todos to Browser</p>
					<Checkbox className={classes.checkbox} color="primary" />
				</div> */}
				<div className={classes.settingsGroup}>
					<p>Github Repo</p>
					<a href="https://github.com/naznsan/pomotodo">
						<GitHubIcon size="med" className={classes.githubIcon} />
					</a>
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(Settings);
