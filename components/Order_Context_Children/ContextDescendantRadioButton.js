import Link from 'next/link';
import styled from 'styled-components';
import React, { Component } from "react";


import { Consumer } from "../Context";

// refs for creating a toggle switch in ReactJS https://codepen.io/coralsea/pen/mMwwBz

const StyledToggleSwitch = styled.div`
	/* display: flex; */
	float: left;
	margin-left: 65px;
	padding-top: 10px;

	.switch-field {
		/* padding: 40px; */
		overflow: hidden;
	}

	.switch-title {
		font-weight: bold;
		margin-bottom: 6px;
	}

	.switch-field input {
		position: absolute !important;
		clip: rect(0, 0, 0, 0);
		height: 1px;
		width: 1px;
		border: 0;
		overflow: hidden;
	}

	.switch-field label {
		display: inline-block;
		width: 60px;
		background-color: ${props => props.theme.white}; /* #e4e4e4; */
		color: rgba(0, 0, 0, 0.6);
		/* font-size: 14px; */
		/* font-weight: normal; */
		text-align: center;
		text-shadow: none;
		padding: 6px 13px;
		/* border: 1px solid rgba(0, 0, 0, 0.2); */
		box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3), 0 1px rgba(255, 255, 255, 0.1);
		transition: all 0.1s ease-in-out;
	}

	.switch-field label:hover {
		cursor: pointer;
	}

	.switch-field input:checked + label {
		background-color: ${props => props.theme.red};
		color: white;
		box-shadow: none;
	}

	.switch-field label:first-of-type {
		border-radius: 20px 0 0 20px;
	}

	.switch-field label:last-of-type {
		border-radius: 0 20px 20px 0;
	}
`;


class ContextDescendantRadioButton extends Component {
	constructor(props) {
		super(props);
		this.state = {
			toggle: null
		};
	  	this.toggleState = this.toggleState.bind(this);
	}

	toggleState() {
		this.setState({
			toggle: !this.state.toggle
		});
	}
	
	// componentDidMount() {
	// 	if (localStorage.getItem("delivery_method") !== null ) {
	// 		console.log("delivery method does exist in localStorage with the value " + localStorage.getItem("delivery_method"));
	// 		//console.log("localStorage.getItem for delivery method is " + localStorage.getItem("delivery_method"));
	// 		this.setState({
	// 			toggle: localStorage.getItem("delivery_method")
	// 		});
	// 	}
	// 	else {
	// 		this.setState({
	// 			toggle: false
	// 		});
	// 		localStorage.setItem("delivery_method", false);
	// 	}
	// }
  
	// componentWillUnmount() {
	// 	localStorage.setItem("delivery_method", this.state.toggle);
	// 	console.log("localStorage.getItem for delivery method when unmouting is  " + localStorage.getItem("delivery_method"));
	// }
  
	render() {
		return (
			<Consumer>
              {context => (

				  <StyledToggleSwitch>
					<form className="switch-field">
						{/* <div className="switch-title">{this.props.title}</div> */}
						<input
							type="radio"
							id="pickup"
							name="delivery_method"
							value="pickup"
							onChange={this.toggleState}
							checked={!this.state.toggle}
							onClick={(e) => {
									context.handleRadioButton(e);
									//localStorage.setItem("delivery_method", false);
									console.log("this.state.toggle value is " + this.state.toggle);
								}
							} 
						/>
						<label htmlFor="pickup">Pickup</label>

						<input
							type="radio"
							id="delivery"
							name="delivery_method"
							value="delivery"
							onChange={this.toggleState}
							checked={this.state.toggle}
							onClick={(e) => {
									context.handleRadioButton(e);
									//localStorage.setItem("delivery_method", true);
									//localStorage.removeItem("delivery_method");
								}
							}
							
						/>
						<label htmlFor="delivery">Delivery</label>
					</form>
				</StyledToggleSwitch>	
              )}
            </Consumer>
		);
	}
}

  
  export default ContextDescendantRadioButton;