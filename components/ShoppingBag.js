import Link from 'next/link';
import styled from 'styled-components';
import {css} from 'styled-components';
import React, { Component } from "react";
import { Link as InternalLink } from 'react-scroll';
import PropTypes from 'prop-types';
import { Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';

import calcTotalPrice from '../lib/calcTotalPrice';
import formatMoney from '../lib/formatMoney';

import {StyledNoSetNumberOfRowItemsResponsiveGrid, StyledPropsSetNumberOfRowItemsResponsiveGrid, ResponsiveGridLeftRightMargin, ResponsiveGridHideFooter} from "./Styling/Responsive_Grids";
import {StyledButton} from "./Styling/Button";
import Signin from './Signin';
import ShoppingBagItem from './ShoppingBagItem';
import User from './Patron';
import RemoveFromShoppingBag from './RemoveFromShoppingBag'; 

const OuterGrid = styled.div`
	${ResponsiveGridHideFooter}   
	/* background-color: yellow; */
`;
const ShoppingBagGrid = styled.div`
	display: grid;
	${ResponsiveGridLeftRightMargin}
	grid-row-gap: ${props => props.theme.tiny_component_vertical_distance};
`;
const LevelTwoHeader = styled.h2`
  /* padding-left: 8px; */
`;
const EditButton = styled("a")`
	margin-top: ${props => props.theme.tiny_component_vertical_distance};
	margin-bottom: ${props => props.theme.tiny_component_vertical_distance};
	padding-top: 3px;
	font-size: ${props => props.theme.font_size_content};
  background-color: ${props => props.theme.ui_actionable_green} ;
	color: white;
	&:hover {
	color: white ;
	background-color: ${props => props.theme.ui_actionable_selected_green} ;
  /* color: ${props => props.theme.ui_actionable_selected_green} ;  */
	}
  cursor: pointer;
	transition: all 0.25s;
`;

const EditPencil = styled('a') `
  cursor: pointer;
`;
const EachOrderItem = styled(StyledPropsSetNumberOfRowItemsResponsiveGrid)`
	grid-column-start: 2;
	/* margin: auto; */
  grid-template-columns: 200px repeat(3, 10%);
`;
const OrderItemData = styled.div`
	margin-top: ${props => props.theme.tiny_component_vertical_distance};
	margin-bottom: ${props => props.theme.tiny_component_vertical_distance};
	padding: 3px;
`;
const StyledHeadingWrapper = styled(EachOrderItem)`
  margin-top: 10px;
`;

// //the variables ($description, $title) are given to CREATE_ITEM_MUTATION using apollo's <Mutation>,which has a variables prop (see below)
const ALL_ORDER_ITEMS_QUERY = gql`
  query ALL_ORDER_ITEMS_QUERY  {
    orderItems 
    {
	  	quantity
	  	special_instruction
	  	price
	  	dish_name
			id
    }
  }
`;

class Shopping_Bag extends Component {
	state = {
    /* totalPrice: 0 */
  }
	render() {
		const { } = this.props;
		var num=4;
		return (
    <User>
      {({ data }) => {
        const me = data ? data.me : null;
        console.log(me);
        if (!me) return (
          <Signin redirect="/shopping_bag" title="Please Sign in First!"/>
        );
        else if (me.shopping_bag.length==0) 
            return (
              <OuterGrid>
                <ShoppingBagGrid>
                    <StyledHeadingWrapper col_num={4}>
                        <LevelTwoHeader>Your Shopping Bag is Empty</LevelTwoHeader>
                    </StyledHeadingWrapper>
                </ShoppingBagGrid>
              </OuterGrid>
            );
        
        //Router.push({ pathname: '/signinfirstplease' });
        else {
          return (
            <OuterGrid>
              <ShoppingBagGrid>
                  <StyledHeadingWrapper col_num={4}>
                      <LevelTwoHeader>{me.first_name}'s Dishes</LevelTwoHeader>
                  </StyledHeadingWrapper>
              </ShoppingBagGrid>

              <ShoppingBagGrid>
                {me.shopping_bag.map(orderitem => {
                  return (
                      <ShoppingBagItem
                        col_num={num} 
                        orderitem={orderitem} 
                        key={orderitem.id} 
                      />
                  );
                }
                )}
              </ShoppingBagGrid>

              <ShoppingBagGrid>
                  <StyledHeadingWrapper col_num={4}>
                      <LevelTwoHeader>Your Check</LevelTwoHeader>
                  </StyledHeadingWrapper>
              </ShoppingBagGrid>

              <ShoppingBagGrid>
                  <EachOrderItem col_num={4}>
                      <OrderItemData>Subtotal</OrderItemData>
                      <OrderItemData>${calcTotalPrice(me.shopping_bag)}</OrderItemData>
                  </EachOrderItem>
                  <EachOrderItem col_num={4}>
                      <OrderItemData>Estimated taxes</OrderItemData>
                      <OrderItemData>$2.69</OrderItemData>
                  </EachOrderItem>
                  <EachOrderItem col_num={4}>
                      <OrderItemData>Delivery</OrderItemData>
                      <OrderItemData>$4.99</OrderItemData>
                  </EachOrderItem>
              </ShoppingBagGrid>
            </OuterGrid>
        ) 
        }

        
        
      }}
    </User>
		);
	}
};




class Shopping_Bagi extends Component {
	state = {
    /* totalPrice: 0 */
  }
	render() {
		const { } = this.props;
		var num=4;
		return (
    <User>
      {({ data }) => {
        return(
        <OuterGrid>
          <ShoppingBagGrid>
              <StyledHeadingWrapper col_num={4}>
                  <LevelTwoHeader>Your Dishes</LevelTwoHeader>
              </StyledHeadingWrapper>
          </ShoppingBagGrid>
          
          <Query 
            // fetchPolicy="no-cache" 
            query={ALL_ORDER_ITEMS_QUERY} 
            variables={this.state}>
            {
              ({data, loading, error}) => {
                if (loading) return <p>Loading...</p>;
                if (error) return <p>Error: {error.message}</p>;
                if (data) {
                  console.log(data);
                  //console.log(calculateTotalPrice(data.orderItems));
                  return (
                    <ShoppingBagGrid>
                      {data.orderItems.map(orderitem => {
                        return (
                        <EachOrderItem 
                          col_num={num} 
                          item={orderitem} 
                          key={orderitem.id} 
                        >
                          <OrderItemData>{orderitem.dish_name}</OrderItemData>
                          <OrderItemData>${orderitem.price}</OrderItemData>
                          <OrderItemData>{orderitem.quantity}x</OrderItemData>
                          <EditButton>edit</EditButton>
                        </EachOrderItem>);
                      }
                      )}
                    </ShoppingBagGrid>
                  );
                }
              }
            }
          </Query>

          <ShoppingBagGrid>
              <StyledHeadingWrapper col_num={4}>
                  <LevelTwoHeader>Your Check</LevelTwoHeader>
              </StyledHeadingWrapper>
          </ShoppingBagGrid>

          <ShoppingBagGrid>
              <EachOrderItem col_num={4}>
                  <OrderItemData>Subtotal</OrderItemData>
                  
              </EachOrderItem>
              <EachOrderItem col_num={4}>
                  <OrderItemData>Estimated taxes</OrderItemData>
                  <OrderItemData>$2.69</OrderItemData>
              </EachOrderItem>
              <EachOrderItem col_num={4}>
                  <OrderItemData>Delivery</OrderItemData>
                  <OrderItemData>$4.99</OrderItemData>
              </EachOrderItem>
          </ShoppingBagGrid>
        </OuterGrid>
        )
      }}
    </User>
		);
	}
};

export default Shopping_Bag;
