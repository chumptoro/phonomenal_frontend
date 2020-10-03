import Link from 'next/link';
import styled from 'styled-components';

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
    margin-top: 76px;
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

    @media (max-width: 300px) {
    grid-template-columns: ${props => props.theme.grid_template_desktop_small_width};
    }
    @media (min-width: 301px) {
      grid-template-columns: ${props => props.theme.grid_template_desktop_mid_width};
    }
    @media (min-width: 1455px) {
      grid-template-columns: ${props => props.theme.grid_template_desktop_large_width};
    }

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

const Hero = () => (
    <StyledHeroBanner>
        <div className="heroBannerText">
            {/* <h1>You want Pho. We get it. </h1>
            <OpenOrCLose/>   */}
            {/* <a href="/">enter code 'getpho' for 10% off your first order.</a> */}
        </div>
    </StyledHeroBanner>
);
export default Hero;

{/* <p>mon - thurs: 11 am - 9 pm (9:30 pm fri & sat )</p> */}