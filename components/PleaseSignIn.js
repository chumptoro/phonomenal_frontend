import { Query } from 'react-apollo';
import { CURRENT_USER_QUERY } from './Patron';
import Signin from './Signin';

const PleaseSignIn = props => (
  <Query query={CURRENT_USER_QUERY}>
    {({ data, loading }) => {
      if (loading) return <p>Loading...</p>;
      if (!data.me) {
        return (
          <div>
            <Signin 
              title="Please Sign In First" 
              redirect={props.redirect}
              />
          </div>
        );
      }
      return props.children;
    }}
  </Query>
);

export default PleaseSignIn;
