import Link from 'next/link';
import styled from 'styled-components';
import {css} from 'styled-components';
import React, { Component } from "react";
import { Link as InternalLink } from 'react-scroll';
import PropTypes from 'prop-types';

import { Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';

import {Consumer} from '../components/Context';

import ContextDescendantUpdateTotalPrice from "../components/Order_Context_Children/ContextDescendantUpdateTotalPrice";

import {StyledNoSetNumberOfRowItemsResponsiveGrid, StyledPropsSetNumberOfRowItemsResponsiveGrid, ResponsiveGridLeftRightMargin, ResponsiveGridHideFooter} from "../components/Styling/Responsive_Grids";

import {StyledButton} from "../components/Styling/Button";

//the variables ($description, $title) are given to CREATE_ITEM_MUTATION using apollo's <Mutation>,which has a variables prop (see below)
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


const OuterGrid = styled.div`
    ${ResponsiveGridHideFooter}   
    /* background-color: yellow; */
`;

const ShoppingBagGrid = styled.div`
    display: grid;
    ${ResponsiveGridLeftRightMargin}
    grid-row-gap: ${props => props.theme.tiny_component_vertical_distance};
    
`;

const EachOrderItem = styled(StyledPropsSetNumberOfRowItemsResponsiveGrid)`
    grid-column-start: 2;
    /* margin: auto; */
`;

const StyledHeadingWrapper = styled(EachOrderItem)`
    margin-top: 10px;
`;

const LevelTwoHeader = styled.h2`
    padding-left: 8px;
`;

const EditButton = styled(StyledButton)`
    margin-top: ${props => props.theme.tiny_component_vertical_distance};
    margin-bottom: ${props => props.theme.tiny_component_vertical_distance};
    padding: 8px;
    
    /* font-weight: normal */;
    font-size: ${props => props.theme.font_size_content};

    background-color: white ;
    color: ${props => props.theme.ui_actionable_green} ;

    cursor: pointer;

    &:hover {
    color: white ;
    background-color: ${props => props.theme.ui_actionable_selected_green} ;
   
    }

    transition: all 0.25s;
`;

const OrderItemData = styled.div`
    margin-top: ${props => props.theme.tiny_component_vertical_distance};
    margin-bottom: ${props => props.theme.tiny_component_vertical_distance};
    padding: 8px;
`;


class Shopping_Bag extends Component {
	state = {
        /* totalPrice: 0 */
    }
    

	render() {
        const { } = this.props;
        var num=4;
        var totalPrice=0;
		return (
            <Consumer>
            {context => (
           
            <OuterGrid>
            <ShoppingBagGrid>
                <StyledHeadingWrapper col_num={4}>
                    <LevelTwoHeader>Your Dishes</LevelTwoHeader>
                </StyledHeadingWrapper>
            </ShoppingBagGrid>
            
			<Query fetchPolicy="no-cache" query={ALL_ORDER_ITEMS_QUERY} variables={this.state}>
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
                                        totalPrice = totalPrice + parseFloat(orderitem.price);
                                        console.log(totalPrice);
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
                    <OrderItemData>${context.state.total_price}</OrderItemData>
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
            )}
            </Consumer>
			
		);
	}
};

export default Shopping_Bag;