import React from "react";
// import { Link } from "react-router-dom";
import {
    StyledHeroSection,
    StyledHeroContent,
    StyledHeroText,
    StyledHeroHeading,
    StyledHeroSubtitle,
    StyledHeroButton,
    StyledBackgroundOverlay
} from "../../styles/Hero.styles";

const Hero = ({ 
    backgroundImage, 
    title, 
    subtitle,
    buttonText, 
    buttonLink, 
    overlayOpacity = 0.5,
    textAlign = "left",
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
                    {subtitle && (
                        <StyledHeroSubtitle>
                            {subtitle}
                        </StyledHeroSubtitle>
                    )}
                    {buttonText && buttonLink && (
                        <StyledHeroButton to={buttonLink}>
                            {buttonText}
                        </StyledHeroButton>
                    )}
                </StyledHeroText>
            </StyledHeroContent>
        </StyledHeroSection>
    );
};

export default Hero;