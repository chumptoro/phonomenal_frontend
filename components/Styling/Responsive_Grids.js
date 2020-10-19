import React, { Component } from "react";
import styled from 'styled-components';

const StyledPropsSetNumberOfRowItemsResponsiveGrid = styled.div` 
  /* width: 100%;
  height: auto; */
  
  display: grid;
  grid-template-columns: repeat(${props => (props.col_num)}, 180px);
  grid-column-gap: 30px;
`;

const StyledNoSetNumberOfRowItemsResponsiveGrid = styled.div` 
  /* width: 100%;
  height: auto; */
  
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 800px));
  grid-template-columns: 1fr;
  grid-auto-flow: row;

  grid-row-gap: 18px;
`;

export {StyledNoSetNumberOfRowItemsResponsiveGrid, StyledPropsSetNumberOfRowItemsResponsiveGrid} ;