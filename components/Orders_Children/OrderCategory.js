import Link from 'next/link';
import styled from 'styled-components';
import React, { Component } from "react";

// Fan Favorites
// Signature Pho
// Banh Mi
// Rice Platter
// Family Meals 
// Vermicelli Noodle Bowl
// Appetizers & Sides
// Drinks & Desserts

const StyledDropdown = styled.div`
  display: inline;
`;

const Dropbtn = styled.div`
  display: inline-block;
  color: black;
  text-align: center;
`;

const DropDownContent = styled.div`
  display: none;
  border-radius: 2px;
  position: absolute;
  background-color: white;
  min-width: 160px;
  box-shadow: 0px 2px 5px 0.5px rgba(0, 0, 0, 0.1);
  z-index: 1;
`;
//
const StyledLi = styled.div`
  /* float: left; */
`;

const DropDownLi = styled(StyledLi)`
  display: inline-block;
  &:hover {
    background-color: white;
  }
  &:hover ${DropDownContent} {
    display: block;
  }
`;

const SubA = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
  &:hover {
    background-color:white;
    cursor: pointer;
  }
`;

class DropDown extends Component {
  handleClick = action => {
    if (!action) return;

    if (this.props.onClick) this.props.onClick(action);
  };

  render = () => {
    return (
    <StyledDropdown>
        <DropDownLi>
            <Dropbtn onClick={() => this.handleClick("DropDown")}>
                More Categories 
            </Dropbtn>
            <DropDownContent>
                <Link href="/">
                    <SubA>Vermicelli Noodle Bowls</SubA>
                </Link>
                <Link href="/">
                    <SubA>Appetizers & Sides</SubA>
                </Link>
                <Link href="/">
                    <SubA>Drinks & Desserts</SubA>
                </Link>
            </DropDownContent>
        </DropDownLi>
    </StyledDropdown>
    );
  };
};

const StyledOrderCategory = styled.div`
	/* grid-column-start: 2; */
    /* grid-template-columns: 1fr;
    display: grid; 
    grid-column-gap: 20px; */
    @media (min-width:900px){
    }
`;

import Tabs from './Tabs';

const OrderCategory = () => (
    <StyledOrderCategory>
        {/* <Link href="/">
			<a>Fan Favorites</a>
		</Link>
        <Link href="/">
			<a>Signature Pho</a>
		</Link> 
        <Link href="/">
			<a>Banh Mi</a>
		</Link>
        <Link href="/">
			<a>Rice Platters</a>
		</Link>
        <Link href="/">
			<a>Family Meals</a>
		</Link>
        <DropDown/> */}

    <Tabs>
      <div label="Fan Favorites">
          See ya later, <em>Alligator</em>!
      </div>
      <div label="Signature Pho">
          After 'while, <em>Crocodile</em>!
      </div>
      <div label="Banh Mi">
          Banh Mi Bi 
      </div>
      <div label="Rice Platters">
          Com Ga, Com Tam 
      </div>

      <div label="Family Meals">
          Canh chua ca loc <em>extinct</em>!
      </div>
      <div label="Vermicelli Bowls">
          Canh chua ca loc <em>extinct</em>!
      </div>
      <div label="Drinks & Desserts">
          Canh chua ca loc <em>extinct</em>!
      </div>

      <div label="Family Meals">
          Canh chua ca loc <em>extinct</em>!
      </div>
      <div label="Family Meals">
          Canh chua ca loc <em>extinct</em>!
      </div>
      <div label="Family Meals">
          Canh chua ca loc <em>extinct</em>!
      </div>
      
    </Tabs>
        
    </StyledOrderCategory>



    
);

export default OrderCategory;


