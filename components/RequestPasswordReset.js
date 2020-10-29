import Link from 'next/link';
import styled from 'styled-components';
import PositionVerticallyHorizontallyCentered from "./Styling/VerticallyHorizontallyCentered";
import StyledInputForm from "./Styling/Form";
import {ResponsiveGridHideFooter} from "./Styling/Responsive_Grids";
import {StyledButton, ButtonRow} from "./Styling/Button";
import Router from 'next/router';


import Error from "../components/ErrorMessage";

import React, { Component } from "react";
import { Provider } from "./Context";

import { Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';
import {CURRENT_USER_QUERY} from "./Patron";

const REQUEST_PASSWORD_RESET_MUTATION = gql`
	mutation REQUEST_PASSWORD_RESET_MUTATION ($email: String) {
		requestPasswordReset(email: $email) {
			message
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
const RequestPasswordResetButton = styled(StyledButton)`
	margin-top:${props => props.theme.max_component_vertical_distance};
	margin-bottom:${props => props.theme.max_component_vertical_distance};
	
	pointer-events: ${props => (props.enable ? 'auto' : 'none')};
	background-color: ${props => (props.enable ? props.theme.ui_actionable_red : props.theme.ui_actionable_lightgrey)};

	&:hover {
    background-color: ${props => (props.enable ? props.theme.ui_actionable_selected_red : props.theme.ui_actionable_selected_lightgrey)} ;
  }

`;

const RequestPasswordResetInputForm = styled(StyledInputForm)`
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

class RequestPasswordReset extends Component {
  // static propTypes = {
  //   children: PropTypes.instanceOf(Array).isRequired,
  // }
  state = {
		email:"",
		password_reset_button_enabled: false,
		/* login_attempts: 0,
		login_button_disabled: true */
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
		var password_reset_button_enabled = this.state.email.length > 0; 
		
    return (
			<Mutation 
				mutation={REQUEST_PASSWORD_RESET_MUTATION} 
				variables={this.state} 
				//refetchQueries={[{ query : CURRENT_USER_QUERY}]} 
			>
			{
				(resetPasswordRequest, {error, loading, called}) => (
					
				<RequestPasswordResetInputForm>
					<div className="form_title">
					Password Reset
					</div>

					<Error error={error}/> 
					{!error && !loading && called && 					
						<div className="centered_text">
							<div className="success">
								Your Password is resetted. Check your email!
							</div>
						</div>
					}

					<div className="input_wrapper">
						<div className="label">
						EMAIL
						</div>
						<input 
							type="text" name="email" 
							placeholder=""
							value={this.state.email} 
							onChange={this.handleTextInputChange} />
					</div>

	
					<ButtonRow>
						<RequestPasswordResetButton
							enable={password_reset_button_enabled}
							onClick={ async e => {
								e.preventDefault();
								const res = await resetPasswordRequest();
								//Router.push({ pathname: '/' });
								console.log("sending reset token to user email");
							}}
						>
							Reset Password
						</RequestPasswordResetButton>
					</ButtonRow>
				</RequestPasswordResetInputForm>

				)
			}
			</Mutation>
    );
  }
}
export default RequestPasswordReset;
