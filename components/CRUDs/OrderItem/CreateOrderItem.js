import React, { Component } from 'react';
import styled from 'styled-components';
import { Mutation, Query } from 'react-apollo';
import {CURRENT_USER_QUERY} from '../../Patron';
import gql from 'graphql-tag';
import StyledInputForm from "../../Styling/Form";
import {StyledButton, StyledWindowTopBarCloseXSymbolButton, ButtonRow} from "../../Styling/Button";
import {Consumer} from '../../Context';
import {adopt} from 'react-adopt';
import Router from 'next/router';

const StyledAddItemButton = styled(StyledButton)`
  grid-column: 1 / -1;
  grid-row-start: 90;
  display: ${props => (props.order_item_created ? 'none' : 'block')};
`;

const StyledCheckOutButton = styled(StyledButton)`
  text-align: center;
  width: auto;
  height: auto;
  /* display: ${props => (props.order_item_created ? 'block' : 'none')}; */
`;

const ShowHideController = styled.div`
	/* display: ${props => (props.order_item_created ? 'none' : 'block')}; */
`;

//the below says: run a CREATE_ITEM_MUTATION function with $title, $description, etc... arguments.  This function will then call a function createItem we specifies in our schema

//the variables ($description, $title) are given to CREATE_ITEM_MUTATION using apollo's <Mutation>,which has a variables prop (see below)

const DELETE_ALL_ORDER_ITEMS_MUTATION = gql`
	mutation DELETE_ALL_ORDER_ITEMS_MUTATION ($dish_id:ID) {
		deleteManyOrderItems (where: {dish_id: $dish_id})
		{
			count	
		}
	}
`;

const CREATE_ORDER_ITEM_MUTATION = gql`
	mutation CREATE_ORDER_ITEM_MUTATION ($dish_id: ID $quantity: Int $special_instruction: String $price: Float $dish_name: String) 
	{
		addOrderItemFromMenu(
				quantity:  $quantity
				special_instruction: $special_instruction
				price: $price
				dish_id: $dish_id
				dish_name: $dish_name
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
	componentDidMount() {
		var dish = localStorage.getItem(this.state.dish_name);
		if (dish) {
			var dish_obj = JSON.parse(dish);
			this.setState({quantity : dish_obj.quantity});
			this.setState({special_instruction : dish_obj.special_instruction});
		}

  }
	handleTextInputChange = async (e) => {
		const { name, type, value } = e.target;
		var val = type === 'number'? parseFloat(value) : value;
		// if (name === "quantity") {	
		// 	this.setState({ price: val*parseFloat(this.props.dish.price)});
		// } 
		this.setState({[name]:val});
		
	}
	handleClose = async (e) => {
		if (this.state.quantity>0 || this.state.special_instruction.length>0) {
			var len = "orderItem".concat((localStorage.length).toString());
			const sto = await localStorage.setItem(this.state.dish_name, JSON.stringify({
				dish_id: this.state.dish_id,
				dish_name:this.state.dish_name,
				quantity:this.state.quantity,
				special_instruction:this.state.special_instruction,
				price: this.state.price,
				order_item_number: len,
			}));
			// var order_total_price = await localStorage.getItem("order_total_price");
			// if(order_total_price) {
			// 	order_total_price = (parseFloat(order_total_price) + this.state.price).toString();
			// 	localStorage.setItem("order_total_price",order_total_price  );
			// }
			// else {
			// 	localStorage.setItem("order_total_price",this.state.price)
			// }
		}
		this.props.hideModal();
	}
	
	render() {
		return (
			<Consumer>
			{context => (
			<Mutation 
				mutation={CREATE_ORDER_ITEM_MUTATION} 
				variables={this.state} 
				refetchQueries={[{ query : CURRENT_USER_QUERY}]}>
				{
					(addOrderItemFromMenu, {loading, error}) => (
						<Query query={CURRENT_USER_QUERY}>
						{({ data, loading }) => { 
							return (
								<StyledInputForm
									order_item_created={this.props.order_item_created} 
								>
									<div className="input_wrapper">
									<div className="label">
										{this.props.dish.name}
									</div>
										<input type="text" name="special_instruction" placeholder="  &#9999;  enter requests or instructions" className="text_input_box"  onChange={e => this.handleTextInputChange(e)} 
										value = {this.state.special_instruction}
										/>
									</div>
									<div className="input_wrapper">
									<div className="label">
										number of orders
									</div>
									<input type="number" name = "quantity"  min="1" 
										placeholder="1"
										className="number_input_box" 
										onChange={e => this.handleTextInputChange(e)} 
										value = {this.state.quantity}
									/>	
									</div>
									
									<div className="input_wrapper message"> &#10004; added to your shopping bag  <span>&#10024;</span> </div>
								
									<ButtonRow>
										<StyledAddItemButton 
											order_item_created={this.state.order_item_created} 
											onClick={ async e => {
												e.preventDefault();
												if (data.me) {
													const res = await addOrderItemFromMenu();
													this.props.onCreated();
													localStorage.removeItem(this.state.dish_name)
													context.updateTotalPrice(this.state.price)
												}
												else {
													Router.push({ pathname: '/signinfirstplease' });
												}
											}}
										>
										add item
										</StyledAddItemButton>
										<StyledWindowTopBarCloseXSymbolButton
											onClick={this.handleClose}
										>
										</StyledWindowTopBarCloseXSymbolButton>
									</ButtonRow>
								</StyledInputForm>
							)
						}}
					</Query>
					)
				}
			</Mutation>

			)}
			</Consumer>
		);
	}
};



export default CreateOrderItem;
export { CREATE_ORDER_ITEM_MUTATION };