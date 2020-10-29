import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import styled from "styled-components";
import { CURRENT_USER_QUERY } from "./Patron";
import Router from 'next/router';

const SIGN_OUT_MUTATION = gql`
  mutation SIGN_OUT_MUTATION {
    signout {
      message
    }
  }
`;

//copied from Dropdown.js
const ListItem = styled.div`
	/* border-bottom: solid ${props => props.theme.divider_gray} 0.5px; */
	padding-top: 8px;
	padding-bottom: 11px;
	padding-right: 30px;
	padding-left: 30px;
	cursor: pointer;
	text-align: center;
	&:hover {
    background-color: #F5F5F5;
		/*  ${props => props.theme.red_selected} ; */
  }
	a:link {
		color: black;
	}
	a:visited {
		color: black;
	}
	a:hover {
		color: black;
	}
	a:active {
		color: black;
	}
`;

const Signout = props => (
  <Mutation 
    mutation={SIGN_OUT_MUTATION} 
    refetchQueries={[{ query: CURRENT_USER_QUERY }]}
    onCompleted={() => Router.push({ pathname: '/signin' })}
>
    {signout => <ListItem onClick={signout}>Sign Out</ListItem>}
  </Mutation>
);
export default Signout;