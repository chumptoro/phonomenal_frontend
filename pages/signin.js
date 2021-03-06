import Link from 'next/link';
import SignIn from '../components/Signin';
import Router from 'next/router';

import { Query } from 'react-apollo';
import { CURRENT_USER_QUERY } from '../components/Patron';

const AlreadySignIn = props => (
  <Query query={CURRENT_USER_QUERY}>

		{/* {({ data }) => {
			const me = data ? data.me : null;
			if (me) {
				return (
					<Dropdown Signedin="true" first_name={me.first_name}/>
				)
			}
			else {
			//console.log("no user is signed in");
				return (      
				<Dropdown Signedin="false"/>
				);
				}
		}} */}


    {({ data, loading }) => {
			const me = data ? data.me : null;
      if (loading) return <p>Loading...</p>;
      if (me) {
				console.log("already signed in as " + me.email);
				return (
					<SignIn 
						title="Sign In" 
						already_signed_in_with={me.email}
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