import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Form from './styles/Form';
import Router from 'next/router';
import formatMoney from '../lib/formatMoney';
import Error from './ErrorMessage';

//the below says: run a CREATE_ITEM_MUTATION function with $title, $description, etc... arguments.  This function will then call a function createItem we specifies in our schema

//the variables ($description, $title) are given to CREATE_ITEM_MUTATION using apollo's <Mutation>,which has a variables prop (see below)
const CREATE_ITEM_MUTATION = gql`
	mutation CREATE_ITEM_MUTATION ($title: String $description: String, $price: Int! $image: String $largeImage: String) 
	{
		createItem(
			title: $title
			description: $description
			price:  $price
			image: $image
			largeImage: $largeImage
		) {
		  id		
		}
	}
`;

class CreateItem extends Component {
	state = {
		title:'new dish',
		description:' great food',
		image:'food.jpeg',
		largeImage:'',
		price: 1000,
	}

	//if we  use this arrow property, there is no need to bind handleChange to the cirrect this,  it wil be handled
	handleChange = (e) => {
		const { name, type, value } = e.target;
		const val = type === 'number'? parseFloat(value) : value;
		//we can let the state change field dynanically by using a placeholder in side [ ] (see JS's computed property name)
		this.setState({[name]:val});

		//console.log (this.state.title);
	}
	render() {
		return (
			<Mutation mutation={CREATE_ITEM_MUTATION} variables={this.state}>
				{
					(createItem, {loading, error}) => (
						<Form onSubmit={ async e => {
								e.preventDefault();
								const res = await createItem();
								console.log(res);
								// Router.push({
								// 	pathname: '/item',
								// 	query: { id: res.data.createItem.id }
								// })
							}}
						>
							<Error error={error}/>
							<fieldset disabled={loading}>
								<label htmlFor="title">
									Title
									<input 
										type="text" 
										id="title" 
										name="title"
										required
										value ={this.state.title}
										onChange={this.handleChange}
									/>
								</label>

								<label htmlFor="price">
									Price
									<input 
										type="number" 
										id="price" 
										name="price"
										required
										value ={this.state.price}
										onChange={this.handleChange}
									/>
								</label>

								<label htmlFor="description">
									Description
									<input 
										type="text" 
										id="description" 
										name="description"
										required
										value ={this.state.description}
										onChange={this.handleChange}
									/>
								</label>
								<button type = 'submit'>Submit</button>
							</fieldset>
						</Form>
					)
				}
			</Mutation>
		);
	}
};

export default CreateItem;
export { CREATE_ITEM_MUTATION };