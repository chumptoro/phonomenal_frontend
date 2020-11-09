import styled, {css} from 'styled-components';
import {ResponsiveGridLeftRightMargin} from  './Responsive_Grids';
import {FullScreenModal} from './Modal';

//*creating a fixed nav bar: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_fixed_menu
const StyledDesktopOrderNav = styled.div`
	z-index: 1;
	position: fixed;
	top: 0;
  width: 100vw;
	height: ${props => props.theme.top_nav_bar_height};
	/* box-sizing: border-box; */
	padding: ${props => props.theme.top_nav_bar_top_padding} 0px ${props => props.theme.top_nav_bar_bottom_padding} 0px;	
	background-color:white;
  border-bottom: 1px solid rgba(217, 219, 224, 0.5);
	display: grid;
  ${ResponsiveGridLeftRightMargin};

	.place_float_right_and_left_on_one_line {
		grid-column-start:2;
		position: relative;
	}
	.left_sided_nav {
	/* 	grid-column-start:2; */
		float: left;
		/* width: 80%; */
		.logo {
			vertical-align: bottom;
			cursor: pointer;
		}
		.location_pin {
			vertical-align: middle;
			padding-bottom: 5px;
		}
	}
	.right_sided_nav {
		/* float: right;  */
    /* width: 80%; */

		position: absolute;
		right:0px;
		
		.shopping_bag {
			vertical-align: middle;
			padding-top: 18px;
			cursor: pointer;
		}
		.hamburger_dropdown {
			position: absolute;
			top: 23px;
			right: 0px;
			/* margin-top: 100px; */
		}
	}
`;

const HamburgerDropdownModal = styled(FullScreenModal)`
`;
const HamburgerDropdownActionable=styled('img')`
`;
export {StyledDesktopOrderNav, HamburgerDropdownModal};