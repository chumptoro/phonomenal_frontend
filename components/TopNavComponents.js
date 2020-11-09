import React, { Component } from "react";
import Link from 'next/link';
import styled from 'styled-components';
import User from "./Patron";
import Dropdown from "./Styling/Dropdown";
import MediaQuery, { useMediaQuery }  from 'react-responsive';
import {AddressInput} from './AddressInput';
import {StyledDesktopOrderNav, HamburgerDropdownModal} from './Styling/Nav';





class MobileHamburgerDropdown extends Component {
  state = { show: false }
  toggleModal = async () => { this.setState({ show: !this.state.show }); }
 
  render() {
    let modal;
    if (this.state.show) {
      modal=  <HamburgerDropdownModal onClick={this.toggleModal} >

              </HamburgerDropdownModal>;
    }
    return (
      <>
        <a onClick={this.toggleModal}>
		      <img className="" alt="shopping bag icon" src="./hamburger_dropdown_menu_unclicked_green.svg" width="30" height="30" /> 
        </a>
        {modal}
      </>
    );
  }
}

export {MobileHamburgerDropdown};