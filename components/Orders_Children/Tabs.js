import Link from 'next/link';
import styled from 'styled-components';
import React, { Component } from "react";
import PropTypes from 'prop-types';
import TabLabel from './TabLabel.js';
import TabContent from './TabContent.js';

//* reference: https://www.digitalocean.com/community/tutorials/react-tabs-component

var gutter = 1;

const StyledTabHorizontalScroll = styled.div`
  display: grid;
  grid-gap: calc(${gutter}px / 2);
  /* grid-template-columns: 10px; */
 
  /* grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));*/
  /* grid-auto-flow: column;  */
   

  overflow-x: scroll;
  scroll-snap-type: x proximity;

  /* grid-template-rows: minmax(150px, 1fr); */
  /* padding-bottom: calc(.75 * ${gutter}px);
  margin-bottom: calc(-.25 * ${gutter}px); */
  /* grid-auto-columns: calc(50% - ${gutter}px * 2); */
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