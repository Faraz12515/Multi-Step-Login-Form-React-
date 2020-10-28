import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, IconButton, Typography } from '@material-ui/core';

export class Success extends Component {
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
							Success
						</Typography>
					</Toolbar>
				</AppBar>
				<h1>Thank You For Submission</h1>
				<p>You will get an email with further instructions</p>
			</React.Fragment>
		);
	}
}

const styles = {
	margin: 15,
};

export default Success;
