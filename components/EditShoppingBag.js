import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {ButtonInline, GreenPrimaryStyle, GreenNonPrimaryStyle, RightAlightBorderOfParent} from './Styling/Button';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from './Patron';

const REMOVE_FROM_SHOPPING_BAG_MUTATION = gql`
  mutation removeFromShoppingBagMutation($id: ID) {
    removeOrderItem(id: $id) {
      id
    }
  }
`;


const EDIT_SHOPPING_BAG_MUTATION = gql`
	mutation EDIT_SHOPPING_BAG_MUTATION ($id: ID $quantity: Int $special_instruction: String) 
	{
		reviseOrderItem  ( 
				quantity:  $quantity
				special_instruction: $special_instruction
				id: $id
		) {
		  id		
		}
	}
`;

const TrashBin = styled('a') `
  cursor: pointer;
`;
const ConfirmEditButton = styled(ButtonInline)`
  ${GreenPrimaryStyle};
  ${RightAlightBorderOfParent};
`;

class EditShoppingBag extends Component {
  // This gets called as soon as we get a response back from the server after a mutation has been performed
  update = (cache, payload) => {
    // 1. first read the cache
    const data = cache.readQuery({ query: CURRENT_USER_QUERY });
    console.log("data after editing shopping bag is: ");
    console.log(data);
    // 2. remove that item from the cart
    const orderItemId = payload.data.reviseOrderItem.id;
    data.me.shopping_bag = data.me.shopping_bag.filter(orderItem => orderItem.id !== orderItemId);
    // 3. write it back to the cache
    cache.writeQuery({ query: CURRENT_USER_QUERY, data });
  };

  render() {
    return (
      <Mutation
        mutation={EDIT_SHOPPING_BAG_MUTATION}
        refetchQueries={[{ query : CURRENT_USER_QUERY}]}
        variables={this.props}
        // update={this.update}
        optimisticResponse={{
          __typename: 'Mutation',
          reviseOrderItem: {
            __typename: 'OrderItem',
            id: this.props.id,
          },
        }}
      >
        {(reviseOrderItem, { loading, error }) => (

          <ConfirmEditButton
            disabled={loading}
            onClick={async () => {
              const rev= await reviseOrderItem().catch(err => alert(err.message));
              this.props.Toggle();
            }}
            // title="Remove from Bag"
          >
            update
            
          </ConfirmEditButton>
        )}
      </Mutation>
    );
  }
}
export default EditShoppingBag;
