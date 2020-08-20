import Link from 'next/link';
import styled from 'styled-components';
import React, { Component } from "react";
import PropTypes from 'prop-types';


// how to create a rounded line to underline words, suhc as tab labels:
// references:
// https://stackoverflow.com/questions/450903/how-can-i-make-a-div-not-larger-than-its-contents
// https://stackoverflow.com/questions/52872079/how-to-get-a-border-bottom-line-with-rounded-corner
// https://stackoverflow.com/questions/48502647/conditional-rendering-in-styled-components
const StyledTabLabel = styled.div`
  text-align: center;
  padding: 14px 24px 14px 24px;
  /* color: ${props => props.selected? props.theme.red : props.theme.black}; */
  

  div {
    position:relative;
    display: inline-block;
    /* border-bottom: ${props => props.selected? "solid 3px" : "none" } ;*/
    :hover { 
    cursor: pointer;
    }

    ${({ selected }) => selected && `
      ::before {
          content: '';
          position: absolute;
          z-index: -1;
          left: 0;
          right: 0;
          bottom: -7px;
          height: 0;
          border: 1.7px solid;
          border-radius : 100px;
        } 
    `}

    

    
  }



`;

const StyledTabSelectionIndicator = styled.div`


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
  
      if (activeTab === label) {
        return (
          <StyledTabLabel selected onClick={onClick}>
            <div>{label}</div>
          </StyledTabLabel>
  
        );
      }
      return (
        // <div className={className} onClick={onClick}>
        //   {label}
        // </div>
        <StyledTabLabel onClick={onClick}>
          <div>{label}</div>
        </StyledTabLabel>

      );
    }
}

export default TabLabel;