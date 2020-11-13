import React, { Component } from "react";
import styled from 'styled-components';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import TabContentItem from './TabContentItem.js';

const ALL_DISHES_QUERY = gql`
  query ALL_DISHES_QUERY {
    dishes (orderBy:menu_order_ASC) {
      id
		  name
      description
      image
      price
      menu_order
      category {
        name
      }
    }
  }
`;
const ALL_DISH_CATEGORIES_QUERY = gql`
  query ALL_DISH_CATEGORIES_QUERY {
    categories (orderBy:order_ASC) {
		  name
      display_name
      order
    }
  }
`;

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
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${props => props.theme.dish_thumbnail_width_desktop}, 1fr));


  grid-gap: 30px;
  @media only screen and (max-width: ${props => props.theme.dish_thumbnail_screensize_where_one_dish_takes_up_entire_row}) {
    grid-row-gap: 0px;
  }

    /* iPhone 6,7,8 */
  @media only screen 
    and (min-device-width : ${props => props.theme.screen_width_iphone678X_min})
    and (max-device-width : ${props => props.theme.screen_width_iphone678_max})
    and (-webkit-device-pixel-ratio : 3) {
      grid-template-columns: 1fr;
  }




  margin-top: ${props => props.theme.min_component_vertical_distance}; 
`;

const LevelTwoHeader = styled.h2`
  margin-bottom:0;
  margin-top:${props => props.theme.max_component_vertical_distance}
`;


class DishesUnderEachCategory extends Component {
  render() {
    const { category } = this.props;
    return (
      <div id={category.display_name}>

        <LevelTwoHeader>{category.display_name}</LevelTwoHeader>
        <Query query={ALL_DISHES_QUERY}>
          {
            ({ data, error, loading }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error: {error.message}</p>;
            {/* console.log (data); */}
            {/* console.log(data.dishes[1].name); */}
            return (
              <StyledItemsList>
                {data.dishes.filter(function(item) {
                  {/* console.log("item.category's name is " +item.category.name);  */}return item.category.name == category.name ;}).map(item => <TabContentItem item={item} key={item.id} />)}
              </StyledItemsList> 
            );
            }
          }
        </Query>
      </div>      
    )
  }
};


class TabContent extends Component {
  render() {
    return (
      <Query query={ALL_DISH_CATEGORIES_QUERY}>
        {
          ({ data, error, loading }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error: {error.message}</p>;
            return (
              <StyledTabContent>
              {data.categories.map(
                category => 
                  <DishesUnderEachCategory category={category} key={category.id}/>
              )}
              </StyledTabContent>
            );
          }
        }
      </Query>
    );
  }
}

{/* <StyledItemsList>{data.dishes.map(item => <TabContentItem item={item} key={item.id} />)}</StyledItemsList>  */}

export default TabContent;

var dummy_data_point = {"name":"Pho Tai", "image":"photai.jpeg", "description": "rice noodle and beef broth topped with rare steak", "id":"1"};
var dummy_data_point_two = {"name":"Pho Tai Gau", "image":"photai.jpeg", "description": "rice noodle and beef broth topped with rare steak and fatty cuts", "id":"1"};
var data_array = [dummy_data_point, dummy_data_point, dummy_data_point_two, dummy_data_point, dummy_data_point, dummy_data_point, dummy_data_point, dummy_data_point, dummy_data_point, dummy_data_point, dummy_data_point, dummy_data_point, dummy_data_point, dummy_data_point, dummy_data_point];