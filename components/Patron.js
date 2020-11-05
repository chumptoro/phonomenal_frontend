import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Dropdown from "./Styling/Dropdown";

const CURRENT_USER_QUERY = gql`
  query {
    me {
      id
      email
      first_name
      permissions
      shopping_bag {
        id
        dish_name
        special_instruction
        quantity
        price
      }
    }
  }
`;

const User = props => (
  <Query {...props} query={CURRENT_USER_QUERY}>
    {payload => props.children(payload)}
  </Query>
);

const UserDropdown = props => (
  <Query {...props} query={CURRENT_USER_QUERY}>
    {
      ({data, loading, error}) => {
        //console.log(data); 
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error: {error.message}</p>;
        if (data.me != null) {
          //console.log("user " + data.me.email + " signed in!");
          return (
            <Dropdown Signedin="true" first_name={data.me.first_name}/>
          ); 
        }
        else {
          //console.log("no user is signed in");
          return (      
            <Dropdown Signedin="false"/>
          );
        }
      }
		}
  </Query>
);



// User.propTypes = {
//   children: PropTypes.func.isRequired,
// };

export default User;
export { CURRENT_USER_QUERY };

