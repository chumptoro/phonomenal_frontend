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
    }
  }
`;

const User = props => (
  <Query {...props} query={CURRENT_USER_QUERY}>
    {
      ({data, loading, error}) => {
        console.log(data); 
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error: {error.message}</p>;
        if (data.me != null) {
          console.log("you are signed in!");
          return (
            <Dropdown Signedin="true" first_name={data.me.first_name}/>
          ); 
        }
        else {
          console.log("you we are NOT signed in!");
          return (      
            <Dropdown Signedin="false"/>
          );
        }
      }
			}
{/* {payload => props.children(payload)} */}
  </Query>
);

// User.propTypes = {
//   children: PropTypes.func.isRequired,
// };

export default User;
export { CURRENT_USER_QUERY };

