import React, { Component } from "react";
import styled from 'styled-components';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';

const StyledItem = styled.div`
  border: solid 1px ${props => props.theme.divider_gray};
  border-radius: 2.5px;
  margin: 0px;
  padding: 20px;

  display: grid;
  grid-template-columns: 1fr 129px;
  grid-column-gap: 20px;

  line-height: ${props => props.theme.line_height_between_paragraphs};
  /* .item_photo {
    float: right;
  } */
  
`;

const DishName = styled.div`
  font-weight: ${props => props.theme.font_weight_normal};
  font-size: ${props => props.theme.font_size_title_small};
  
`;
const DishDescription = styled.div`
  /* font-weight: ${props => props.theme.font_weight_light}; */
  line-height: ${props => props.theme.line_height_content};
  color:${props => props.theme.content_gray};
`;
const Price = styled.div`
  /* font-weight: ${props => props.theme.font_weight_bold}; */
  color:${props => props.theme.green};
`;
const PriceCompare = styled.small`
  /* text-decoration: line-through; */
  color: black;

`;

class TabContentItem extends Component {
    static propTypes = {
      // activeTab: PropTypes.string.isRequired,
      // label: PropTypes.string.isRequired,
      // onClick: PropTypes.func.isRequired,
    }
    onClick = () => {
      // const { label, onClick } = this.props;
      // onClick(label);
    }
    render() {
      //const { onClick, props: {activeTab, label,}, } = this;
    
      const { item } = this.props;

      return (
        <StyledItem>
          <div>
            <DishName>{item.name}</DishName>
            <DishDescription>{item.description}</DishDescription>
            <Price>
              ${item.price} <PriceCompare> </PriceCompare>
            </Price>
          </div>
          <div><img src={item.image} alt="" width="128px" height="128px" /></div>

          {/* <div className="item_photo">hi</div> */}

        </StyledItem>
      );
    }
}

export default TabContentItem;