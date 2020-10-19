import React, { Component } from "react";
import styled from 'styled-components';

const StyledPropsSetNumberOfRowItemsResponsiveGrid = styled.div` 
  /* width: 100%;
  height: auto; */
  
  display: grid;
  grid-template-columns: repeat(${props => (props.col_num)}, 150px);
`;

const StyledNoSetNumberOfRowItemsResponsiveGrid = styled.div` 
  width: 100%;
  height: auto;
  
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

export {StyledNoSetNumberOfRowItemsResponsiveGrid, StyledPropsSetNumberOfRowItemsResponsiveGrid} ;