import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from './Patron';

const REMOVE_FROM_SHOPPING_BAG_MUTATION = gql`
  mutation removeFromShoppingBagMutation($id: ID) {
    removeOrderItem(id: $id) {
      id
    }
  }
`;

const TrashBin = styled('a') `
  cursor: pointer;
`;
  


class RemoveFromShoppingBag extends Component {
  // This gets called as soon as we get a response back from the server after a mutation has been performed
  update = (cache, payload) => {
    // 1. first read the cache
    const data = cache.readQuery({ query: CURRENT_USER_QUERY });
    console.log(data);
    // 2. remove that item from the cart
    const orderItemId = payload.data.removeOrderItem.id;
    data.me.shopping_bag = data.me.shopping_bag.filter(orderItem => orderItem.id !== orderItemId);
    // 3. write it back to the cache
    cache.writeQuery({ query: CURRENT_USER_QUERY, data });
    
  };

  render() {
    return (
      <Mutation
        mutation={REMOVE_FROM_SHOPPING_BAG_MUTATION}
        refetchQueries={[{ query : CURRENT_USER_QUERY}]}
        variables={{ id: this.props.id }}
        update={this.update}
        optimisticResponse={{
          __typename: 'Mutation',
          removeOrderItem: {
            __typename: 'OrderItem',
            id: this.props.id,
          },
        }}
      >
        {(removeOrderItem, { loading, error }) => (
          <TrashBin
            disabled={loading}
            onClick={() => {
              removeOrderItem().catch(err => alert(err.message));
            }}
            title="Remove from Bag"
          >
              <img alt="trash can icon" src="./trashcanblack.svg" width="21" height="25" /> 
            
          </TrashBin>
        )}
      </Mutation>
    );
  }
}
export default RemoveFromShoppingBag;
export { REMOVE_FROM_SHOPPING_BAG_MUTATION };