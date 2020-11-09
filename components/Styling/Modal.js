import styled, {css} from 'styled-components';

const FullScreen =  css`
	width: 100vw;
	height: 100vh;
	top: ${props => props.theme.top_nav_bar_height};
 
  bottom: 0;
  left: 0;
  right: 0;
`;
//MUST give this a background color of modal is transparent
const Modal =  css`
	position: fixed;
	z-index: 2;
  margin: 0;
`;
//centered vertically and horizontally: https://www.w3schools.com/howto/howto_css_center-vertical.asp
const Centered = css`
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;
const FullScreenModal = styled.div`
  ${Modal}
  ${FullScreen}
  background-color: white;
  overflow: hidden !important;
`;
const NonFullScreenCenteredModal = styled.div`
  ${Modal}
  ${Centered}
  top: 50%;
  left: 50%;
  background-color: white;
  width: 70vw;
  height: auto;
  border-radius: 5px;
  overflow-y: auto !important;
`;

export {FullScreenModal, NonFullScreenCenteredModal};