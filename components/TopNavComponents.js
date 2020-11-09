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
    let modal, icon;
    if (this.state.show) {
      modal=  <HamburgerDropdownModal onClick={this.toggleModal} >
                Hello
              </HamburgerDropdownModal>;

      icon = <img 
                  alt="close hamburger dropdown menu" 
                  src="./close_hamburger_dropdown.svg" 
                  width="25" height="25" 
                  //onClick={this.toggleModal}
                  //className="hamburger_dropdown" 
            /> ; 
    }
    else {
      icon =  <img 
                  alt="open hamburger dropdown menu" 
                  src="./hamburger_dropdown_menu_unclicked_green.svg" width="25" height="25" 
                  // onClick={this.toggleModal}
                  //className="hamburger_dropdown" 
              /> ; 
    }
    return (
      <>
        <a className="hamburger_dropdown" onClick={this.toggleModal}>
          {icon}
        </a>
        {modal}
      </>
    );
  }
}

export {MobileHamburgerDropdown};