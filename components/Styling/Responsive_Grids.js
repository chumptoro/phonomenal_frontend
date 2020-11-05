import React, { Component } from "react";
import styled from 'styled-components';
import {css} from 'styled-components';


const ResponsiveGridHideFooter = css`
   margin-bottom: 20vh;
`;

const ResponsiveGridLeftRightMargin = css`
	@media (max-width: 300px) {
    grid-template-columns: ${props => props.theme.grid_template_desktop_small_width};
    }
    @media (min-width: 301px) {
      grid-template-columns: ${props => props.theme.grid_template_desktop_mid_width};
    }
    @media (min-width: 1455px) {
      grid-template-columns: ${props => props.theme.grid_template_desktop_large_width};
    }

`;

const StyledPropsSetNumberOfRowItemsResponsiveGrid = styled.div` 
  /* width: 100%;
  height: auto;
   */
  display: grid;
  grid-template-columns: repeat(${props => (props.col_num)}, 150px);
  grid-column-gap: 20px;
 /*  grid-row-gap: ${props => props.theme.min_component_vertical_distance}; */
`;

const StyledNoSetNumberOfRowItemsResponsiveGrid = styled.div` 
  /* width: 100%;
  height: auto; */
  
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 800px));
  grid-auto-flow: row;
  grid-row-gap: 18px;
`;

//must be wrapped under a grid with left and right margin set by ResponsiveGridLeftRightMargin
const GridSingleRow = styled('div')`
	display: grid;
  grid-column-start: 2;
  grid-column-gap: 2%;
  grid-template-columns: 38% repeat(3, 20%);
`;

export {StyledNoSetNumberOfRowItemsResponsiveGrid, StyledPropsSetNumberOfRowItemsResponsiveGrid, ResponsiveGridLeftRightMargin, ResponsiveGridHideFooter, GridSingleRow} ;