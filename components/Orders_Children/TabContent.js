import React, { Component } from "react";
import styled from 'styled-components';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';

import TabContentItem from './TabContentItem.js';

var dummy_data_point = {"name":"Pho Tai", "image":"photai.jpeg", "description": "rice noodle and beef broth topped with rare steak", "id":"1"};
var dummy_data_point_two = {"name":"Pho Tai Gau", "image":"photai.jpeg", "description": "rice noodle and beef broth topped with rare steak and fatty cuts", "id":"1"};
var data_array = [dummy_data_point, dummy_data_point, dummy_data_point_two, dummy_data_point, dummy_data_point, dummy_data_point, dummy_data_point, dummy_data_point, dummy_data_point, dummy_data_point, dummy_data_point, dummy_data_point, dummy_data_point, dummy_data_point, dummy_data_point];


const wrapper_for_grid_coloring = styled.div`
    background-color: rgb(250,250,250);
`;

const StyledTabContent = styled.div`
  /* grid-column-start: 1;
  grid-column-end: 4;
  background-color: rgb(250,250,250);   */
  grid-column-start: 2;
  
`;


const StyledItemsList = styled.div`
grid-column-start: 2;   
  display: grid;
  /* align-items: center; */
  grid-template-columns: repeat(auto-fit, minmax(410px, 1fr));
  grid-gap: 30px;
  margin-top: ${props => props.theme.min_component_vertical_distance}; 
  /* background-color: ${props => props.theme.divider_gray}; */
  /* grid-auto-flow: column; */
  /* margin: 0 auto; */
  /* overflow-x: initial; */
`;

const LevelTwoHeader = styled.h2`
  margin-bottom:0;
  margin-top:${props => props.theme.max_component_vertical_distance}
`;


class TabContent extends Component {
    static propTypes = {
      // activeTab: PropTypes.string.isRequired,
      // label: PropTypes.string.isRequired,
      // onClick: PropTypes.func.isRequired,
    };
    //onClick = () => {
      // const { label, onClick } = this.props;
      // onClick(label);
    //}
    render() {
      // const { onClick, props: {activeTab, label,}, } = this;
      
      // let className = 'tab-list-item';
  
      // if (activeTab === label) {
      //   className += ' tab-list-active';
      // }
      return (
        // <wrapper_for_grid_coloring>

        
        <StyledTabContent>
          <LevelTwoHeader>Signature Pho</LevelTwoHeader>
          <StyledItemsList>
          {data_array.map(item => <TabContentItem item={item} key={item.id} category={this.props.category} />)}
          </StyledItemsList>
        </StyledTabContent>

        // </wrapper_for_grid_coloring>

      );
    }
}
export default TabContent;