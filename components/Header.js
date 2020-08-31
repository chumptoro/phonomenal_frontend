import Nav from './Nav.js'
import Link from 'next/link';
import styled from 'styled-components';

const Logo = styled.h1`
`;

//header is a sub-component of Page so it can reference props.theme!
//*creating a fixed nav bar: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_fixed_menu
const StyledHeader = styled.header`
  	display: grid;
	z-index: 1;
	position: fixed;
	top: 0;
  	width: 100%;
	padding: 17px 0px 8px 0px;
	
	background-color:white;
  	border-bottom: 1px solid rgba(217, 219, 224, 0.5);


	@media (max-width: 300px) {
    grid-template-columns: ${props => props.theme.grid_template_desktop_small_width};
    }
    @media (min-width: 301px) {
      grid-template-columns: ${props => props.theme.grid_template_desktop_mid_width};
    }
    @media (min-width: 1455px) {
      grid-template-columns: ${props => props.theme.grid_template_desktop_large_width};
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
		padding-top: 10px;;

		a {
			margin-right: 12px;
			margin-left: 12px;
		}

		.user_profile_icon {
			padding-top: 5px;
		}
	}
`;

const Header = () => (
	<StyledHeader>
		<div className="wrapper">
			<div className="logo_title">
				<Link href="/">
					<img border="0" alt="phonomenal logo" src="./phonomenal_icon_alt2.jpg" width="45" height="45" /> 
				</Link>
			</div>
			<div className="nav_links">
				{/* <Link href="/locations">
					<a>locations & hours</a>
				</Link> */}
				{/* <Link href="/sell">
					<a>sell</a>
				</Link> */}
				<Link href="/signup">
					<a> 
						<img className="shopping_bag_icon" border="0" alt="shopping bag icon" src="./location_pin_thin.svg" width="30" height="30" /> 
					</a>
				</Link>
	
				<Link href="/account">
					<a> 
						<img border="0" alt="user_profile_icon" src="./user_profile_grayed_out.svg" width="30" height="30" /> 
					</a>
				</Link>

				<Link href="/bag">
					<a> 
						<img className="shopping_bag_icon" border="0" alt="shopping bag icon" src="./shopping-bag-green.svg" width="30" height="30" /> 
					</a>
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