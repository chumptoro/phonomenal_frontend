// import Link from 'next/link';
import styled from 'styled-components';
import React, { Component } from "react";
import { Link } from 'react-scroll';
import PropTypes from 'prop-types';
import TabLabel from './TabLabel.js';
import TabContent from './TabContent.js';
import {StyledTabs} from '../Styling/StyledTabs';

const StyledTabHorizontalScroll = styled.div` 
 /* scroll ref: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_menu_hor_scroll : */  
  white-space: nowrap;
  overflow-x: auto !important;
  width: 100%; 
  height: 50%;
  /* hide scrollbar ref: https://stackoverflow.com/questions/43186015/css-hide-scroll-bar-but-have-element-scrollable/43186311 : */
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
    display: none;
  }
  /* hide scrollbar ref for firefox: https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-width */
  scrollbar-width: none;

  grid-column-start: 2;   
  /* display: grid; */
  /* grid-template-columns: repeat(auto-fill, 107px); */
  
  position: sticky;
  top: 75px; /* ${props => props.theme.element_right_below_top_nav_margin} */
  background-color: ${props => props.theme.white};
  
  padding-top: ${props => props.theme.min_component_vertical_distance} ;
  padding-bottom: ${props => props.theme.min_component_vertical_distance} ;
  margin-bottom: ${props => props.theme.min_component_vertical_distance} ;
 /*  border-bottom: 1px solid rgba(217, 219, 224, 0.5); */
`;

class Tabs extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
  }
  state = {
      activeTab: this.props.children[0].props.label,
  }
  onClickTabItem = (tab) => {
    this.setState({ activeTab: tab });
  }
  render() {
    const { onClickTabItem, props: {children,}, state: {activeTab,} } = this;
    return (
      <StyledTabs>
        <StyledTabHorizontalScroll>
          {
            children.map((child) => {
              const { label } = child.props;
              return (
                <TabLabel
                  activeTab={activeTab}
                  key={label}
                  label={label}
                  onClick={onClickTabItem}
                />
              );
            })
          }
        </StyledTabHorizontalScroll>
        <TabContent category={activeTab}/>
      </StyledTabs>
    );
  }
}
export default Tabs;


  //* reference: https://www.digitalocean.com/community/tutorials/react-tabs-component
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_menu_hor_scroll
// https://medium.com/flexbox-and-grids/how-to-create-horizontally-scrollable-sections-with-flexbox-60d860f539b2
// https://codepen.io/colinlord/pen/oZNoOO
// https://uxdesign.cc/creating-horizontal-scrolling-containers-the-right-way-css-grid-c256f64fc585
// http://jsfiddle.net/PieBie/6y291fud/
// https://stackoverflow.com/questions/36247140/why-dont-flex-items-shrink-past-content-size