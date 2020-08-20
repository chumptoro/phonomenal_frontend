import React, { Component } from "react";
import styled from 'styled-components';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';

import TabContentItem from './TabContentItem.js';

var dummy_data_point = {"name":"Pho Tai", "image":"photai.jpeg", "description": "rice noodle and beef broth topped with rare steak", "id":"1"};
var data_array = [dummy_data_point, dummy_data_point, dummy_data_point, dummy_data_point, dummy_data_point, dummy_data_point, dummy_data_point, dummy_data_point, dummy_data_point, dummy_data_point, dummy_data_point, dummy_data_point, dummy_data_point, dummy_data_point, dummy_data_point];

const StyledItemsList = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-gap: 30px;
  /* grid-auto-flow: column; */
  /* margin: 0 auto; */
  /* overflow-x: initial; */
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
        <StyledItemsList>
        {data_array.map(item => <TabContentItem item={item} key={item.id} category={this.props.category} />)}
        </StyledItemsList>
      );
    }
}
export default TabContent;