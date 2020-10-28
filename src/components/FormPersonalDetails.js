import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Toolbar, IconButton, Typography } from '@material-ui/core';

export class FormPersonalDetails extends Component {
	continue = (e) => {
		e.preventDefault();
		this.props.nextStep();
	};
	back = (e) => {
		e.preventDefault();
		this.props.prevStep();
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
							Enter Personal Details
						</Typography>
					</Toolbar>
				</AppBar>
				<br />
				<br />
				<TextField
					label='Enter Occupation'
					onChange={handleChange('occupation')}
					defaultValue={values.occupation}
				/>
				<br />
				<br />
				<TextField
					label='Enter Your City'
					onChange={handleChange('city')}
					defaultValue={values.city}
				/>
				<br />
				<br />
				<TextField
					label='Enter Your Bio'
					onChange={handleChange('bio')}
					defaultValue={values.bio}
				/>
				<br />
				<br />
				<Button
					style={styles.buttonContinue}
					variant='contained'
					color='primary'
					onClick={this.continue}
				>
					Continue
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

export default FormPersonalDetails;
