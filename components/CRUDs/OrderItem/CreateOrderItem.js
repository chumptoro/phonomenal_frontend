import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Form from './styles/Form';
import Router from 'next/router';
import formatMoney from '../lib/formatMoney';
import Error from './ErrorMessage';

import StyledOrderItemDetail from "../../Styling/Form";
import {StyledButton, ButtonRow} from "../../Styling/Button";


//the below says: run a CREATE_ITEM_MUTATION function with $title, $description, etc... arguments.  This function will then call a function createItem we specifies in our schema

//the variables ($description, $title) are given to CREATE_ITEM_MUTATION using apollo's <Mutation>,which has a variables prop (see below)
const CREATE_ORDER_ITEM_MUTATION = gql`
	mutation CREATE_ORDER_ITEM_MUTATION ($dish:Dish $price: Int! $image: String $largeImage: String) 
	{
		createOrderItem(
			dish: $dish
			quantity:  $quantity
			special_instruction: $special_instruction
			price: $price
		) {
		  id		
		}
	}
`;

class CreateOrderItem extends Component {
	state = {
		dish: this.props.dish,
		quantity:1,
		special_instruction:'',
		price: 0,
	}

	//if we  use this arrow property, there is no need to bind handleChange to the cirrect this,  it wil be handled
	handleChange = (e) => {
		const { name, type, value } = e.target;
		const val = type === 'number'? parseFloat(value) : value;
		//we can let the state change field dynanically by using a placeholder in side [ ] (see JS's computed property name)
		this.setState({[name]:val});
	}
	render() {
		return (
			<Mutation mutation={CREATE_ORDER_ITEM_MUTATION} variables={this.state}>
				{
					(createItem, {loading, error}) => (
						
					)
				}
			</Mutation>
		);
	}
};

export default CreateOrderItem;
export { CREATE_ORDER_ITEM_MUTATION };