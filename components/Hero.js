import Link from 'next/link';
import styled from 'styled-components';

//header is a sub-component of Page so it can reference props.theme!
const StyledHeroBanner = styled.div`
	grid-column-start: 2;
    grid-template-columns: 1fr;
    display: grid;
    grid-column-gap: 20px;

    @media (min-width:900px){
        grid-template-columns: 0.5fr 1fr;
    }

    .heroBannerText {
        font-size: 20px;
        font
    }
    .heroBannerImage img {
        width:100%; 
        height:auto;
        border-radius: 4px;
    }
`;

const Hero = () => (
    <StyledHeroBanner>
        <div className="heroBannerText">
            <p>
                monday - thursday: 11 am to 9 pm
            </p> 
        </div>
        <div className="heroBannerImage">
            <img src="/heroes/ntramy_beef_pho_bowl.jpeg" alt="" />
        </div>
    </StyledHeroBanner>
);

export default Hero;