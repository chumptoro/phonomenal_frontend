import Link from 'next/link';
import styled from 'styled-components';
import React, { Component } from "react";


import { Consumer } from "../Context";

// refs for creating a toggle switch in ReactJS https://codepen.io/coralsea/pen/mMwwBz

const StyledToggleSwitch = styled.a`
	/* position: relative; */
	/* padding-bottom: 500px;  *//* does not work */
	margin-left: 7vw;
	margin-right: 3vw;
	font-weight: bold;
	input {
		position: absolute !important;
		/* clip: rect(0, 0, 0, 0); */
		height: 1px;
		width: 1px;
		border: 0;
		overflow: hidden;
	}
	label {
		display: inline-block;
		width: 60px;
		background-color: ${props => props.theme.white}; /* #e4e4e4; */
		color: ${props => props.theme.text_gray}; 
		text-align: center;
		text-shadow: none;
		padding: 6px 8px;
		/* border: 1px solid rgba(0, 0, 0, 0.2); */
		box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3), 0 1px rgba(255, 255, 255, 0.1);
		transition: all 0.1s ease-in-out;
	}
	label:hover {
		cursor: pointer;
	}
	 input:checked + label {
		background-color: ${props => props.theme.ui_actionable_red};
		color: white;
		box-shadow: none;
	}
	label:first-of-type {
		border-radius: 20px 0 0 20px;
		border-radius: 6px 0 0 6px;
	}
	label:last-of-type {
		border-radius: 0 20px 20px 0;
		border-radius: 0 6px 6px 0;
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
		this.setState({ toggle: !this.state.toggle });
	}
	render() {
		return (
			<Consumer>
        {context => (
				  <StyledToggleSwitch>
						<input
							type="radio"
							id="pickup"
							name="delivery_method"
							value="pickup"
							onChange={this.toggleState}
							checked={!this.state.toggle}
							onClick={(e) => {
								context.handleRadioButton(e);
								localStorage.setItem("delivery_method", "false");
								console.log("this.state.toggle value is " + this.state.toggle);
							}} 
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
								localStorage.setItem("delivery_method", "delivery");
								//localStorage.removeItem("delivery_method");
							}}
						/>
						<label htmlFor="delivery">Delivery</label>
				</StyledToggleSwitch>	
        )}
      </Consumer>
		);
	}
}
export default ContextDescendantRadioButton;