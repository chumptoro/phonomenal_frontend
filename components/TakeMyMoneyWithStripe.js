import StripeCheckout from 'react-stripe-checkout';
import { Mutation } from 'react-apollo';
import Router from 'next/router';
import NProgress from 'nprogress';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import calcTotalPrice from '../lib/calcTotalPrice';
import Error from './ErrorMessage';
import User, { CURRENT_USER_QUERY } from './Patron';
import styled from 'styled-components';
import React, { Component } from 'react';
import {StyledButton, CenterButtonInsideGrid} from './Styling/Button';

const CheckOutButton = styled(StyledButton)`
  ${CenterButtonInsideGrid};
`;


const CREATE_ORDER_MUTATION = gql`
  mutation createOrder($token: String!) {
    createOrder(token: $token) {
      id
      charge
      total_price
      checked_out_order_items {
        id
        dish_name
      }
    }
  }
`;

function totalItems(cart) {
  return cart.reduce((tally, cartItem) => tally + cartItem.quantity, 0);
}

class TakeMyMoneyWithStripe extends Component {
  onToken = async (res, createOrder) => {
    //NProgress.start();
    // manually call the mutation once we have the stripe token
    const order = await createOrder({
      variables: {
        token: res.id,
      },
    }).catch(err => {
      alert(err.message);
    });
    // Router.push({
    //   pathname: '/order',
    //   query: { id: order.data.createOrder.id },
    // });
  };
  render() {
    return (
      <User>
        {({ data, loading }) => {
          const me = data ? data.me : null;
          if (!me) return null;
          else {
            return (
              <Mutation
               mutation={CREATE_ORDER_MUTATION}
                refetchQueries={[{ query: CURRENT_USER_QUERY }]}
              >
                {createOrder => (
                  <StripeCheckout
                    amount={calcTotalPrice(me.shopping_bag)*100}
                    //shippingAddress
                    //billingAddress
                    //allowRememberMe
                    name="Phonomenal"
                    //label="Complete Payment"
                    description={`Order of ${totalItems(me.shopping_bag)} items`}
                    // image={me.cart.length && me.cart[0].item && me.cart[0].item.image}
                    stripeKey="pk_test_51HkMAZLv9DoNa63rcGEuimSgaAcx6le3pNPZEMxjlTTlSPiAnMI5X1desauBZyPshsg9WyInihh2pveYUD4LaLlB00obmzaVFE"
                    currency="USD"
                    //email={me.email}
                    token={res => this.onToken(res, createOrder)}
                  >
                    {/* <CheckOutButton>Checkout</CheckOutButton> */}
                    {this.props.children}
                  </StripeCheckout>
                )}
              </Mutation> 
            );
          }

        }}
      </User>
    )
  }
}

export default TakeMyMoneyWithStripe;
