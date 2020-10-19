import Link from 'next/link';
import styled from 'styled-components';
import React, { Component } from "react";
import { Link as InternalLink } from 'react-scroll';
import PropTypes from 'prop-types';

import { Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';

import {StyledNoSetNumberOfRowItemsResponsiveGrid, StyledPropsSetNumberOfRowItemsResponsiveGrid} from "../components/Styling/Responsive_Grids";

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

const EachOrderItem = styled(StyledPropsSetNumberOfRowItemsResponsiveGrid)`

`;

const LevelTwoHeader = styled.h2`
  margin-bottom:0;
  margin-top:${props => props.theme.max_component_vertical_distance}
`;

class Shopping_Bag extends Component {
	state = {
	}
	render() {
        const { } = this.props;
		return (
            <div>
            <LevelTwoHeader>Your Dishes</LevelTwoHeader>
			<Query fetchPolicy="no-cache" query={ALL_ORDER_ITEMS_QUERY} variables={this.state}>
				{
					({data, loading, error}) => {
                        var num=3;
						{/* console.log(data); */}
						if (loading) return <p>Loading...</p>;
						if (error) return <p>Error: {error.message}</p>;
						if (data) {
							console.log(data);
                            return (
                                <StyledNoSetNumberOfRowItemsResponsiveGrid>
                                    {data.orderItems.map(orderitem => <EachOrderItem 
                                        col_num={num} 
                                        item={orderitem} 
                                        key={orderitem.id} 
                                    >
                                        <div>{orderitem.quantity}x</div>
                                        <div>{orderitem.dish_name}</div>
                                        <div>${orderitem.price}</div>
                                    </EachOrderItem>
                                    )}
                                </StyledNoSetNumberOfRowItemsResponsiveGrid>
                            );
						}
					}
				}
			</Query>
            </div>
			
		);
	}
};

export default Shopping_Bag;