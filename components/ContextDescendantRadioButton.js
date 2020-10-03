import Link from 'next/link';
import styled from 'styled-components';
import React, { Component } from "react";
import OrderCategory from './Orders_Children/OrderCategory';

import { Consumer } from "./Context";

const StyledToggleSwitchi = styled.div`
	/* position: fixed; */
	/* display: inline; */
	/* margin-bottom: 36px; */
	display: div; 
	overflow: hidden;
	float: left;
	margin-left: 100px;
	padding-top: 10px;

	input {
		position: absolute !important;
		clip: rect(0, 0, 0, 0);
		height: 1px;
		width: 1px;
		/* border: 0; */
		overflow: hidden;
	}

	label {
		background-color: ${props => props.theme.white};
		color: rgba(0, 0, 0, 0.6);
		font-size: 14px;
		line-height: 1;
		text-align: center;
		padding: 8px 16px;
		margin-right: -1px;
		/* border: 1px solid rgba(0, 0, 0, 0.2); */
		box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3), 0 1px rgba(255, 255, 255, 0.1);
		transition: all 0.1s ease-in-out;
	}

	label:hover {
		cursor: pointer;
	}

	input:checked + label {
		background-color: ${props => props.theme.red};
		color: white;
		box-shadow: none;
	}

	label:first-of-type {
		border-radius: 20px 0 0 20px;
	}

	label:last-of-type {
		border-radius: 0 20px 20px 0;
	}
`;

class ContextDescendantRadioButtoni extends Component {
	constructor(props) {
		super(props);
		this.state = {
			toggle: false
		};
	  	this.toggleState = this.toggleState.bind(this);
	}

	toggleState() {
		this.setState({
			toggle: !this.state.toggle
		});
	}
    render() {
        return (
            <Consumer>
              {context => (
				<StyledToggleSwitchi>
					<input
						type="radio" 
						name="delivery_method" 
						id="delivery"
						onChange={this.toggleState}
						checked={!this.state.toggle}
						onClick={e => context.handleRadioButton(e)} 
					/>
					<label for="delivery">Delivery</label>
  					<input 
					    type="radio" 
						name="delivery_method" 
						id="pickup"
						onChange={this.toggleState}
						checked={!this.state.toggle}
						onClick={e => context.handleRadioButton(e)} 
						
					/>
					<label for="pickup1">Pickup</label>
				</StyledToggleSwitchi>
				  
              )}
            </Consumer>
        );
    }
}



const StyledToggleSwitch = styled.div`
	/* display: flex; */
	float: left;
	margin-left: 100px;
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
			toggle: false
		};
	  	this.toggleState = this.toggleState.bind(this);
	}

	toggleState() {
		this.setState({
			toggle: !this.state.toggle
		});
	}

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
							value={this.props.leftLabel}
							onChange={this.toggleState}
							checked={!this.state.toggle}
							onClick={e => context.handleRadioButton(e)} 
						/>
						<label htmlFor="pickup">Pickup</label>

						<input
							type="radio"
							id="delivery"
							name="delivery_method"
							value={this.props.rightLabel}
							onChange={this.toggleState}
							checked={this.state.toggle}
							onClick={e => context.handleRadioButton(e)} 
							
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