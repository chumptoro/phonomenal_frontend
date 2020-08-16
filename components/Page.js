import React, { Component } from 'react';
import Header from '../components/Header.js';
import Meta from '../components/Meta.js';
import Hero from '../components/Hero.js';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';

const theme = {
  red: '#FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  blue:'blue',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
  titleFontSize: '20px',
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
    src:url("https://use.typekit.net/af/1709eb/000000000000000000010b60/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"),url("https://use.typekit.net/af/1709eb/000000000000000000010b60/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"),url("https://use.typekit.net/af/1709eb/000000000000000000010b60/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
    font-display:auto;font-style:normal;font-weight:700;
  }
  @import url(//db.onlinewebfonts.com/c/    07bc241768c969f6b6a27a7bf0dfb490?family=TT+Norms+Regular);
  @font-face {
    font-family: "TT Norms Regular"; src: url("//db.onlinewebfonts.com/t/07bc241768c969f6b6a27a7bf0dfb490.eot"); src: url("//db.onlinewebfonts.com/t/07bc241768c969f6b6a27a7bf0dfb490.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/07bc241768c969f6b6a27a7bf0dfb490.woff2") format("woff2"), url("//db.onlinewebfonts.com/t/07bc241768c969f6b6a27a7bf0dfb490.woff") format("woff"), url("//db.onlinewebfonts.com/t/07bc241768c969f6b6a27a7bf0dfb490.ttf") format("truetype"), url("//db.onlinewebfonts.com/t/07bc241768c969f6b6a27a7bf0dfb490.svg#TT Norms Regular") format("svg");
    font-display:auto;font-style:normal;font-weight:700; 
  }

  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  ${'' /* *, *:before, *:after {
    box-sizing: inherit;
  } */}
  body {
    ${'' /* padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2; */}
    ${'' /* margin-top: 30px; */}
    font-family: "TT Norms Regular";
    display: block;
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
  button {  font-family: 'freight-sans-pro'; }
`;

const StyledPage = styled.div`
	background: white;
	color: ${props => props.theme.black};

  display: grid;
  grid-row-gap: 20px;

  @media (max-width: 300px) {
    grid-template-columns: 30px 1fr 30px;
  }
  @media (min-width: 301px) {
    grid-template-columns: 0.11fr 1fr 0.11fr;
  }
  @media (min-width: 1455px) {
		grid-template-columns: 1fr 1121px 1fr;
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
				<StyledPage>
					<Meta/>
					<Header/>
          <Hero/>
					<Inner>{this.props.children}</Inner>
				</StyledPage>
			</ThemeProvider>
		);
	}
}

export default Page;