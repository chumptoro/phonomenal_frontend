import React, { Component } from "react";
import Nav from './Nav.js'
import Link from 'next/link';
import styled from 'styled-components';
import ContextDescendantRadioButton from './Order_Context_Children/ContextDescendantRadioButton';
import { Consumer } from "./Context";

//header is a sub-component of Page so it can reference props.theme!
//*creating a fixed nav bar: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_fixed_menu
const StyledHeader = styled.header`
  	display: grid;
	z-index: 1;
	position: fixed;
	top: 0;
  	width: 100%;
	padding: 17px 0px 8px 0px;
	
	background-color:white;
  	border-bottom: 1px solid rgba(217, 219, 224, 0.5);


	@media (max-width: 300px) {
    grid-template-columns: ${props => props.theme.grid_template_desktop_small_width};
    }
    @media (min-width: 301px) {
      grid-template-columns: ${props => props.theme.grid_template_desktop_mid_width};
    }
    @media (min-width: 1455px) {
      grid-template-columns: ${props => props.theme.grid_template_desktop_large_width};
    }

	.wrapper {
		grid-column-start:2;
	}
	.left_sided_nav {
		float: left;
		padding-top: 0.27px;

		.location_pin {
			/* position: absolute;
			left: 100px; */
			margin-left: 100px;
			padding-bottom: 4px;
		}
	}
	.right_sided_nav {
		float: right;
		padding-top: 10px;;

		a {
			margin-right: 12px;
			margin-left: 12px;
		}

		.user_profile_icon {
			padding-top: 5px;
		}
	}

	.delivery_address {
		float: left;
		padding-top: 17.5px;
	}
	input[type="text"]
	{
    	font-family: "europa";
		border: none;
		outline: none;
	}

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
				<input
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


const Header = () => (
	<StyledHeader>
		<div className="wrapper">
			<div className="left_sided_nav">
				<Link href="/">
					<a>
						<img alt="phonomenal logo" src="./phonomenal_icon_alt2.jpg" width="45" height="45" /> 
					</a>
				</Link>
				<a> 
					<img className="location_pin" alt="location_pin" src="./location_pin_thin.svg" width="30" height="30" />
				</a>

			</div>

			<div className="delivery_address">
				{/* <Consumer>
					{context => (
						<input type="text" placeholder="enter your address" onChange={(e) => {
							context.handleTextInputChange(e);
							//localStorage.setItem("delivery_address", e.target.value)
							localStorage.removeItem("delivery_address")
							}
						}/>
					)}
				</Consumer> */}
				<AddressInput/>
			</div>

			{/* https://codepen.io/coralsea/pen/mMwwBz */}
			<ContextDescendantRadioButton />

			<div className="right_sided_nav">
				<Link href="/account">
					<a> 
						<img alt="user_profile_icon" src="./user_profile_grayed_out.svg" width="30" height="30" /> 
					</a>
				</Link>

				<Link href="/shopping_bag">
					<a> 
						<img className="shopping_bag_icon" border="0" alt="shopping bag icon" src="./shopping-bag-green.svg" width="30" height="30" /> 
					</a>
				</Link>
			</div>
			{/* <div className="sub-bar">
				<p>Search</p>
			</div>

			<div>Cart</div> */}
		</div>
		
	</StyledHeader>
);

export default Header;