import Link from 'next/link';
import styled from 'styled-components';
import React, { Component } from "react";
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

var gutter = 1;

const StyledTabHorizontalScroll = styled.div`
  
  display: grid;
  /* grid-gap: calc(${gutter}px / 2); */
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  /* grid-template-rows: 1fr; */
  
  grid-auto-flow: column; 
  overflow-x: auto;
  scroll-snap-type: x proximity;
  grid-template-rows: minmax(150px, 1fr); 
  /* padding-bottom: calc(.75 * ${gutter}px);
  margin-bottom: calc(-.25 * ${gutter}px); */
  /* grid-auto-columns: 100px; */
  
  
  /* overflow: auto;
  white-space: nowrap;
  min-width: 0; */
/*   
  display: flex;
  background-color: #2c3e50;
  min-width: 100%;
  min-height: 200px;
  overflow-x: auto; 
   */
  
  


  ::scrollbar {
  display: none;
}
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
        <div>
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
          
            {/* <div>
              {children.map((child) => {
                if (child.props.label !== activeTab) return undefined;
                return child.props.children;
              })}
            </div> */}

          </StyledTabHorizontalScroll>
          <TabContent category={activeTab}/>
          
        </div>
      );
    }
  }
  
  export default Tabs;