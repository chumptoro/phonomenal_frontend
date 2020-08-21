import React, { Component } from 'react';
import Header from './Header.js';
import Meta from './Meta.js';
import Hero from './Hero.js';
import OrderCategory from './Orders_Children/OrderCategory.js';
import HorizontalScrollGridItem from './HorizontalScrollGridItem.js'
import Tabs from './Orders_Children/Tabs.js';

import styled, { ThemeProvider, injectGlobal } from 'styled-components';

const theme = {
  red: 'rgb(235, 70, 40)',
  black: '#393939',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  blue:'blue',
  divider_gray: 'rgb(231,231,231)',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
  titleFontSize: '20px',
  max_component_vertical_distance: '40px',
  mid_component_vertical_distance: '20px',
  min_component_vertical_distance: '15px',
  font_size_content: '14px',
  font_size_nav_bar_small: '15px',

  grid_template_desktop_small_width: '30px 1fr 30px',
  grid_template_desktop_mid_width: '0.05fr 1fr 0.05fr',
  grid_template_desktop_large_width: '1fr 1121px 1fr',



};

injectGlobal`
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
  @import url(//db.onlinewebfonts.com/c/    07bc241768c969f6b6a27a7bf0dfb490?family=TT+Norms+Regular);
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
    font-family: "freight-sans-pro";
    font-size: 16px;
    display: block;
    line-height: 1.5;
    margin:0;
    background: rgb(255,255,255);
    font-size: ${theme.font_size_content};
    /* overflow-x:hidden; */
  }
  a {
    text-decoration: none;
  }
  button {  font-family: 'freight-sans-pro'; }
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

class Page extends Component {
	render() {
		return (
			<ThemeProvider theme={theme}>
      
      <div>
        <Header/>
        <Hero/>
        <Tabs>
          {/* <div label="Fan Favorites">
              See ya later, <em>Alligator</em>!
          </div> */}

          <div label="Signature Pho">
              After 'while, <em>Crocodile</em>!
          </div>
          <div label="Banh Mi">
              Banh Mi Bi 
          </div>
          <div label="Rice Platters">
              Com Ga, Com Tam 
          </div>
          <div label="Vermicelli Bowls">
              Canh chua ca loc <em>extinct</em>!
          </div>
          <div label="Sides">
              After 'while, <em>Crocodile</em>!
          </div>
          <div label="Vegetarian">
              Canh chua ca loc <em>extinct</em>!
          </div>
          <div label="Drinks & Desserts">
              Canh chua ca loc <em>extinct</em>!
          </div>
      </Tabs>
				<StyledPage>
					<Meta/>
					{/* <Header/> */}
          {/* <Hero/> */}
          {/* <HorizontalScrollGridItem/> */}
          {/* <OrderCategory/> */}
					{/* <Inner>{this.props.children}</Inner> */}
				</StyledPage>
        </div>
			</ThemeProvider>
		);
	}
}

export default Page;