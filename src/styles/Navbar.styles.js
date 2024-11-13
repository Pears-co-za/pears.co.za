import styled from "styled-components";
import { Link } from 'react-router-dom';
import { colors } from "../constants";

export const StyledNavContainer = styled.nav`
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
    background-color: ${colors.yellow};
`;

export const StyledLogo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  color: #000;
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
    color: #000;
    text-decoration: none;
    font-size: 1rem;

    &:hover {
        text-decoration: underline;
    }
`;