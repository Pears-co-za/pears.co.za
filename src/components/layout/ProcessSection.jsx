import React from "react";
import styled from "styled-components";
import {ButtonCTA} from "../common/ButtonCTA";

const ProcessSection = () => {
  return (
    <StyledProcessSection>
      <StyledProcessOverlay />
      <StyledProcessContent>
        <StyledProcessLabel>How We Do Things</StyledProcessLabel>
        <StyledProcessHeading>Our Process Explained</StyledProcessHeading>
        <ButtonCTA to="/processes">See All Our Processes</ButtonCTA>
      </StyledProcessContent>
    </StyledProcessSection>
  );
};

const StyledProcessSection = styled.section`
  position: relative;
  width: 100%;
  height: 480px;
  background-image: url('/assets/process-bg-desktop.png');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 4rem;
  overflow: hidden;
  
  @media (max-width: 1024px) {
    background-image: url('/assets/process-bg-tablet.png');
    height: 400px;
    align-items: center;
    justify-content: center;
    padding: 0 2rem;
    text-align: center;
  }
  
  @media (max-width: 768px) {
    background-image: url('/assets/process-bg-mobile.png');
    height: 360px;
  }
`;

const StyledProcessOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1;
`;

const StyledProcessContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 500px;
  
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100%;
  }
`;

const StyledProcessLabel = styled.div`
  font-size: 1rem;
  color: white;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const StyledProcessHeading = styled.h2`
  font-size: 3.5rem;
  font-weight: 500;
  color: white;
  margin-bottom: 2rem;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export default ProcessSection;