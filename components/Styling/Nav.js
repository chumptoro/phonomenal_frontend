import styled, {css} from 'styled-components';
import {ResponsiveGridLeftRightMargin} from  './Responsive_Grids';

//*creating a fixed nav bar: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_fixed_menu
const StyledDesktopOrderNav = styled.div`
	z-index: 1;
	position: fixed;
	top: 0;
  width: 100%;
	padding: 13px 0px 8px 0px;	
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
		/* float: right; */
    /* width: 80%; */
		position: absolute;
		right:0px;
		/* grid-column-start:2; */
		.shopping_bag {
			vertical-align: middle;
			padding-top: 18px;
			cursor: pointer;
		}
	}
`;
export {StyledDesktopOrderNav};