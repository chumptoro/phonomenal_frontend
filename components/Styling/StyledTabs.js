import React, { Component } from "react";
import styled from 'styled-components';
import {css} from 'styled-components';
import {ResponsiveGridLeftRightMargin} from './Responsive_Grids';

const StyledTabs = styled.div`
  display: grid;
  ${ResponsiveGridLeftRightMargin};
  @media (min-width: 376px /* ${props => props.theme.screensize_iphone_678_min} */) {
      grid-template-columns: ${props => props.theme.grid_template_desktop_mid_width_for_tabs_content_item};
  }
  /* 493px is the screensize where the tab's right margin is out of wack */
  @media (min-width: 493px) {
      grid-template-columns: ${props => props.theme.grid_template_desktop_mid_width_for_tabs_content_item};
  }
  @media (min-width: 494px) {
      grid-template-columns: ${props => props.theme.grid_template_desktop_mid_width};
  }
`;
export {StyledTabs};