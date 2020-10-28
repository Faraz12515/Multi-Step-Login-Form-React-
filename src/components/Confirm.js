import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { Toolbar, IconButton, Typography } from '@material-ui/core';

export class FormUserDetails extends Component {
	continue = (e) => {
		e.preventDefault();
		// PROCESS FORM //
		this.props.nextStep();
	};
	back = (e) => {
		e.preventDefault();
		this.props.prevStep();
	};
	render() {
		const {
			values: { firstName, lastName, email, occupation, city, bio },
		} = this.props;

		return (
			<React.Fragment>
				<AppBar position='static'>
					<Toolbar variant='dense'>
						<IconButton
							edge='start'
							color='inherit'
							aria-label='menu'
						></IconButton>
						<Typography variant='h6' color='inherit'>
							Confirm User Data
						</Typography>
					</Toolbar>
				</AppBar>
				<br />
				<br />
				<List>
					<ListItem>
						<ListItemText inset primary='First Name' secondary={firstName} />
					</ListItem>
					<ListItem>
						<ListItemText inset primary='Last Name' secondary={lastName} />
					</ListItem>
					<ListItem>
						<ListItemText inset primary='Email' secondary={email} />
					</ListItem>
					<ListItem>
						<ListItemText inset primary='Occupation' secondary={occupation} />
					</ListItem>
					<ListItem>
						<ListItemText inset primary='City' secondary={city} />
					</ListItem>
					<ListItem>
						<ListItemText inset primary='Bio' secondary={bio} />
					</ListItem>
				</List>

				<Button
					style={styles.buttonContinue}
					variant='contained'
					color='primary'
					onClick={this.continue}
				>
					Confirm & Continue
				</Button>
				<Button
					style={styles.buttonBack}
					variant='contained'
					color='secondary'
					onClick={this.back}
				>
					Back
				</Button>
			</React.Fragment>
		);
	}
}

const styles = {
	buttonContinue: {
		margin: 15,
	},
};

export default FormUserDetails;
