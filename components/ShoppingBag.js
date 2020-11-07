import styled from 'styled-components';
import React, { Component } from "react";
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import Router from 'next/router';
import calcTotalPrice from '../lib/calcTotalPrice';
import {ResponsiveGridLeftRightMargin, ResponsiveGridHideFooter} from "./Styling/Responsive_Grids";
import Signin from './Signin';
import ShoppingBagItem from './ShoppingBagItem';
import User from './Patron';
import {GridSingleRow} from './Styling/Responsive_Grids';
import {StyledButton, CenterButtonInsideGrid} from './Styling/Button';
import TakeMyMoneyWithStripe from './TakeMyMoneyWithStripe';

const OuterGrid = styled.div`
	${ResponsiveGridHideFooter} 
  margin-top:90px;  
	/* background-color: yellow; */
`;
const ShoppingBagGrid = styled.div`
	display: grid;
	${ResponsiveGridLeftRightMargin}
	grid-row-gap: 1vh;
`;
const LevelTwoHeader = styled.h2`
  /* padding-left: 8px; */
`;
const EditPencil = styled('a') `
  cursor: pointer;
`;
const EachOrderItem = styled(GridSingleRow)`
`;
const OrderItemData = styled.div`
	margin-top: ${props => props.theme.tiny_component_vertical_distance};
	margin-bottom: ${props => props.theme.tiny_component_vertical_distance};
	padding: 3px;
`;
const StyledHeadingWrapper = styled(EachOrderItem)`
  margin-top: 10px;
`;

const CheckOutButton = styled(StyledButton)`
  ${CenterButtonInsideGrid}
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
        //console.log(me);
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
              
              <ShoppingBagGrid>
                  <StyledHeadingWrapper col_num={4}> 
                        <TakeMyMoneyWithStripe/>                    
                  </StyledHeadingWrapper>
              </ShoppingBagGrid>

            </OuterGrid>
        ) 
        }
      }}
    </User>
		);
	}
};






export default Shopping_Bag;
