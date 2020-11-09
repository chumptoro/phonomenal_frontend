import React, { Component } from "react";
import { Consumer } from "./Context";
import MediaQuery from 'react-responsive';
import styled from 'styled-components';


const Field = styled('input')`
	padding-bottom: 15px;
	font-family: "europa";
	border: none;
	font-weight: bold;
	color:${props => props.theme.text_gray};
	outline: none;
	::placeholder {
		font-weight: bold;
	}
	min-width: 120px;
	max-width: 120px;
`;

class AddressInput extends Component {
	state = {
		delivery_address: ""
	};  
	handleTextInputChange = (e) => {
	  const { value, name } = e.target;
	  this.setState({ [name]: value });
	};
	componentDidMount() {
		if (localStorage.getItem("delivery_address") !== null ) {
			this.setState({
				delivery_address: localStorage.getItem("delivery_address")
			});
		}
		else {
			this.setState({
				delivery_address: ""
			});
			//localStorage.setItem("delivery_address", ""); 
		}
	}
	componentWillUnmount() {
		//localStorage.setItem("delivery_address", this.state.delivery_address);
	}
	render() {
	  return (
		<Consumer>
			{context => (
				<Field
					name="delivery_address" 
					type="text" 
					placeholder="enter your address"
					value={this.state.delivery_address} 
					onChange={(e) => {
					context.handleTextInputChange(e);
					this.handleTextInputChange(e);
					localStorage.setItem("delivery_address", e.target.value)
					//localStorage.removeItem("delivery_address")
					}
				}/>
			)}
		</Consumer>
	  );
	}
};

export {AddressInput} ;