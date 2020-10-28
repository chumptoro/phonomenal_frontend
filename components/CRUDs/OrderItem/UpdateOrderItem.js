import React, { Component } from 'react';
import styled from 'styled-components';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import StyledInputForm from "../../Styling/Form";
import {StyledButton, StyledWindowTopBarCloseXSymbolButton, ButtonRow} from "../../Styling/Button";

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

//if the endpoint for config.js were https://us1.prisma.sh/mark-pham-beaff5/onlinestore2/dev
// const UPDATE_ORDER_ITEM_MUTATION = gql`
// 	mutation UPDATE_ORDER_ITEM_MUTATION ($id: ID $quantity: Int $special_instruction: String $price: Float) 
// 	{
// 		updateOrderItem  ( 
// 			data: {
// 				quantity:  $quantity
// 				special_instruction: $special_instruction
// 				price: $price,
// 			}
// 			where: {
// 					id: $id
// 			}
// 		) {
// 		  id		
// 		}
// 	}
// `;

//endpoint for config.js is localhost:4444
const UPDATE_ORDER_ITEM_MUTATION = gql`
	mutation UPDATE_ORDER_ITEM_MUTATION ($id: ID $quantity: Int $special_instruction: String $price: Float) 
	{
		reviseOrderItem  ( 
				quantity:  $quantity
				special_instruction: $special_instruction
				price: $price
				id: $id
		) {
		  id		
		}
	}
`;


class UpdateOrderItem extends Component {
	state = {
        special_instruction: this.props.data.orderItems[this.props.data.orderItems.length-1].special_instruction,
        quantity: this.props.data.orderItems[this.props.data.orderItems.length-1].quantity,
        price: this.props.data.orderItems[this.props.data.orderItems.length-1].price,
        id: this.props.data.orderItems[this.props.data.orderItems.length-1].id,

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
					(reviseOrderItem, {loading, error}) => (

						<StyledInputForm 
							order_item_created={this.props.order_item_created} 
              order_item_update_first_time_shown={this.props.order_item_update_first_time_shown}
						>
							<div className="input_wrapper">
                <div className="label">
                {this.props.parent_props.dish.name}
                </div>
								<input 
									type="text" name="special_instruction" 
									placeholder="  &#9999;  enter requests or instructions"
									value={this.state.special_instruction} 
									className="text_input_box" 
									onChange={this.handleChange} />
							</div>
							<div className="input_wrapper">
							<div className="label">
								number of orders
							</div>
							<input type="number" name = "quantity"  min="1" value={this.state.quantity} className="number_input_box" onChange={this.handleChange} />
							</div>
							<div className="input_wrapper message"> &#10004; added to your shopping bag  <span>&#10024;</span> </div>

                            <ButtonRow>
                                <StyledWindowTopBarCloseXSymbolButton onClick= {   
                                        async e => {
																						e.preventDefault();
																						const res = await reviseOrderItem();
																						//console.log(res);
                                            const x = await this.props.onSubmission();
                                            this.props.hideModal();
                                            console.log(
                                                "close modal button is clicked.  order_item_created is " + this.props.order_item_created + ". order_item_update_first_time_shown is " + this.props.order_item_update_first_time_shown
                                            );
                                        }
							        }
                                >

								</StyledWindowTopBarCloseXSymbolButton>
                                <StyledAddMoreButton
                                    onClick= {   
                                        async e => {
								            e.preventDefault();
								            const res = await reviseOrderItem();
								            //console.log(res);
                                            const x = await this.props.onSubmission();
                                            this.props.hideModal();
                                            console.log(
                                                "add another dish button is clicked.  order_item_created is " + this.props.order_item_created + ". order_item_update_first_time_shown is " + this.props.order_item_update_first_time_shown
                                            );
                                        }
							        }
                                >
                                    add other dishes
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
                                    hideModal={this.props.hideModal}
                                />
                            </ButtonRow>
						</StyledInputForm>
					)
				}
			</Mutation>
		);
	}
};

export default UpdateOrderItem;
