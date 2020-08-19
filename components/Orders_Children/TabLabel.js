import Link from 'next/link';
import styled from 'styled-components';
import React, { Component } from "react";
import PropTypes from 'prop-types';

const StyledTabLabel = styled.div`
  /* text-align: center; */
  margin-right: -100px;
  margin-left: -100px;
  /* display: inline; */
  color: ${props => props.selected? props.theme.red : props.theme.black};

  :hover {
    cursor: pointer;
  }
`;

class TabLabel extends Component {
    static propTypes = {
      activeTab: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
    };
  
    onClick = () => {
      const { label, onClick } = this.props;
      onClick(label);
    }
  
    render() {
      const { onClick, props: {activeTab, label,}, } = this;
  
      // let className = 'tab-list-item';
  
      // if (activeTab === label) {
      //   className += ' tab-list-active';
      // }
  
      if (activeTab === label) {
        return (
          <StyledTabLabel selected onClick={onClick}>
            {label}
          </StyledTabLabel>
  
        );
      }
      return (
        // <div className={className} onClick={onClick}>
        //   {label}
        // </div>
        <StyledTabLabel onClick={onClick}>
          {label}
        </StyledTabLabel>

      );
    }
}

export default TabLabel;