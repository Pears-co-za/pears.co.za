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

export const StyledSocialMediaButton = styled(Link)`
  color: black;
  padding: 1rem 1.5rem 0rem; 
  text-decoration: none;
  font-weight:500;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 50%;
  transition: all 0.2s ease;
  font-size: 1.1rem;

  @media only screen and (max-width: 600px){
        background-color: #F0F0F0;
        color: black;
        padding: 0.75rem 1.5rem;
        border-radius: 100px;

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
   }

  svg {
    transform: rotate(-45deg);
    transition: transform 0.2s ease;
    
  }
  
  &:hover {
    color: grey;
    svg {
      color: grey;
      transform: rotate(0deg);
    }
  }
`;

export const StyledGoHomeButton = styled(Link)`
  background-color: black;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 100px;
  text-decoration: none;
  display: inline-flex;
  align-items: baseline;
  gap: 0.5rem;
  width: fit-content;
  font-size: 1.2rem;
  border: 1px solid transparent;
  transition: all 0.2s ease;

   @media only screen and (max-width: 600px){
        font-size: 1rem;
    }

  svg {
    transform: rotate(-45deg);
    transition: transform 0.2s ease;
  }
  
  &:hover {
    background-color: white;
    color:black;
    border: 1px solid black;
    
    svg {
      transform: rotate(0deg);
    }
  }
`;
