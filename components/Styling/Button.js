import React, { Component } from "react";
import styled from 'styled-components';
import {css} from 'styled-components';


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

const RedPrimaryStyle = css`
  background-color: ${props => props.theme.ui_actionable_red} ;
	color: white;
	&:hover {
	  color: white ;
	  background-color: ${props => props.theme.ui_actionable_selected_red} ;
	}
`;

const CenterButtonInsideGrid = css`
  grid-column: 1 / -1;
  grid-row-start: span 90; 
`;

const StyledButton = styled.div`
  width: auto;
  height: auto; 

  margin: auto; /* center the button */
  margin-top:${props => props.theme.max_component_vertical_distance};
  margin-bottom: ${props => props.theme.mid_component_vertical_distance};

  @media only screen 
	and (min-device-width : ${props => props.theme.screen_width_iphone678X_min}) 
	and (max-device-width : ${props => props.theme.screen_width_iphoneX_max})
	{
    margin-top:0;
    margin-bottom: 0;
	}
	/* iPhone 6, 7, 8 */
	@media only screen 
	and (min-device-width : ${props => props.theme.screen_width_iphone678X_min}) 
	and (max-device-width : ${props => props.theme.screen_width_iphone678_max})
  {
    margin-top:0;
    margin-bottom: 0;
  }

  padding: 12px;

  ${RedPrimaryStyle};
  
  border-radius: 2.7px;
  color: white;
  font-weight: bold;
  font-size: ${props => props.theme.font_size_title_mid};

  /* when the button is a single button, we can have it span the last row of a grid by doing the below.  if it is inside a row, like ButtonRow (below), then ButtonRow itself should make this happen
  grid-column: 1 / -1;
  grid-row-start: span 900; */

  cursor: pointer;
  /* animation */ 
  transition: all 0.25s;
  
`;


// for a row of buttons, place the button inside this component:
const ButtonRow = styled.div`
  /* if parent of ButtonRow is a grid, we can have the button span the entire last column using: */
  grid-column: 1 / -1;
  grid-row-start: 4;
  margin: auto;
  margin-top: 0px;

  display:grid;
  /* grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); */
  grid-auto-flow: column;

  @media only screen 
	and (min-device-width : ${props => props.theme.screen_width_iphone678X_min}) 
	and (max-device-width : ${props => props.theme.screen_width_iphoneX_max})
	{
   /* grid-auto-flow: row; */
	}
	/* iPhone 6, 7, 8 */
	@media only screen 
	and (min-device-width : ${props => props.theme.screen_width_iphone678X_min}) 
	and (max-device-width : ${props => props.theme.screen_width_iphone678_max})
  {
   /*  grid-auto-flow: row; */
  }


  /* distance between buttons */
  div {
    margin-right: 15px;
    margin-left: 15px;
  }
`;

const StyledWindowTopBarCloseXSymbolButton = styled.div`
  position: absolute;
  top: 15px;
  right: 10px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  background-image: url('x_close_button.svg');
  &:hover {
    background-image: url('x_close_button.svg'); ;
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

//use with ButtoInline to line up a button at the end of its parent
const RightAlightBorderOfParent = css`
  margin: -1px;
  float:right; 
  border-radius: 0px 3px 3px 0px;
  padding: 5px;
`;

const ButtonInline = styled("span")`
	font-size: ${props => props.theme.font_size_content};
  text-align:center;
  cursor: pointer;
	transition: all 0.25s;
`;

export {StyledButton, StyledWindowTopBarCloseXSymbolButton, ButtonRow, ButtonInline, GreenNonPrimaryStyle, GreenPrimaryStyle, CenterButtonInsideGrid, RightAlightBorderOfParent
};
