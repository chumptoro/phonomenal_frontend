import React, { Component } from 'react';
import styled from 'styled-components';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import StyledOrderItemDetail from "../../Styling/Form";
import {StyledButton, ButtonRow} from "../../Styling/Button";

import DeleteOrderItem from "./DeleteOrderItem.js";


const StyledAddItemButton = styled(StyledButton)`
  grid-column: 1 / -1;
  grid-row-start: 90;
  /* display: ${props => (props.order_item_created ? 'none' : 'block')}; */
`;

const StyledCheckOutButton = styled(StyledButton)`
  text-align: center;
  width: auto;
  height: auto;
  background-color: ${props => props.theme.red} ;
  /* display: ${props => (props.order_item_created ? 'block' : 'none')}; */
`;

const StyledAddMoreButton = styled(StyledCheckOutButton)`
    background-color: ${props => props.theme.ui_actionable_green} ;
    &:hover {
    background-color: ${props => props.theme.ui_actionable_selected_green} ;
  }
`;

const ShowHideController = styled.div`
	/* display: ${props => (props.order_item_created ? 'none' : 'block')}; */
`;
const UPDATE_ORDER_ITEM_MUTATION = gql`
	mutation UPDATE_ORDER_ITEM_MUTATION ($id: ID $quantity: Int $special_instruction: String $price: Float) 
	{
		updateOrderItem  ( 
			data: {
                quantity:  $quantity
                special_instruction: $special_instruction
                price: $price,
			}
            where: {
                id: $id
            }
		) {
		  id		
		}
	}
`;

class UpdateOrderItem extends Component {
	state = {
        special_instruction: this.props.data.orderItems[0].special_instruction,
        quantity: this.props.data.orderItems[0].quantity,
        price: this.props.data.orderItems[0].price,
        id: this.props.data.orderItems[0].id,

        disable_special_instruction_field: true,
        disable_quantity_field: true,
    }
    
    // //if we  use this arrow property, there is no need to bind handleChange to the cirrect this,  it wil be handled
	// handleChange = (e) => {
    //     /* const { name, type, value } = e.target; */
    //     this.props.onUpdate(e);
    //     console.log(this.state.special_instruction);
    // }
    
    //if we  use this arrow property, there is no need to bind handleChange to the cirrect this,  it wil be handled
	handleChange = (e) => {
		const { name, type, value } = e.target;
		var val = type === 'number'? parseFloat(value) : value;
		if (name === "quantity") 
		{
			this.setState({ price: val*parseFloat(this.props.parent_props.dish.price)});
		} 
		//we can let the state change field dynanically by using a placeholder in side [ ] (see JS's computed property name)
		this.setState({[name]:val});
		console.log("field currently has value " + this.state[name]);
		console.log("changing  field value to " + e.target.value);
    }
    
    handleClose = (e) => {
        console.log("closing...");
    }

	render() {
        console.log("id is " + this.state.id );
		return (
			<Mutation mutation={UPDATE_ORDER_ITEM_MUTATION} variables={this.state}>
				{
					(updateOrderItem, {loading, error}) => (

						<StyledOrderItemDetail 
							order_item_created={this.props.order_item_created} 
                            order_item_update_first_time_shown={this.props.order_item_update_first_time_shown}
						>
							<div className="box">
							<div className="title">
								{this.props.parent_props.dish.name}
							</div>
								<input type="text" name="special_instruction" 
                                value={this.state.special_instruction} 
                                className="text_input_box" 
                                onChange={this.handleChange} />
							</div>
							<div className="box">
							<div className="title">
								number of orders
							</div>
							<input type="number" name = "quantity"  min="1" value={this.state.quantity} className="number_input_box" onChange={this.handleChange} />
							</div>
							<div className="box message"> &#10004; added to your shopping bag  <span>&#10024;</span> </div>

                            <ButtonRow>
                            
                                <StyledAddMoreButton
                                    onClick= {   
                                        async e => {
								            e.preventDefault();
								            const res = await updateOrderItem();
								            //console.log(res);
                                            const x = await this.props.onSubmission();
                                            console.log(
                                                "back_to_menu button is clicked.  order_item_created is " + this.props.order_item_created + ". order_item_update_first_time_shown is " + this.props.order_item_update_first_time_shown
                                            );
                                        }
							        }
                                >
                                    back to menu
                                </StyledAddMoreButton>
                                <StyledCheckOutButton 
                                    onClick= {   
                                        async e => {
								            e.preventDefault();
								            const res = await updateOrderItem();
								            //console.log(res);
                                            const x = await this.props.onSubmission();
                                            console.log(
                                                "check_out button is clicked.  order_item_created is " + this.props.order_item_created + ". order_item_update_first_time_shown is " + this.props.order_item_update_first_time_shown
                                            );
                                        }
							        }
                                >
                                    check out 
                                </StyledCheckOutButton>
                                
                                <DeleteOrderItem 
                                    id={this.state.id}
                                    onReset={this.props.onReset}
                                    order_item_update_first_time_shown={this.props.order_item_update_first_time_shown}
									order_item_created={this.props.order_item_created}
                                />
                            </ButtonRow>
						</StyledOrderItemDetail>
					)
				}
			</Mutation>
		);
	}
};

export default UpdateOrderItem;
