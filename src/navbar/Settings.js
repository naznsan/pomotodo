import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import { Checkbox } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import NumberInput from "./NumberInput";

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
		alignItems: "center",
	},
	checkbox: {
		color: "white",
	},
	githubIcon: {
		padding: "9px",
		color: "white",
	},
	messageText: {
		marginLeft: "5px",
		color: "grey",
		fontSize: "12px",
	},
};

class Settings extends Component {
	render() {
		const {
			classes,
			workTime,
			restTime,
			changeWorkTime,
			changeRestTime,
			sound,
			toggleSound,
			saveLocalStorage,
			toggleSaveLocalStorage,
		} = this.props;

		return (
			<div className={classes.Settings}>
				<div className={classes.settingsGroup}>
					<p>Work Minutes</p>
					<NumberInput value={workTime} changeTime={changeWorkTime} />
				</div>
				<div className={classes.settingsGroup}>
					<p>Rest Minutes</p>
					<NumberInput value={restTime} changeTime={changeRestTime} />
				</div>
				<div className={classes.settingsGroup}>
					<p>
						Timer Sounds{" "}
						<span className={classes.messageText}>coming soon</span>
					</p>
					<Checkbox
						className={classes.checkbox}
						color="primary"
						checked={sound}
						onChange={toggleSound}
					/>
				</div>
				<div className={classes.settingsGroup}>
					<p>
						Save Todos to Browser{" "}
						<span className={classes.messageText}>coming soon</span>
					</p>
					<Checkbox
						className={classes.checkbox}
						color="primary"
						checked={saveLocalStorage}
						onChange={toggleSaveLocalStorage}
					/>
				</div>

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
