import React, { Component } from 'react';
import TopNav from './TopNav.js';
import Meta from './Meta.js';
import Hero from './Hero.js';
import HorizontalScrollGridItem from './HorizontalScrollGridItem.js'
import Tabs from './Tab/Tabs.js';

import Order from './Order';

import styled, { ThemeProvider, injectGlobal, createGlobalStyle } from 'styled-components';

import { Provider, Consumer } from "./Context";

const theme = {
  white: 'rgb(255,255,255)',
  green:'rgb(0,204,153)',
  red: 'rgb(235, 23, 0)',
  red_selected: 'rgb(209, 23, 2)',
  black: '#393939',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  content_gray: 'rgba(143, 149, 163, 0.9)', /* #9a9fac */
  offWhite: '#EDEDED',
  blue:'blue',
  divider_gray: 'rgb(231,231,231)',

  text_gray: 'rgba(0,0,0,0.6)',

  ui_actionable_red:'rgb(235, 23, 0)',
  ui_actionable_selected_red:'rgb(209, 23, 2)',
  ui_actionable_lightgrey:'#E1E1E1',
  ui_actionable_selected_lightgrey:'#BABABA',
  ui_actionable_green:'rgb(0,204,153)',
  ui_actionable_selected_green:'rgb(0, 194, 145)',


  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
  titleFontSize: '20px',

  extra_max_component_vertical_distance: '110px',
  max_component_vertical_distance: '40px',
  upper_mid_component_vertical_distance: '25px',
  mid_component_vertical_distance: '20px',
  min_component_vertical_distance: '15px',
  tiny_component_vertical_distance: '1px',


  font_size_title_mid: '17px',
  font_size_title_small: '15.5px',
  font_size_content: '14px',
  font_size_nav_bar_small: '15px',

  emoji_size_mid : '20px',

  font_weight_extra_bold: 'bolder',
  font_weight_bold: 'bold',
  font_weight_normal: 'normal',
  font_weight_light: 'lighter',

  line_height_content: '1.5',
  line_height_between_paragraphs: '3',

  grid_template_desktop_small_width: '7px 1fr 5px',
  grid_template_desktop_mid_width: '0.1fr 1fr 0.1fr',
  grid_template_desktop_large_width: '1fr 1121px 1fr',
  grid_template_desktop_mid_width_for_tabs_content_item: '20px 1fr 20px',

  border_radius_value: '8px',

  top_nav_bar_height:'60px',
  top_nav_bar_top_padding:'7px',
  top_nav_bar_bottom_padding:'7px',
  element_right_below_top_nav_margin:'74px', /* we arrive at 74 by adding top_nav_bar_height (60px) to its top and bottom padding (7+7) */
  modal_right_below_top_nav_margin:'75px',

  margin_using_grid_column: '2',

  // http://stephen.io/mediaqueries/#iPhone
  screen_width_iphone678X_min: '375px',
  screen_width_iphone678_max: '667px',
  screen_width_iphoneX_max: '821px',
  

  dish_thumbnail_width_desktop: '410px',
  dish_thumbnail_screensize_where_one_dish_takes_up_entire_row: '1020px'


};

