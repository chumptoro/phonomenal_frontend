import React, { Component } from "react";
import Link from 'next/link';
import styled from 'styled-components';
import ContextDescendantRadioButton from './Order_Context_Children/ContextDescendantRadioButton';
import { Consumer } from "./Context";
import User from "./Patron";
import Dropdown from "./Styling/Dropdown";
import MediaQuery, { useMediaQuery }  from 'react-responsive';
import {AddressInput} from './AddressInput';
import {StyledDesktopOrderNav} from './Styling/Nav';
import {MobileHamburgerDropdown} from './TopNavComponents';

const DesktopOrderNav = styled(StyledDesktopOrderNav)`
`;
const DeliveryPickupToggle = styled(ContextDescendantRadioButton)``;
const DeliveryAddress = () => (
	<>
	<img className="location_pin icon" alt="location_pin" src="./location_pin_thin.svg" width="30" height="30" />
	<AddressInput/>
	</>
);
const Logo = () => (
	<>
	<Link href='/'>
		<img className="logo" alt="phonomenal logo" src="./phonomenal_logo.png" width="60" height="60"/>
	</Link>
	</>
);
const ShoppingBag = () => (
	<>
	<Link href="/shopping_bag">
		<img className="shopping_bag icon" alt="shopping bag icon" src="./shopping-bag-green.svg" width="30" height="30" /> 
	</Link>
	</>
);



const TopNav = () => {
	let nav;
	const isDesktop = useMediaQuery({ minWidth: 992 });
	const minIphone678XWidth = useMediaQuery({ minWidth: 0 });
	const maxIphone678XWidth = useMediaQuery({ maxWidth: 767 });
	if (minIphone678XWidth && maxIphone678XWidth) {
		return (
			<DesktopOrderNav>
				<div className="place_float_right_and_left_on_one_line">
					<div className="left_sided_nav">
						<Logo/>
					</div>
					<div className="right_sided_nav">
					<User>
								{({ data }) => {
								const me = data ? data.me : null;
								if (me) return <Dropdown Signedin="true" first_name={me.first_name}/>
								else return <Dropdown Signedin="false"/>	
								}}
						</User>
						<MobileHamburgerDropdown/>
					</div> 
				</div>
			</DesktopOrderNav>
		);
	}
	else return(
			<DesktopOrderNav>
				<div className="place_float_right_and_left_on_one_line">
					<div className="left_sided_nav">
						<Logo/>
						<DeliveryPickupToggle/>
						<DeliveryAddress/>
						
					</div>
					<div className="right_sided_nav">
						<User>
								{({ data }) => {
								const me = data ? data.me : null;
								if (me) return <Dropdown Signedin="true" first_name={me.first_name}/>
								else return <Dropdown Signedin="false"/>	
								}}
						</User>
						<ShoppingBag/>
					</div> 
				</div>
			</DesktopOrderNav>
		);
}



export default TopNav;