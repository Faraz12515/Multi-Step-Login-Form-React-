import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Toolbar, IconButton, Typography } from '@material-ui/core';

export class FormUserDetails extends Component {
	continue = (e) => {
		e.preventDefault();
		this.props.nextStep();
	};
	render() {
		const { values, handleChange } = this.props;

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
							Enter User Details
						</Typography>
					</Toolbar>
				</AppBar>
				<br />
				<br />
				<TextField
					label='Enter First Name'
					onChange={handleChange('firstName')}
					defaultValue={values.firstName}
				/>
				<br />
				<br />
				<TextField
					label='Enter Last Name'
					onChange={handleChange('lastName')}
					defaultValue={values.lastName}
				/>
				<br />
				<br />
				<TextField
					label='Enter Your Email'
					onChange={handleChange('email')}
					defaultValue={values.email}
				/>
				<br />
				<br />
				<Button
					style={styles.button}
					variant='contained'
					color='primary'
					onClick={this.continue}
				>
					Continue
				</Button>
			</React.Fragment>
		);
	}
}

const styles = {
	margin: 15,
};

export default FormUserDetails;
