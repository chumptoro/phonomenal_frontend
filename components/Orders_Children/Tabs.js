// import Link from 'next/link';
import styled from 'styled-components';
import React, { Component } from "react";
import { Link } from 'react-scroll';
import PropTypes from 'prop-types';
import TabLabel from './TabLabel.js';
import TabContent from './TabContent.js';

//* reference: https://www.digitalocean.com/community/tutorials/react-tabs-component


// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_menu_hor_scroll
// https://medium.com/flexbox-and-grids/how-to-create-horizontally-scrollable-sections-with-flexbox-60d860f539b2
// https://codepen.io/colinlord/pen/oZNoOO
// https://uxdesign.cc/creating-horizontal-scrolling-containers-the-right-way-css-grid-c256f64fc585
// http://jsfiddle.net/PieBie/6y291fud/
// https://stackoverflow.com/questions/36247140/why-dont-flex-items-shrink-past-content-size

var gutter = 2;

// const StyledTabHorizontalScroll = styled.div`
    
//     display: grid;
//     /* grid-gap: calc(${gutter}px / 2); */
//     /* grid-column-gap: 5px; */
//     grid-template-columns: repeat(auto-fill, 150px);
    
    
//     /* grid-template-rows: 1fr; */
//     grid-auto-flow: column; 
//     overflow-x: scroll;
//     scroll-snap-type: x proximity;
//     /* grid-template-rows: minmax(150px, 1fr);  */
//     /* padding-bottom: calc(.75 * ${gutter}px);
//     margin-bottom: calc(-.25 * ${gutter}px);  */
//     /* grid-auto-columns: calc(50% - ${gutter}px * 2); */

//     ::-webkit-scrollbar { 
//       display:none;
//     }
//     scrollbar-width: none;
//     -ms-overflow-style: none;
// `;


const StyledTabs = styled.div`
  display: grid;
  margin-bottom: ${props => props.theme.max_component_vertical_distance};
  /* background-color: rgb(250,250,250); */
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
const StyledTabHorizontalScroll = styled.div` 
    grid-column-start: 2;   
    
    display: grid;
    grid-template-columns: repeat(auto-fill, 107px);
    /* grid-row-gap: 12px; */
    padding-bottom: ${props => props.theme.min_component_vertical_distance} ;
    margin-bottom: ${props => props.theme.min_component_vertical_distance} ;
 
    
    /* border-bottom: solid 1px; 
    border-color: ${props => props.theme.divider_gray} ; */

    /* background-color: rgb(240, 240, 240); */    
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
      const { onClickTabItem, props: {children,}, state: {activeTab,}
            } = this;
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
            {/* <div className="TabContentWrapper">
              <TabContent category={activeTab}/>
            </div>             */}
          </StyledTabHorizontalScroll>
          <TabContent category={activeTab}/>
        </StyledTabs>
          
         
      );
    }
  }
  
  export default Tabs;