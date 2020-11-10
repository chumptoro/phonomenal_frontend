import Link from 'next/link';
import styled from 'styled-components';
import MediaQuery, { useMediaQuery }  from 'react-responsive';
import {ResponsiveGridLeftRightMargin} from  './Styling/Responsive_Grids';

//function to display whether we are closed or open
function OpenOrCLose(props) {
    var now = new Date();
    if (now.getDay() >= 0 && now.getDay() <= 5) {
        if (now.getHours() >= 11 && now.getHours() <= 21) {
          return <p>We're open today until 9 pm.</p>;
        }
    }
    else {
        if (now.getHours() >= 11 && now.getHours() <= 21 && now.getMinutes() <= 30) {
          return <p>We're open today until 9:30 pm.</p>;
        }
    }
    return <p>We're closed</p>;
}

//header is a sub-component of Page so it can reference props.theme!
const StyledHeroBanner = styled.div` 
	@media (max-width : 667px) {
		background-image: url('');
		width:0px;
		height: 0px;
		padding: 0px;
		margin: 0px;
	}

    margin-top: ${props => props.theme.element_right_below_top_nav_margin};
    display: grid;
    grid-row-gap: 0px;
    grid-column-gap:0;
    width: 100%;
    height: 386px;
    box-sizing: border-box;
    padding: 10vw 10vw 10vw 10vw;
    background-image: url('/heroes/hero.jpeg');
    /* background-image: url('vietfoodpnoramic.jpeg'); */
    /* background-image: url('/AdobeStock_309157141.jpeg'); */
    /* background-image: url('/AdobeStock_309156516.jpeg'); */
    /* (https://res.cloudinary.com/druhu3xb6/image/upload/q_auto:low,f_auto/v1592479764/Junzi/Banner/junzi_kitchen_banner.png); */
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

		${ResponsiveGridLeftRightMargin};

    .heroBannerText {
        /* position: absolute;
        font-size: 20px;
        top: 33%;
        background-color: white;
        border-radius : 0px 3px 3px 0px;
        padding: 10px 20px 10px 50px; */
        grid-column-start:2;
    }
`;

const Hero = () => {
	const minIphone678XWidth = useMediaQuery({ minWidth: 0 });
	const maxIphone678XWidth = useMediaQuery({ maxWidth: 767 }); 
	if (minIphone678XWidth && maxIphone678XWidth) {
		return(
			<StyledHeroBanner>
			</StyledHeroBanner>
		);
	}
	return(
    <StyledHeroBanner>
        {/* <div className="heroBannerText">
            <h1>You want Pho. We get it. </h1>
            <OpenOrCLose/>  
            <a href="/">enter code 'getpho' for 10% off your first order.</a>
        </div> */}
    </StyledHeroBanner>
	);
}
export default Hero;

{/* <p>mon - thurs: 11 am - 9 pm (9:30 pm fri & sat )</p> */}