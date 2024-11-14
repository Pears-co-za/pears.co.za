import styled from "styled-components";
import { Link } from 'react-router-dom';
import { colors } from "../constants";

export const StyledNavContainer = styled.nav`
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.yellow};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transform: translateY(${({ isVisible }) => (isVisible ? '0' : '-100%')});
  transition: transform 0.2s ease-in-out;
  z-index: 1000;
`;

export const StyledLogo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  color: ${colors.black};
  text-decoration: none;
  font-weight: 500;

  img.pears-logo {
    height: 40px;
    width: auto;
  }
`;

export const StyledNavLinks = styled.div`
    display: flex;
    gap: 2rem;
`;
export const StyledNavLink = styled(Link)`
    color: ${colors.black};
    text-decoration: none;
    font-size: 1rem;

    &:hover {
        text-decoration: underline;
        color: ${colors.dark70};
    }
`;
