import Link from 'next/link';

import styled from 'styled-components';
import PositionVerticallyHorizontallyCentered from "./Styling/VerticallyHorizontallyCentered";
import StyledInputForm from "./Styling/Form";
import {ResponsiveGridHideFooter} from "./Styling/Responsive_Grids";
import {StyledButton, ButtonRow} from "./Styling/Button";

import React, { Component } from "react";
import { Provider } from "./Context";

import { Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';

import {CURRENT_USER_QUERY} from "./Patron";
import Error from "../components/ErrorMessage";


const SIGNUP_MUTATION = gql`
	mutation SIGNUP_MUTATION ($first_name: String $email: String $phone_number: String $password: String) {
		signup (
			first_name: $first_name
			email: $email
			phone_number: $phone_number
			password: $password
		) {
			id
		}
	}
`;

const SignupGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr;
  grid-row-gap: 0;
  grid-column-gap:0;
	${PositionVerticallyHorizontallyCentered}
`;

// https://stackoverflow.com/questions/7700051/make-overlapping-div-not-clickable-so-that-content-below-can-be-accessed
const SignupButton = styled(StyledButton)`
	margin-top:${props => props.theme.max_component_vertical_distance};
	margin-bottom:${props => props.theme.max_component_vertical_distance};
	
	pointer-events: ${props => (props.enable ? 'auto' : 'none')};
	background-color: ${props => (props.enable ? props.theme.ui_actionable_red : props.theme.ui_actionable_lightgrey)};

	&:hover {
    background-color: ${props => (props.enable ? props.theme.ui_actionable_selected_red : props.theme.ui_actionable_selected_lightgrey)} ;
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

class Signup extends Component {
  // static propTypes = {
  //   children: PropTypes.instanceOf(Array).isRequired,
  // }
  state = {
		first_name: "",
		email:"",
		phone_number: "",
		password: "",
		account_exist: false,
		signup_button_enabled: false,
		/* login_attempts: 0,
		login_button_disabled: true */
  };
  componentDidMount() {
		// if (localStorage.getItem("delivery_address") !== null ) {
		// 	this.setState({
		// 		delivery_address: localStorage.getItem("delivery_address")
		// 	});
		// }
		// else {
		// 	this.setState({
		// 		delivery_address: ""
		// 	});
		// }
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

	


		// console.log("length is " + this.state.first_name.length);
		// console.log("length is " + this.state.email.length);
		// console.log("length is " + this.state.phone_number.length);
		// console.log("length is " + this.state.password.length);
		// console.log("signup button is enabled? " + signup_button_enabled);
  };

  handleRadioButton = (e) => {
    console.log("togglin state to value " + e.target.value);
    const { value, name } = e.target;
    this.setState({ [name]: value });
	};
	
  render() {
		var signup_button_enabled = this.state.first_name.length > 0 && this.state.email.length > 0 && this.state.phone_number.length > 0 && this.state.password.length > 0; 
		
		
		/* console.log("signup button is enabled? " + signup_button_enabled);
		console.log("signup button is enabled? " + signup_button_enabled); */

		// if (this.state.first_name !== "" && this.state.phone_number !== "" && this.state.password !== "" ) {
		// 	this.setState({signup_button_disabled: false});
		// 	console.log("signup button is " + this.state.signup_button_disabled);
		// }
		// else {
		// 	this.setState({signup_button_disabled: true});
		// 	console.log("signup button is " + this.state.signup_button_disabled);
		// }
    return (
			
      // <Provider
      //   value={{
      //     state: this.state,
      //     handleTextInputChange: e => this.handleTextInputChange(e),
      //     handleRadioButton: e => this.handleRadioButton(e),
      //     updateTotalPrice: this.updateTotalPrice,
      //   }}
      // >
      //   {this.props.children}
			// </Provider>

			<Mutation mutation={SIGNUP_MUTATION} variables={this.state}
				refetchQueries={[{ query : CURRENT_USER_QUERY}]} >
			{
				(signup, {error, loading}) => (

				<SignupInputForm>
					<div className="form_title">
					Sign Up
					</div>
					<Error error={error}/>
					<div className="input_wrapper">
						<div className="label">
						FIRST NAME
						</div>
						<input 
							type="text" name="first_name" 
							placeholder=""
							value={this.state.first_name} 
							onChange={this.handleTextInputChange} />
					</div>

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
						PHONE
						</div>
						<input 
							type="text" name="phone_number" 
							placeholder=""
							value={this.state.phone_number} 
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
						<Link href="/signin">
							<small>Already have an account?</small>
						</Link>	
						 
					</div>

					<ButtonRow>
						<SignupButton
							enable={signup_button_enabled}
							onClick={ async e => {
								e.preventDefault();
								const res = await signup();
								console.log("user is created. Head to menu and/or promotion message");
							}}
						>
							Sign Up
						</SignupButton>
					</ButtonRow>
				</SignupInputForm>

				)
			}
			</Mutation>
    );
  }
}
export default Signup;
export { };

