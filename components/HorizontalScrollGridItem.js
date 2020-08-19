import Link from 'next/link';
import styled from 'styled-components';
import React, { Component } from "react";

var gutter = 1;
const StyledTabHorizontalScroll = styled.div`
    grid-column-start: 2;

    display: grid;
    grid-gap: calc(${gutter}px / 2);
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    /* grid-template-rows: 1fr; */
    grid-auto-flow: column; 
    overflow-x: auto;
    scroll-snap-type: x proximity;
    grid-template-rows: minmax(150px, 1fr); 
    padding-bottom: calc(.75 * ${gutter}px);
    margin-bottom: calc(-.25 * ${gutter}px); 
    grid-auto-columns: calc(50% - ${gutter}px * 2);
`;


class HorizontalScrollGridItem extends Component {
    // static propTypes = {
    //   children: PropTypes.instanceOf(Array).isRequired,
    // }
    // state = {
    //     activeTab: this.props.children[0].props.label,
    // }
    // onClickTabItem = (tab) => {
    //   this.setState({ activeTab: tab });
    // }
    render() {
      return (
        
          <StyledTabHorizontalScroll>
            <div>lets make sure this thing works</div>
            <div>lets make sure this thing works</div>
            <div>lets make sure this thing works</div>
            <div>lets make sure this thing works</div>
            <div>lets make sure this thing works</div>
            <div>lets make sure this thing works</div>
            <div>lets make sure this thing works</div>
            <div>lets make sure this thing works</div>
            <div>lets make sure this thing works</div>
            <div>lets make sure this thing works</div>
            <div>lets make sure this thing works</div>
            <div>lets make sure this thing works</div>
            <div>lets make sure this thing works</div>
            <div>lets make sure this thing works</div>
            <div>lets make sure this thing works</div>
            <div>lets make sure this thing works</div>
          </StyledTabHorizontalScroll>
          
        
      );
    }
  }

  export default HorizontalScrollGridItem;
