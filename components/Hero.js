import Link from 'next/link';
import styled from 'styled-components';

//function to display whether we are closed or open
function OpenOrCLose(props) {
    var now = new Date();
    if (now.getDay() >= 0 && now.getDay() <= 5) {
        if (now.getHours() >= 11 && now.getHours() <= 21) {
            return <p>We're today until 9 pm.</p>;
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
	grid-column-start: 1;
    grid-column-end: 4;
    /* grid-template-columns: 1fr;
    display: grid; 
    grid-column-gap: 20px; */

    width: 100%;
    height: 340px;
    box-sizing: border-box;
    padding: 10vw 10vw 10vw 10vw;
    background-image: url('/AdobeStock_309157141.jpeg');
    /* (https://res.cloudinary.com/druhu3xb6/image/upload/q_auto:low,f_auto/v1592479764/Junzi/Banner/junzi_kitchen_banner.png); */
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;


    @media (min-width:900px){
        /* grid-template-columns: 0.5fr 1fr; */
    }
    .heroBannerText {
        position: absolute;
        font-size: 20px;
        top: 33%;
        background-color: white;
        border-radius : 0px 3px 3px 0px;
        padding: 10px 20px 10px 50px;
    }
/* 
    .content {
        font-family: sans-serif;
        line-height: 2;
        color: white;
        width: 25em;
        max-width: 100%;
    } */
`;

const Hero = () => (
    <StyledHeroBanner>
        <div className="">
            <h1>You want Pho. We get it. </h1>
            <OpenOrCLose/>  
            {/* <a href="/">enter code 'getpho' for 10% off your first order.</a> */}
        </div>
    </StyledHeroBanner>
);
export default Hero;

{/* <p>mon - thurs: 11 am - 9 pm (9:30 pm fri & sat )</p> */}