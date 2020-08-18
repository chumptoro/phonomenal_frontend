import Link from 'next/link';
import styled from 'styled-components';
import React, { Component } from "react";
import PropTypes from 'prop-types';
import TabLabel from './TabLabel.js';
import TabContent from './TabContent.js';

//* reference: https://www.digitalocean.com/community/tutorials/react-tabs-component

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

          <TabContent category={activeTab}/>
        </div>
      );
    }
  }
  
  export default Tabs;