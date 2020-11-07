import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from './Patron';
import RemoveFromShoppingBag from './RemoveFromShoppingBag';
import {InputText, InputTextCSS, InputTextBorderlessCSS, InputTextBorderless} from './Styling/Input';
import {GridSingleRow} from './Styling/Responsive_Grids';
import {ButtonInline, GreenPrimaryStyle, GreenNonPrimaryStyle} from './Styling/Button';
import EditShoppingBag from './EditShoppingBag';

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

const EachOrderItem = styled(GridSingleRow)`
`;

//already exists under Styling/Form.js  clean this up later
const EditForm = styled('div')`
  border: 1px solid ${props => props.theme.ui_actionable_green} ;
  border: 1px solid ${props => props.theme.divider_gray};  
  border-radius: 3px;
  grid-column-start: 2;
  width: 80%;
  margin-bottom: 20px; 
  color: black; /* ${props => props.theme.content_gray}; */

  input[type="text"] {
    width: 58%;
    height: 25px;
  }
  .non_submit_button {
    border-radius: 20%;
    height: 25px;
    width: 20px;
    font-size: 15px;
    display:inline-block; /* to control height and width.  inline does not have width or height */
    /* margin-left: 0.5px;
    margin-right: 0.5px; */
  }
  .submit_button {
    margin: -1px;
    float:right; 
    border-radius: 0px 3px 3px 0px;
    padding: 5px;
    /* display:inline-block; */
  }
`;
const ConfirmEditButton = styled(ButtonInline)`
  ${GreenPrimaryStyle};
`;
const EditButton = styled(ButtonInline)`
  ${GreenNonPrimaryStyle};
`;
const OrderItemData = styled.div`
	margin-top: ${props => props.theme.tiny_component_vertical_distance};
	margin-bottom: ${props => props.theme.tiny_component_vertical_distance};
	padding: 3px;
`;
const EditPencil = styled('a') `
  cursor: pointer;
`;

class ShoppingBagItem extends Component {
  state = {
    editing: false,
    special_instruction: null,
    quantity: 0,
    price: null,
  }
  componentDidMount() {
    this.setState({special_instruction: this.props.orderitem.special_instruction});
    this.setState({quantity: this.props.orderitem.quantity});
  }
  handleEditToggle = (e) => {
    this.setState({editing: !this.state.editing});
  }	
  handleIncr = (e) => {
    this.setState({quantity: this.state.quantity+1});
  }	
  handleDecr = (e) => {
    this.setState({quantity: (this.state.quantity-1)});
  }	
  handleChange = (e) => {
		const { name, type, value } = e.target;
		var val = type === 'number'? parseFloat(value) : value;
		this.setState({[name]:val});
    }
  render() {
    const { orderitem } = this.props;

    if (!this.state.editing) 
      return (
      <EachOrderItem>
        <OrderItemData>
          {orderitem.dish_name} (x{orderitem.quantity})
        </OrderItemData>
        <OrderItemData>${(orderitem.price*orderitem.quantity).toFixed(2)}</OrderItemData>
        <OrderItemData>
          <EditPencil 
            title="Edit Item"
            onClick={this.handleEditToggle}
          >
            <img alt="trash can icon" src="./pencil.svg" 
            width="21" height="25" /> 
          </EditPencil>
        </OrderItemData>
        <OrderItemData>
          <RemoveFromShoppingBag id={orderitem.id} />
        </OrderItemData>
      </EachOrderItem>
      );
    else {
      return (
        <EditForm>         
          <InputTextBorderless
            placeholder="special instruction"
            name="special_instruction"
            type="text" 
            value = {this.state.special_instruction}  
            onChange={this.handleChange}
          /> 

          <EditButton 
            className='non_submit_button'
            onClick={this.handleDecr} >
            -
          </EditButton>
          <span>{this.state.quantity}</span>
          <EditButton 
            className='non_submit_button'
            onClick={this.handleIncr}>
            +
          </EditButton>

  {/*         <ConfirmEditButton onClick={this.handleEditToggle}              className='submit_button'>
            update
          </ConfirmEditButton> */}

          <EditShoppingBag
            Toggle={this.handleEditToggle} 
            id={orderitem.id}
            quantity={this.state.quantity}
            special_instruction={this.state.special_instruction}
          />

         

        </EditForm>
      )
    }
  }
}

export default ShoppingBagItem;
