import React, { Component } from 'react';
import styled from 'styled-components';
import { Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';

import {StyledButton, ButtonRow} from "../../Styling/Button";

import UpdateOrderItem from "./UpdateOrderItem";

const StyledAddItemButton = styled(StyledButton)`
  grid-column: 1 / -1;
  grid-row-start: 90;
 /*  display: ${props => (props.order_item_created ? 'none' : 'block')}; */
`;

const StyledCheckOutButton = styled(StyledButton)`
  text-align: center;
  width: auto;
  height: auto;
  /* display: ${props => (props.order_item_created ? 'block' : 'none')}; */
`;

const StyledAddMoreButton = styled(StyledCheckOutButton)`
`;

const ShowHideControllerUpdateOrderItem = styled.div`
	/* display: ${props => (props.order_item_created ? 'block' : 'none')}; */
`;



//the below says: run a CREATE_ITEM_MUTATION function with $title, $description, etc... arguments.  This function will then call a function createItem we specifies in our schema

//the variables ($description, $title) are given to CREATE_ITEM_MUTATION using apollo's <Mutation>,which has a variables prop (see below)
const ONE_ORDER_ITEM_QUERY = gql`
  query ONE_ORDER_ITEM_QUERY ($dish_id: ID) {
    orderItems(where: {dish_id: $dish_id}) 
    {
	  	quantity
	  	special_instruction
	  	price
	  	dish_name
		id
    }
  }
`;

class QueryOrderItem extends Component {
	state = {
		dish_id: this.props.dish.id,
		dish_name:this.props.dish.name, 
	}
	render() {
		return (
			<Query fetchPolicy="no-cache" query={ONE_ORDER_ITEM_QUERY} variables={this.state}>
				{
					({data, loading, error}) => {
						{/* console.log(data); */}
						if (loading) return <p>Loading...</p>;
						if (error) return <p>Error: {error.message}</p>;
						if (data) {
							console.log("data is ");
							console.log(data);
							console.log("special instruction of queried order item is: " + data.orderItems[data.orderItems.length-1].special_instruction);
							console.log("id of queried order item is: " + data.orderItems[data.orderItems.length-1].id);
							{/* console.log("order_item exists and has value " +  sessionStorage.getItem("order_item_created") ); */}
							return (
								<UpdateOrderItem
									data ={data}
								 	parent_props={this.props} 
								 	onUpdate={this.handleTextInputChange}
									order_item_update_first_time_shown={this.props.order_item_update_first_time_shown}
									order_item_created={this.props.order_item_created}
									onSubmission={this.props.onSubmission}
									onReset={this.props.onReset}
									hideModal={this.props.hideModal}
								/>
							); 
						}
					}
				}
			</Query>
			
		);
	}
};


export default QueryOrderItem;
// export { CREATE_ORDER_ITEM_MUTATION };