import Link from 'next/link';
import styled from 'styled-components';
import PositionVerticallyHorizontallyCentered from "./Styling/VerticallyHorizontallyCentered";
import {StyledInputForm} from "./Styling/Form";
import {ResponsiveGridHideFooter} from "./Styling/Responsive_Grids";
import {StyledButton, ButtonRow} from "./Styling/Button";
import Router from 'next/router';
import Error from "../components/ErrorMessage";
import React, { Component } from "react";
import { Provider } from "./Context";
import { Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';
import {CURRENT_USER_QUERY} from "./Patron";
import PropTypes from 'prop-types';

const PASSWORD_RESET_MUTATION = gql`
  mutation PASSWORD_RESET_MUTATION($resetToken: String!, $password: String!, $confirmPassword: String!) {
    resetPassword(resetToken: $resetToken, password: $password, confirmPassword: $confirmPassword) {
      id
      email
      first_name
    }
  }
`;

const SigninGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-row-gap: 0;
	grid-column-gap:0;
	${PositionVerticallyHorizontallyCentered}
`;

// https://stackoverflow.com/questions/7700051/make-overlapping-div-not-clickable-so-that-content-below-can-be-accessed
const PasswordResetButton = styled(StyledButton)`
	margin-top:${props => props.theme.max_component_vertical_distance};
	margin-bottom:${props => props.theme.max_component_vertical_distance};
	
	pointer-events: ${props => (props.enable ? 'auto' : 'none')};
	background-color: ${props => (props.enable ? props.theme.ui_actionable_red : props.theme.ui_actionable_lightgrey)};

	&:hover {
    background-color: ${props => (props.enable ? props.theme.ui_actionable_selected_red : props.theme.ui_actionable_selected_lightgrey)} ;
  }

`;

const PasswordResetInputForm = styled(StyledInputForm)`
	grid-template-columns: 1fr;
	/* ${PositionVerticallyHorizontallyCentered} */
	${ResponsiveGridHideFooter}
	margin-top: 20px;
	
	input[type="text"]  {
		width: 180px;
	}
	input[type="password"] {
		width: 180px;
	}
	.input_wrapper {
    margin: auto;
    margin-top: ${props => props.theme.upper_mid_component_vertical_distance};
  }
	.label {
    font-size: 11px; /* ${props => props.theme.font_size_content} */
    font-weight: bold;
  }	
	.centered_text {
		margin: auto;
		margin-top: ${props => props.theme.min_component_vertical_distance};
		small {
			cursor: pointer;
		}
		.success {
			color: ${props => props.theme.ui_actionable_green};
		}
	}

`;

class PasswordReset extends Component {
	static propTypes = {
    resetToken: PropTypes.string.isRequired,
  };
  state = {
		password: "",
		confirmPassword:"",
		password_reset_button_enabled: false,
  };
  componentDidMount() {
	}
	componentWillUnmount() {
		//localStorage.setItem("delivery_address", this.state.delivery_address);
	}
  
  handleTextInputChange = (e) => {
		const { value, name } = e.target;
		const re = /^[0-9\b]+$/;
		if (name !== "phone_number") {
			this.setState({ [name]: value });
		}
		//only allows  numeric input for phone input field
		else {
			if (value === '' || re.test(value)) {
				this.setState({ [name]: value });
			 }
		}
    console.log("state is currently " + this.state[name]);
		console.log("changing state to value " + e.target.value);
  };

  handleRadioButton = (e) => {
    console.log("togglin state to value " + e.target.value);
    const { value, name } = e.target;
    this.setState({ [name]: value });
	};
	
  render() {
		var password_reset_button_enabled = this.state.password.length > 0 && this.state.confirmPassword.length > 0; 
		
    return (
			<Mutation 
				mutation={PASSWORD_RESET_MUTATION} 
				variables={{
					//props passed from password_reset.js under /page
          resetToken: this.props.resetToken,
          password: this.state.password,
          confirmPassword: this.state.confirmPassword,
        }}
				//sign in user upon successful password reset
        refetchQueries={[{ query: CURRENT_USER_QUERY }]} 
			>
			{
				(resetPasswordRequest, {error, loading, called}) => (
					
				<PasswordResetInputForm>
					<div className="form_title">
						Enter Your New Password
					</div>

					<Error error={error}/> 
					{!error && !loading && called && 					
						<div className="centered_text">
							<div className="success">
								Done! Welcome back!
							</div>
						</div>
					}

					<div className="input_wrapper">
						<div className="label">
						NEW PASSWORD
						</div>
						<input 
							type="password" name="password" 
							placeholder=""
							value={this.state.password} 
							onChange={this.handleTextInputChange} />
					</div>

					<div className="input_wrapper">
						<div className="label">
						RE-ENTER NEW PASSWORD
						</div>
						<input 
							type="password" name="confirmPassword" 
							placeholder=""
							value={this.state.confirmPassword} 
							onChange={this.handleTextInputChange} />
					</div>

	
					<ButtonRow>
						<PasswordResetButton
							enable={password_reset_button_enabled}
							onClick={ async e => {
								e.preventDefault();
								const res = await resetPasswordRequest();
								//Router.push({ pathname: '/' });
								console.log("new password is successfully created due to a password reset request");
							}}
						>
							Reset Password
						</PasswordResetButton>
					</ButtonRow>
				</PasswordResetInputForm>

				)
			}
			</Mutation>
    );
  }
}
export default PasswordReset;
