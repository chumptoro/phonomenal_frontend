import React, { Component } from "react";
import styled from 'styled-components';
import {css} from 'styled-components';

const StyledButton = styled.div`
  width: auto;
  height: auto; 

  margin: auto; /* center the button */
  margin-top:${props => props.theme.extra_max_component_vertical_distance};
  margin-bottom: ${props => props.theme.mid_component_vertical_distance};

  padding: 12px;
  background-color: ${props => props.theme.red} ;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  font-size: ${props => props.theme.font_size_title_mid};

  /* when the button is a single button, we can have it span the last row of a grid by doing the below.  if it is inside a row, like ButtonRow (below), then ButtonRow itself should make this happen
  grid-column: 1 / -1;
  grid-row-start: span 900; */

  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.red_selected} ;
  }

  /* animation */ 
  transition: all 0.25s;
  
`;


// for a row of buttons, place the button inside this component:
const ButtonRow = styled.div`

  /* if parent of ButtonRow is a grid, we can have the button span the entire last column using: */
  grid-column: 1 / -1;
  grid-row-start: 90;
  margin: auto;

  display:grid;
  /* grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); */
  grid-auto-flow: column;

  /* distance between buttons */
  div {
    margin-right: 15px;
    margin-left: 15px;
  }
`;

const StyledWindowTopBarCloseXSymbolButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  cursor: pointer;
  background-image: url('/icons/close_button.svg');

  &:hover {
    background-image: url('/icons/close_button_selected.svg'); ;
}`

const StyledWindowTopBarCloseButtonWithText = styled.div`
  position: absolute;
  top: 10px;
  right: 25px;
  margin:0;
  padding: 5px;

  /* background-image: url('/icons/close_button.svg'); */
  background-color: ${props => props.theme.lightgrey} ;

  &:hover {
  background-color: ${props => props.theme.red_selected} ;
}  
`;

const GreenPrimaryStyle = css`
  background-color: ${props => props.theme.ui_actionable_green} ;
	color: white;
	&:hover {
	  color: white ;
	  background-color: ${props => props.theme.ui_actionable_selected_green} ;
	}
`;
const GreenNonPrimaryStyle = css`
  background-color: white ;
  
	color: ${props => props.theme.ui_actionable_green};
	&:hover {
	  background-color: ${props => props.theme.divider_gray} ;
	}
`;
const ButtonInline = styled("span")`
	font-size: ${props => props.theme.font_size_content};
  text-align:center;
  cursor: pointer;
	transition: all 0.25s;
  
`;




export {StyledButton, StyledWindowTopBarCloseXSymbolButton, ButtonRow, ButtonInline, GreenNonPrimaryStyle, GreenPrimaryStyle
};
