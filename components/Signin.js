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

const SIGNIN_MUTATION = gql`
	mutation SIGNIN_MUTATION ($email: String $password: String) {
		signin (
			email: $email
			password: $password
		) {
			id
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
const SignInButton = styled(StyledButton)`
	margin-top:${props => props.theme.max_component_vertical_distance};
	margin-bottom:${props => props.theme.max_component_vertical_distance};
	
	pointer-events: ${props => (props.enable ? 'auto' : 'none')};
	background-color: ${props => (props.enable ? props.theme.ui_actionable_green : props.theme.ui_actionable_lightgrey)};

	&:hover {
    background-color: ${props => (props.enable ? props.theme.ui_actionable_selected_green : props.theme.ui_actionable_selected_lightgrey)} ;
  }

`;

const SignupInputForm = styled(StyledInputForm)`
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
	}

`;

class Signin extends Component {
  // static propTypes = {
  //   children: PropTypes.instanceOf(Array).isRequired,
  // }
  state = {
		email:"",
		password: "",
		account_exist: false,
		signin_button_enabled: false,
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
    // console.log("state is currently " + this.state[name]);
		// console.log("changing state to value " + e.target.value);
  };

  handleRadioButton = (e) => {
    //console.log("togglin state to value " + e.target.value);
    const { value, name } = e.target;
    this.setState({ [name]: value });
	};
	
  render() {
		var signin_button_enabled = this.state.email.length > 0 && this.state.password.length > 0; 
		let already_signed_in_message;
		if (this.props.already_signed_in_with) {
			already_signed_in_message = 
				<div className="centered_text">
					<div>
						You are already signed in as {this.props.already_signed_in_with}!
					</div>
					<div>
						You can sign out of it and sign in with a different account below.
					</div>
				</div> 
			;
		}
		else {
			already_signed_in_message = <div></div>;
		}
		
	/* 	"You are already signed in as {data.me.email}. Signing in with a different account will sign you out!" */

    return (
			<Mutation 
				mutation={SIGNIN_MUTATION} 
				variables={this.state} 
				refetchQueries={[{ query : CURRENT_USER_QUERY}]} >
			{
				(signin, {error, loading}) => (
					
				<SignupInputForm>
					<div className="form_title">
						{this.props.title}
					</div>

					<Error error={error}/>

					{already_signed_in_message}

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

					<div className="input_wrapper">
						<div className="label">
						PASSWORD
						</div>
						<input 
							type="password" name="password" 
							placeholder=""
							value={this.state.password} 
							onChange={this.handleTextInputChange} />
					</div>

					<div className="centered_text">
						<div>
							<Link href="/signup"><small>Don't have an account?</small></Link>
						</div>
						<div>
							<Link href="/request_password_reset"><small>Forgot your password?</small></Link>
						</div>
					</div>
	
					<ButtonRow>
						<SignInButton
							enable={signin_button_enabled}
							onClick={ async e => {
								e.preventDefault();
								const res = await signin();
								const sto = await localStorage.setItem('guest_checkout', false);
								console.log("localStorage for guest_checkout is " + localStorage.getItem('guest_checkout'));
								//Router.back();
								if (this.props.redirect) {
									Router.push({ pathname: this.props.redirect });
								}
								else {
									Router.push({ pathname: '/' });
								}
								//populate address on the home page with the right address
								console.log("user is logged in. Head to menu and/or promotion message");

							var localStorageSpace = function(){
								var data = '';

								console.log('Current local storage: ');

								for(var key in localStorage){

										if(localStorage.hasOwnProperty(key)){
												data += localStorage[key];
												console.log( key + " = " + ((window.localStorage[key].length * 16)/(8 * 1024)).toFixed(2) + ' KB' );
										}

								}

								console.log(data ? '\n' + 'Total space used: ' + ((data.length * 16)/(8 * 1024)).toFixed(2) + ' KB' : 'Empty (0 KB)');
								console.log(data ? 'Approx. space remaining: ' + (5120 - ((data.length * 16)/(8 * 1024)).toFixed(2)) + ' KB' : '5 MB');
							};

							localStorageSpace();

							}}
						>
							Sign In
						</SignInButton>
					</ButtonRow>
				</SignupInputForm>

				)
			}
			</Mutation>
    );
  }
}
export default Signin;
