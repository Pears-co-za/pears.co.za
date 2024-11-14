import ButtonCTA from "../common/ButtonCTA";
import Accordion from '../common/Accordion';
import {
    StyledHightlightText,
    StyledDisplayHeading,
    StyledHomeContainer,
    Styled3ColSection,
    StyledH1,
} from "../../styles/Home.styles";

function Home() {
    return (
        <StyledHomeContainer>
            <StyledDisplayHeading>
                Inspired by nature, driven by technology, perfected in
                partnership.
                <StyledHightlightText>Welcome to Pears.</StyledHightlightText>
            </StyledDisplayHeading>
            <Styled3ColSection>
                <p>Our Story</p>
                <StyledH1>
                    We're a team of IT specialists inspired by nature's harmony.
                    <StyledHightlightText>
                        {" "}
                        Let us help you reach new heights.
                    </StyledHightlightText>
                </StyledH1>
                <ButtonCTA to="/about">About Us</ButtonCTA>
            </Styled3ColSection>
            <p>Services</p>
            <Accordion />
        </StyledHomeContainer>
    );
}

export default Home;
