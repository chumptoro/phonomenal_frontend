import Link from 'next/link';
//import NavStyles from './styles/NavStyles';

const Nav = () => (
	<div>
		<Link href="/items">
			<a>Shop</a>
		</Link>
		<Link href="/sell">
			<a>Sell</a>
		</Link>
		<Link href="/signup">
			<a>SignUps</a>
		</Link>
		<Link href="/orders">
			<a>Orders</a>
		</Link>
		<Link href="/account">
			<a>Account</a>
		</Link>
	</div>

	
);
export default Nav;