const GlobalStyle = createGlobalStyle`

  @font-face {
  font-family:"europa";
  src:url("https://use.typekit.net/af/4eabcf/00000000000000003b9b12fd/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff2"),url("https://use.typekit.net/af/4eabcf/00000000000000003b9b12fd/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff"),url("https://use.typekit.net/af/4eabcf/00000000000000003b9b12fd/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("opentype");
  font-display:auto;
  font-style:normal;
  font-weight:400;
  }

  @font-face {
    font-family: 'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
  font-family:"freight-sans-pro";
  src:url("https://use.typekit.net/af/442215/000000000000000000010b5a/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff2"),url("https://use.typekit.net/af/442215/000000000000000000010b5a/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff"),url("https://use.typekit.net/af/442215/000000000000000000010b5a/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("opentype");
  font-display:auto;font-style:normal;font-weight:500;
}
 ${'' /*  @import url(//db.onlinewebfonts.com/c/    07bc241768c969f6b6a27a7bf0dfb490?family=TT+Norms+Regular); */}
  @font-face {
    font-family: "TT Norms Regular"; src: url("//db.onlinewebfonts.com/t/07bc241768c969f6b6a27a7bf0dfb490.eot"); src: url("//db.onlinewebfonts.com/t/07bc241768c969f6b6a27a7bf0dfb490.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/07bc241768c969f6b6a27a7bf0dfb490.woff2") format("woff2"), url("//db.onlinewebfonts.com/t/07bc241768c969f6b6a27a7bf0dfb490.woff") format("woff"), url("//db.onlinewebfonts.com/t/07bc241768c969f6b6a27a7bf0dfb490.ttf") format("truetype"), url("//db.onlinewebfonts.com/t/07bc241768c969f6b6a27a7bf0dfb490.svg#TT Norms Regular") format("svg");
    font-display:auto;font-style:normal;font-weight:700; 
  }

  @font-face {
    font-family: "TT Norms Light";
    src: url("/typefaces/TTNorms/TTNorms-Light.woff") format('woff'), url("/typefaces/TTNorms/TTNorms-Light.woff2") format('woff2');
    font-weight: 1000;
    font-style: normal;
  }

  html {
    box-sizing: border-box;
  }
  ${'' /* *, *:before, *:after {
    box-sizing: inherit;
  } */}
  body {
    font-family: "europa";
    font-size: ${theme.font_size_content};
    font-weight: ${theme.font_weight_normal};
    
    line-height:  ${theme.line_height_content};
    margin:0;
    padding:0;
    background: rgb(255,255,255);
    
    overflow-x:hidden;
    height: 100%;
    color: black ${'' /* ${props => props.theme.text_gray} */} ; 
  }

  ${'' /* prevent horizontal scrolling. ref: https://stackoverflow.com/questions/4192277/disable-horizontal-scroll-on-mobile-web */}

  ${'' /* but then if we have a stick position ::-webkit-progress-inner-element, we are fucked: https://uxdesign.cc/position-stuck-96c9f55d9526 */}
  
  ${'' /* we will temporarily just prevent scrolling for iphone, which means we won;t have a sticky position for dish carousel */}
  @media only screen 
  and (min-device-width : 375px) 
  and (max-device-width : 667px) { 
    html, body {
    overflow-x: hidden;
    }
    body {
      position: relative; 
      ${'' /* prevents left and right margin and padding from causing trouble */}
    }

  }

${'' /* html, body{
  width: 100%;
} */}



  
  a {text-decoration: none;}
  button {  font-family: 'europa'; }

`;


const StyledPage = styled.div`
	
  display: grid;
  grid-row-gap: 0px;
  grid-column-gap:0;
  margin-top: 0px;
  /* width: 100vw; */
  /* justify-content:center; */
  /* justify-items:center; */

  @media (max-width: 300px) {
    grid-template-columns: ${theme.grid_template_desktop_small_width};
  }
  @media (min-width: 301px) {
    grid-template-columns: ${theme.grid_template_desktop_mid_width};
  }
  @media (min-width: 1455px) {
		grid-template-columns: ${props => props.theme.grid_template_desktop_large_width};
  }

`;

const Inner = styled.div`
	${'' /* max-width: ${props => props.theme.maxWidth};
	margin: 0 auto;
	padding: 2rem; */}
`;

// const Contact = styled.div`
//   background-color: black;
//   color: white;
//   text-align: center;
//   display: grid;
//   padding-bottom: ${props => props.theme.max_component_vertical_distance};
//   padding-top: ${props => props.theme.max_component_vertical_distance};
//   /* background-color: rgb(250,250,250); */
//   @media (max-width: 300px) {
//   grid-template-columns: ${props => props.theme.grid_template_desktop_small_width};
//   }
//   @media (min-width: 301px) {
//     grid-template-columns: ${props => props.theme.grid_template_desktop_mid_width};
//   }
//   @media (min-width: 1455px) {
//     grid-template-columns: ${props => props.theme.grid_template_desktop_large_width};
//   }
// `;

class Page extends Component {
	render() {
		return (
			<ThemeProvider theme={theme}>
        <GlobalStyle/>
        <Meta/>
        <Order>
          <TopNav />
          {this.props.children}
          {/* <Contact>
            <div></div>
            <div text-align="center">
              <div>
              20447 Exchange Street, Ashburn, VA 20147
              </div>
              <div>
                Telephone: +1(571) 293-9519
              </div>
              <div>
                <small>Copyright ©2020 Phonomenal. All rights reserved.</small>
              </div>
              <div>
                <small>Terms of Service & Privacy Policy</small> 
              </div>
            </div>
          </Contact> */}
          </Order>
			</ThemeProvider>
		);
	}
}

export default Page;