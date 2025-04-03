import React from "react";
import { ButtonCTA } from "../common/ButtonCTA"; // Import your custom button
import {
    StyledHeroSection,
    StyledHeroContent,
    StyledHeroText,
    StyledHeroHeading,
    StyledBackgroundOverlay
} from "../../styles/Hero.styles";

const Hero = ({ 
    backgroundImage, 
    title, 
    buttonText, 
    buttonLink, 
    overlayOpacity = 0.5,
    textAlign = "center",
    fullHeight = true
}) => {
    return (
        <StyledHeroSection 
            $backgroundImage={backgroundImage}
            $fullHeight={fullHeight}
        >
            <StyledBackgroundOverlay $opacity={overlayOpacity} />
            <StyledHeroContent>
                <StyledHeroText $textAlign={textAlign}>
                    <StyledHeroHeading>
                        {title}
                    </StyledHeroHeading>
                    {buttonText && buttonLink && (
                        <ButtonCTA to={buttonLink}>
                            {buttonText}
                        </ButtonCTA>
                    )}
                </StyledHeroText>
            </StyledHeroContent>
        </StyledHeroSection>
    );
};

export default Hero;