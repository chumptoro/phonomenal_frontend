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

              </HamburgerDropdownModal>;

      icon = <img className="hamburger_dropdown" 
                  alt="close hamburger dropdown menu" 
                  src="./close_hamburger_dropdown.svg" 
                  width="30" height="30" 
                  onClick={this.toggleModal}
            /> ; 
    }
    else {
      icon =  <img className="hamburger_dropdown" 
                  alt="open hamburger dropdown menu" 
                  src="./hamburger_dropdown_menu_unclicked_green.svg" width="30" height="30" 
                  onClick={this.toggleModal}
              /> ; 
    }
    return (
      <>
        {/* <a onClick={this.toggleModal}> */}
          {icon}
 {/*        </a> */}
        {modal}
      </>
    );
  }
}

export {MobileHamburgerDropdown};