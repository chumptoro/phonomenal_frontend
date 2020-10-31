import Link from 'next/link';
import SignIn from '../components/Signin';
import Router from 'next/router';

import { Query } from 'react-apollo';
import { CURRENT_USER_QUERY } from '../components/Patron';

const AlreadySignIn = props => (
  <Query query={CURRENT_USER_QUERY}>
    {({ data, loading }) => {
      if (loading) return <p>Loading...</p>;
      if (data.me) {
				console.log("already signed in as " + data.me.email);
				return (
					<SignIn 
						title="Sign In" 
						already_signed_in_with={data.me.email}
					/>
					);
      }
			else {
				console.log("NOT yet signed in");
				return (
					<SignIn 
						title="Sign In" 
						already_signed_in_with=""
					/>
				);
			}

    }}
  </Query>
);

const signin = props => (
  // <SignIn 
  //   title="Sign In" 
	// />
	<AlreadySignIn/>
);
export default signin;