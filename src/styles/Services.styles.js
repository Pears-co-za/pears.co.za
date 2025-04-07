import styled from "styled-components";
import { colors } from "../constants";

export const ServicesContainer = styled.div`
    width: 100%;
    padding: 4rem 0;
    background-color: ${colors.white};
`;

export const ContentContainer = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 4rem;

    @media (max-width: 768px) {
        padding: 0 2rem;
    }

    @media (max-width: 480px) {
        padding: 0 1rem;
    }
`;

export const TabsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 3rem;
    border-bottom: 1px solid ${colors.lightGray};

    @media (max-width: 768px) {
        display: none;
    }
`;

export const TabButton = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem 1rem;
    background: ${(props) => (props.active ? "#759066" : "transparent")};
    border: none;
    border-bottom: 3px solid
        ${(props) => (props.active ? colors.primary : "transparent")};
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: inherit;
    width: 25%;

    &:hover {
        background: #C6CEBE;
    }
`;

export const TabIcon = styled.div`
  margin-bottom: 0.75rem;
  
  img {
    width: 24px;
    height: 24px;
  }
`;

export const TabLabel = styled.div`
    color: ${colors.darkGray};
    font-size: 0.9rem;
    font-weight: 500;
    text-align: center;
`;

export const MobileSelectContainer = styled.div`
    margin-bottom: 2rem;
    display: none;
    position: relative;

    @media (max-width: 768px) {
        display: block;
    }
`;

// In your Services.styles.js, update MobileSelect
export const MobileSelect = styled.select`
  width: 100%;
  padding: 1rem 3rem 1rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  color: white;
  border: 1px solid #e2e8df;
  border-radius: 8px;
  background-color: #759066;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1.5em;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(117, 144, 102, 0.3);
  }
  
  &:hover {
    background-color: #6a8159;
  }
`;

export const ServiceContentArea = styled.div`
    margin-top: 2rem;
`;

export const ServiceHeader = styled.div`
    margin-bottom: 3rem;
`;

export const ServiceTitle = styled.h2`
    font-size: 2rem;
    font-weight: 500;
    color: ${colors.darkGray};
    margin-bottom: 1.5rem;
`;

export const ServiceDescription = styled.p`
    font-size: 1.1rem;
    line-height: 1.6;
    color: ${colors.gray};
    max-width: 900px;
`;

export const SectionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4rem;
`;

export const SectionContainer = styled.div`
    margin-bottom: 2rem;
    border-bottom: 1px solid ${colors.lightGray};
    padding-bottom: 3rem;

    &:last-child {
        border-bottom: none;
        padding-bottom: 0;
    }
`;

export const SectionTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 500;
    color: ${colors.darkGray};
    margin-bottom: 1rem;
`;

export const SectionDescription = styled.p`
    font-size: 1rem;
    line-height: 1.5;
    color: ${colors.gray};
    margin-bottom: 1.5rem;
`;

export const ItemsList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;

    @media (max-width: 640px) {
        grid-template-columns: 1fr;
    }
`;

export const ServiceItem = styled.div`
    padding: 1.5rem;
    background-color:rgba(198, 206, 190, 0.32);
    border: 1px solid #eaeaea;
    border-radius: 4px;
    transition: all 0.3s ease;
    max-width: 300px;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
        border-color: ${colors.lightGray};
    }
`;

export const ItemTitle = styled.h4`
    font-size: 1.1rem;
    font-weight: 500;
    color: ${colors.darkGray};
    margin-bottom: 0.5rem;
`;

export const ItemDescription = styled.p`
    font-size: 0.9rem;
    line-height: 1.5;
    color: ${colors.gray};
`;

export const ItemsGrid = styled.div`
  /* display: grid; */
  /* grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;


export const CustomMobileDropdown = styled.div`
  position: relative;
  margin-bottom: 2rem;
  display: none;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

export const DropdownButton = styled.button`
  width: 100%;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #759066;
  border: 1px solid #e2e8df;
  border-radius: 8px;
  color: white;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  
  &:hover {
    background-color: #6a8159;
  }
  
  svg {
    transition: transform 0.3s ease;
    transform: ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0)'};
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  width: 100%;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 10;
  overflow: hidden;
  transition: all 0.3s ease;
  opacity: ${props => props.isOpen ? 1 : 0};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transform: ${props => props.isOpen ? 'translateY(0)' : 'translateY(-10px)'};
`;

export const DropdownItem = styled.div`
  padding: 1rem 1.5rem;
  color: ${colors.darkGray};
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  background-color: ${props => props.isActive ? 'rgba(198, 206, 190, 0.3)' : 'transparent'};
  border-left: 4px solid ${props => props.isActive ? '#759066' : 'transparent'};
  
  &:hover {
    background-color: rgba(198, 206, 190, 0.15);
  }
`;