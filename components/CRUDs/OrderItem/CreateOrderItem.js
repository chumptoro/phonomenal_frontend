import React, { Component } from 'react';
import styled from 'styled-components';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import StyledOrderItemDetail from "../../Styling/Form";
import {StyledButton, ButtonRow} from "../../Styling/Button";

const StyledAddItemButton = styled(StyledButton)`
  grid-column: 1 / -1;
  grid-row-start: 90;
  display: ${props => (props.order_item_created ? 'none' : 'block')};
`;

const StyledCheckOutButton = styled(StyledButton)`
  text-align: center;
  width: auto;
  height: auto;
  display: ${props => (props.order_item_created ? 'block' : 'none')};
`;

const StyledAddMoreButton = styled(StyledCheckOutButton)`
`;

const ShowHideController = styled.div`
	/* display: ${props => (props.order_item_created ? 'none' : 'block')}; */
`;



//the below says: run a CREATE_ITEM_MUTATION function with $title, $description, etc... arguments.  This function will then call a function createItem we specifies in our schema

//the variables ($description, $title) are given to CREATE_ITEM_MUTATION using apollo's <Mutation>,which has a variables prop (see below)
const CREATE_ORDER_ITEM_MUTATION = gql`
	mutation CREATE_ORDER_ITEM_MUTATION ($dish_id: ID $quantity: Int $special_instruction: String $price: Float $dish_name: String) 
	{
		createOrderItem(
			data: {
				quantity:  $quantity
				special_instruction: $special_instruction
				price: $price,
				dish_id: $dish_id
				dish: { connect: {id: $dish_id}},
				dish_name: $dish_name,
			}
		) {
		  id		
		}
	}
`;

class CreateOrderItem extends Component {
	state = {
		dish_id: this.props.dish.id,
		dish_name:this.props.dish.name,
		quantity:1,
		special_instruction:'',
		price: parseFloat(this.props.dish.price),
	}

	//if we  use this arrow property, there is no need to bind handleChange to the cirrect this,  it wil be handled
	handleTextInputChange = (e) => {
		const { name, type, value } = e.target;
		var val = type === 'number'? parseFloat(value) : value;
		if (name === "quantity") {
			this.setState({ price: val*parseFloat(this.props.dish.price)});
		} 
		//we can let the state change field dynanically by using a placeholder in side [ ] (see JS's computed property name)
		this.setState({[name]:val});
		// console.log("order item field currently has value " + this.statex[name]);
		// console.log("changing ore item field value to " + e.target.value);
	}
	render() {
		return (
			<ShowHideController  order_item_created={this.props.order_item_created} >
			<Mutation mutation={CREATE_ORDER_ITEM_MUTATION} variables={this.state}>
				{
					(createOrderItem, {loading, error}) => (

						<StyledOrderItemDetail 
							order_item_created={this.props.order_item_created} 
						>
							<div className="box">
							<div className="title">
								{this.props.dish.name}
							</div>
								<input type="text" name="special_instruction" placeholder="  &#9999;  enter any special instructions" className="text_input_box"  onChange={e => this.handleTextInputChange(e)} />
							</div>
							<div className="box">
							<div className="title">
								number of orders
							</div>
							<input type="number" name = "quantity"  min="1" className="number_input_box" onChange={e => this.handleTextInputChange(e)} />
							</div>
							<div className="box message"> &#10004; added to your shopping bag  <span>&#10024;</span> </div>

							<StyledAddItemButton 
							order_item_created={this.state.order_item_created} 
							onClick={ async e => {
								e.preventDefault();
								const res = await createOrderItem();
								console.log("res is " + res);
								this.props.onCreated();
								// Router.push({
								// 	pathname: '/item',
								// 	query: { id: res.data.createItem.id }
								// })
							}}
							>
							add item
							</StyledAddItemButton>
						</StyledOrderItemDetail>
					)
				}
			</Mutation>
			</ShowHideController>
		);
	}
};

export default CreateOrderItem;
export { CREATE_ORDER_ITEM_MUTATION };