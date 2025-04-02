import { ButtonCTA } from "../common/ButtonCTA";
import Accordion from "../common/Accordion";
import FadeIn from "../common/FadeIn";
import {
    StyledHightlightText,
    StyledDisplayHeading,
    StyledHomeContainer,
    Styled3ColSection,
    StyledH1,
    StyledServicesSection,
} from "../../styles/Home.styles";

function Home() {
    return (
        <StyledHomeContainer>
            <div>
                <FadeIn>
                    <StyledDisplayHeading>
                        Heeloooooo.{" "}
                        <StyledHightlightText>
                            Welcome to Pears.
                        </StyledHightlightText>
                    </StyledDisplayHeading>
                </FadeIn>

                <FadeIn delay={200}>
                    <Styled3ColSection>
                        <p>Our Story</p>
                        <StyledH1>
                            We're a team of IT specialists inspired by nature's
                            harmony.
                            <StyledHightlightText>
                                {" "}
                                Let us help you reach new heights.
                            </StyledHightlightText>
                        </StyledH1>
                        <ButtonCTA to="/about">About Us</ButtonCTA>
                    </Styled3ColSection>
                </FadeIn>

                <FadeIn delay={400}>
                    <StyledServicesSection>
                        <p>Services</p>
                        <Accordion />
                    </StyledServicesSection>
                </FadeIn>
            </div>
        </StyledHomeContainer>
    );
}

export default Home;
