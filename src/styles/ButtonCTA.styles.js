import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledButton = styled(Link)`
  background-color: #F0F0F0;
  color: black;
  padding: 0.75rem 1.5rem;
  border-radius: 100px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  width: fit-content;
  border: 1px solid transparent;
  transition: all 0.2s ease;
  
  svg {
    transform: rotate(-45deg);
    transition: transform 0.2s ease;
  }
  
  &:hover {
    background-color: white;
    border: 1px solid black;
    
    svg {
      transform: rotate(0deg);
    }
  }
`;