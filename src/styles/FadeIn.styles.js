import styled, { keyframes } from 'styled-components';

const fadeInFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const StyledFadeInSection = styled.div`
  opacity: 0;
  transform: translateX(50px);
  visibility: hidden;
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  will-change: opacity, transform;

  &.visible {
    opacity: 1;
    transform: translateX(0);
    visibility: visible;
    animation: ${fadeInFromRight} 0.6s ease-out forwards;
  }
`;