import Link from 'next/link';
import PasswordReset from '../components/PasswordReset';

const password_reset = props => (
    <PasswordReset resetToken={props.query.resetToken}/>
);
export default password_reset;