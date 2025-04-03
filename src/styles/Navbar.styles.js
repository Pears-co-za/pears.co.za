import styled from "styled-components";
import { Link } from 'react-router-dom';
import { colors } from "../constants";

export const StyledNavContainer = styled.nav`
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transform: translateY(${({ $isVisible }) => ($isVisible ? '0' : '-100%')});
  transition: transform 0.2s ease-in-out;
  z-index: 1000;
`;

export const StyledLogo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.25rem;
  color: ${colors.white};
  text-decoration: none;
  font-weight: 500;

  img.pears-logo {
    height: 40px;
    width: auto;
  }
`;

export const StyledHamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  z-index: 1001;

  span {
    height: 2px;
    width: 25px;
    background: ${colors.white};
    margin: 3px 0;
    transition: all 0.3s ease;

    &:nth-child(1) {
      transform: ${({ $isOpen }) => $isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      opacity: ${({ $isOpen }) => $isOpen ? '0' : '1'};
    }

    &:nth-child(3) {
      transform: ${({ $isOpen }) => $isOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'rotate(0)'};
    }
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const StyledOverlay = styled.div`
    display: none;
    
    @media (max-width: 768px) {
        display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 999;
    }
`;

export const StyledNavLinks = styled.div`
    display: flex;
    gap: 2rem;

    @media (max-width: 768px) {
        position: fixed;
        flex-direction: column;
        align-items: center;
        background-color: rgb(63, 63, 63);
        top: 0;
        right: ${({ $isOpen }) => ($isOpen ? '0' : '-100%')};
        height: 100vh;
        width: 250px;
        padding-top: 4rem;
        transition: right 0.3s ease-in-out;
        gap: 2rem;
        z-index: 1000; 
    }
`;

export const StyledNavLink = styled(Link)`
    color: ${colors.white};
    text-decoration: none;
    font-size: 0.875rem;
    position: relative;
    padding-bottom: 2px; // Add padding for the underline
    font-weight: 400;
    
    &:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: ${colors.paleYellow};
        transform: scaleX(0);
        transition: transform 0.3s ease;
        transform-origin: bottom right;
    }

    &:hover:after,
    &.active:after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }

    &:hover {
        color: ${colors.paleYellow};
    }

    @media (max-width: 768px) {
        font-size: 1.2rem;
    }
`;