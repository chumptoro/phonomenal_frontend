import React, { useState, Component } from "react";
import styled from "styled-components";
import Link from 'next/link';

const DropDownContainer = styled.span`
	margin-left: 12px;
	margin-right: 24px;
`;

const DropDownHeader = styled.a`
	cursor: pointer;
`;

const DropDownList = styled.div`
	display: ${props => (props.dropdown_header_is_clicked ? 'block' : 'none')}; 
	position: absolute;
  padding: 0px;
	padding-top: 8px;
	padding-bottom: 11px;
  margin: 0px;
  background: #ffffff;
	box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.15);
	border-radius: ${props => props.theme.border_radius_value};
	/* border: solid ${props => props.theme.divider_gray} 0.5px;  */
`;

const ListItem = styled.div`
	/* border-bottom: solid ${props => props.theme.divider_gray} 0.5px; */
	padding-top: 8px;
	padding-bottom: 11px;
	padding-right: 30px;
	padding-left: 30px;
	cursor: pointer;
	text-align: center;
	&:hover {
    background-color: #F5F5F5;
		/*  ${props => props.theme.red_selected} ; */
  }
	a:link {
		color: black;
	}
	a:visited {
		color: black;
	}
	a:hover {
		color: black;
	}
	a:active {
		color: black;
	}
`;

//ref: https://stackoverflow.com/questions/32819543/draw-a-line-in-a-div/32819563
const Divider = styled.div`
	border-bottom: solid ${props => props.theme.divider_gray} 0.5px;
	width: 82%;
	margin: auto;
`;



// ref: https://blog.campvanilla.com/reactjs-dropdown-menus-b6e06ae3a8fe
class Dropdown extends Component {
	state = {
		option_elected:"",
		dropdown_header_is_being_hovered:false,
		dropdown_header_is_clicked: false,
	};
	//ref: https://stackoverflow.com/questions/32553158/detect-click-outside-react-component
	wrapperRef = React.createRef();
	
	// showMenu = (e) => {
	// 	this.setState({ dropdown_header_is_being_hovered: true });
  //   console.log("show dropdown menu");
	// };
	// hideMenu = (e) => {
	// 	this.setState({ dropdown_header_is_being_hovered: false });
  //   console.log("hide dropdown menu");
	// };
	toggleDropDown = (e) => {
		this.setState({ dropdown_header_is_clicked: !(this.state.dropdown_header_is_clicked) });
		console.log("dropdown menu is toggled");
	}

	//toggle dropdown off if user clicks outdie of the dropdown area
	handleClickOutside = (e) => {
		if (this.wrapperRef && !this.wrapperRef.current.contains(e.target)) {
			this.setState({ dropdown_header_is_clicked: false });
			console.log("user clicks outside of the dropdown menu, which triggers it to close");
		}
	}
	componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }
	
	render() {
		let 	DropdownOptions; 
		if (this.props.Signedin == "false") {
			DropdownOptions = 
				<DropDownList 
					dropdown_header_is_clicked={this.state.dropdown_header_is_clicked}
				>
					<Link href="/signup" className="link">
						<ListItem>Sign Up</ListItem>
					</Link>
					<Divider/>
					<Link href="/signin" className="link">
						<ListItem>Sign In</ListItem> 
					</Link>
					<Divider/>
				</DropDownList>
			;
		}
		else {
			DropdownOptions = 
				<DropDownList 
					dropdown_header_is_clicked={this.state.dropdown_header_is_clicked}
				>
					<Link href="/account" className="link">
						<ListItem>Account</ListItem>
					</Link>
					<Divider/>
					<Link href="/signout" className="link">
						<ListItem>Sign Out</ListItem> 
					</Link>
					<Divider/>
				</DropDownList>
			;
		}

		return (
			<DropDownContainer 
				ref={this.wrapperRef}
				onClick={this.toggleDropDown}
				// onMouseEnter={this.showMenu}
				// onMouseLeave={this.hideMenu}
			>				
				<DropDownHeader>
					<img alt="user_profile_icon" src="./user_profile_grayed_out.svg" width="30" height="30" /> 
			 </DropDownHeader>

				 
				{DropdownOptions}
				
			</DropDownContainer>
		)
	}
}


export default Dropdown;