import React, { Component } from 'react';
import styled from 'styled-components';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import StyledOrderItemDetail from "../../Styling/Form";
import {StyledButton, ButtonRow} from "../../Styling/Button";


const StyledDeleteButton = styled(StyledButton)`
  text-align: center;
  width: auto;
  height: auto;
  background-color: ${props => props.theme.ui_actionable_lightgrey} ;
  /* padding-left:1px;
  padding-right:1px; */


  &:hover {
    background-color: ${props => props.theme.ui_actionable_selected_lightgrey} ;
  }

  /* display: ${props => (props.order_item_created ? 'block' : 'none')}; */
`;

const DELETE_ORDER_ITEM_MUTATION = gql`
	mutation DELETE_ORDER_ITEM_MUTATION ($id: ID) 
	{
		deleteOrderItem (
			where: {
				id: $id
			}
		) {
		  id		
		}
	}
`;

class DeleteOrderItem extends Component {
	state = {
        id: this.props.id,
    }
	render() {
        console.log("id is " + this.state.id);
		return (
			
				<Mutation mutation={DELETE_ORDER_ITEM_MUTATION} variables={this.state}>
					{
						(deleteOrderItem, {loading, error}) => (
							<StyledDeleteButton
								onClick= {   
									async e => {
										e.preventDefault();
										const res = await deleteOrderItem();
										console.log("item is deleted")
										this.props.onReset();
										this.props.hideModal();
									}
								}
							>
							cancel item
							</StyledDeleteButton>
						)
					}
				</Mutation>
			
		);
	}
};

export default DeleteOrderItem;


