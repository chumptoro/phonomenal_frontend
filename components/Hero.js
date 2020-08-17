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
    grid-column-end: -1;
    grid-template-columns: 1fr;
    display: grid; 
    grid-column-gap: 20px;

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
    .heroBannerImage img {
        width:1100px; 
        height:auto;
        
    }


`;

const Hero = () => (
    <StyledHeroBanner>
        <div className="heroBannerImage">
            <img src="/heroes/ntramy_beef_pho_bowl.jpeg" alt="" />

            <div className="heroBannerText">
            {/* <p>mon - thurs: 11 am - 9 pm (9:30 pm fri & sat )</p> */}
            <OpenOrCLose/>
            <p>Come on in. Let us treat you to a bowl of pho-nomenol! </p> 
        </div>
        </div>
    </StyledHeroBanner>
);

export default Hero;