import Link from 'next/link';
import PleaseSignIn from '../components/PleaseSignIn';

const account = props => (
    <PleaseSignIn redirect='/account'>
    	<div>Account</div>
    </PleaseSignIn>
    
);
export default account;