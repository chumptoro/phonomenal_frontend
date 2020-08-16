import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Item from './Item';

//graphql-tag allows us to wrtie GraphQL queries
const ALL_ITEMS_QUERY = gql`
  query ALL_ITEMS_QUERY {
    items {
      id
      title
      price
      description
      image
      largeImage
    }
  }
`;

const Center = styled.div`
  text-align: center;
`;

const ItemsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
`;

//Query content is envleoped in a { }, which tells react we wanna write JSX logic instead of string, which ofc is the default for things placed inside html tags

//_app.js will use getInitialProps() to run the query for us when the Page is requested.   this is done for all other Pages too when they are requested.  doing this in apps.js reduce redundancy

class Items extends Component {
  render() {
    return (
      <Center>
        <Query query={ALL_ITEMS_QUERY}>
          {
            ({ data, error, loading }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error: {error.message}</p>;
            console.log (data)
            return (
              <ItemsList>{data.items.map(item => <Item item={item} key={item.id} />)}</ItemsList>
            );
            }
          }
        </Query>
      </Center>
    );
  }
}

export default Items;
export { ALL_ITEMS_QUERY } ;
