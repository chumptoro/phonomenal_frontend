import Nav from './Nav.js'
import Link from 'next/link';
import styled from 'styled-components';

const Logo = styled.h1`
	${'' /* font-size: 4rem;
	margin-left: 2rem;
	position: relative;
	z-index: 2;
	transform: skew(-7deg);

	a{
		padding: 0.5 rem 1rem;
		background: ${props => props.theme.red};
		color: white;
		text-transformation: uppercase;
		text-decoration: none;
	}

	@media (max-width: 1300px) {
		margin: 0;
		text-align: center;
	} */}

	float: left;
	padding-top: 0.27px;
`;

//header is a sub-component of Page so it can reference props.theme!
//*creating a fixed nav bar: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_fixed_menu
const StyledHeader = styled.header`
  ${'' /* .bar {
    border-bottom: 10px solid ${props => props.theme.black};
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
    @media (max-width: 1300px) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
  }
  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid ${props => props.theme.lightgrey};
  } */}
  	/* grid-column-start: 2; */
  	display: grid;
	z-index: 1;
	position: fixed;
	top: 0;
  	width: 100%;
	padding: 24px 0px 26px 0px;
	
	background-color:white;
  	border-bottom: 1px solid rgba(217, 219, 224, 0.5);


	@media (max-width: 300px) {
		grid-template-columns: 30px 1fr 30px;
	}
	@media (min-width: 301px) {
		grid-template-columns: 0.05fr 1fr 0.05fr;
	}
	@media (min-width: 1455px) {
		grid-template-columns: 1fr 1121px 1fr;
	}


	.wrapper {
		grid-column-start:2;
	}
	.logo_title {
		float: left;
		padding-top: 0.27px;
	}
	.nav_links {
		float: right;
		padding-top: 0.27px;

		a {
			margin-right: 12px;
			margin-left: 12px;
		}
	}
`;

const Header = () => (
	<StyledHeader>
		<div className="wrapper">
			<div className="logo_title">
				<Link href="/">
					<a>Phomenal</a>
				</Link>
			</div>
			<div className="nav_links">
				<Link href="/locations">
					<a>locations & hours</a>
				</Link>
				{/* <Link href="/sell">
					<a>sell</a>
				</Link> */}
				{/* <Link href="/signup">
					<a>sign up</a>
				</Link> */}
				<Link href="/account">
					<a>account</a>
				</Link>
				<Link href="/bag">
					<a>bag</a>
				</Link>
			</div>
			{/* <div className="sub-bar">
				<p>Search</p>
			</div>

			<div>Cart</div> */}
		</div>
		
	</StyledHeader>
);

export default Header;