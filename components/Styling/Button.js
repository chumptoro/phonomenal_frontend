import React, { Component } from "react";
import styled from 'styled-components';

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

  /* when the button is a single button, we can have it span the last row of a grid by doing the below.  if it is inside a row, like ButtonRow (below), then BUttonRow itself should  
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




export {StyledButton, ButtonRow};
