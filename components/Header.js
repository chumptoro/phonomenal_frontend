import Nav from './Nav.js'
import Link from 'next/link';
import styled from 'styled-components';
import ContextDescendantRadioButton from './ContextDescendantRadioButton';

const Logo = styled.h1`
`;

// radio toggle link: https://codepen.io/JiveDig/pen/jbdJXR

const StyledRadioToggle = styled.div`
	/* position: fixed; */
	/* display: inline; */
	/* margin-bottom: 36px; */
	display: flex; 
	/* overflow: hidden; */
	float: left;
	margin-left: 100px;
	padding-top: 10px;

	input {
		position: absolute !important;
		/* clip: rect(0, 0, 0, 0); */
		height: 1px;
		width: 1px;
		/* border: 0; */
		overflow: hidden;
	}

	label {
		background-color: ${props => props.theme.white};
		color: rgba(0, 0, 0, 0.6);
		font-size: 14px;
		line-height: 1;
		text-align: center;
		padding: 8px 16px;
		margin-right: -1px;
		/* border: 1px solid rgba(0, 0, 0, 0.2); */
		box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3), 0 1px rgba(255, 255, 255, 0.1);
		transition: all 0.1s ease-in-out;
	}

	label:hover {
		cursor: pointer;
	}

	input:checked + label {
		background-color: ${props => props.theme.red};
		color: white;
		box-shadow: none;
	}

	label:first-of-type {
		border-radius: 20px 0 0 20px;
	}

	label:last-of-type {
		border-radius: 0 20px 20px 0;
	}
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
	.left_sided_nav {
		float: left;
		padding-top: 0.27px;

		.location_pin {
			/* position: absolute;
			left: 100px; */
			margin-left: 100px;
			padding-bottom: 4px;
		}
	}
	.right_sided_nav {
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
			<div className="left_sided_nav">
				<Link href="/">
					<img alt="phonomenal logo" src="./phonomenal_icon_alt2.jpg" width="45" height="45" /> 
				</Link>
				
				<a> 
					<img className="location_pin" alt="location_pin" src="./location_pin_thin.svg" width="30" height="30" /> 
				</a>
			</div>

			{/* <StyledRadioToggle className="switch-field">
					<input type="radio" id="radio-one" name="switch-one" value="yes" checked/>
					<label for="radio-one">Delivery</label>
					<input type="radio" id="radio-two" name="switch-one" value="no" />
					<label for="radio-two">Pickup</label>
			</StyledRadioToggle> */}

			<ContextDescendantRadioButton />

			<div className="right_sided_nav">
				<Link href="/account">
					<a> 
						<img alt="user_profile_icon" src="./user_profile_grayed_out.svg" width="30" height="30" /> 
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