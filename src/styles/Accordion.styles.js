import styled from "styled-components";

export const StyledAccordionContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`;

export const StyledAccordionItem = styled.div`
    border-bottom: 1px solid #e0e0e0;
    margin-bottom: 1rem;
`;

export const StyledAccordionHeader = styled.button`
    width: 100%;
    padding: 1.5rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: none;
    border: none;
    cursor: pointer;
    text-align: left;

    svg {
        transform: ${({ $isOpen }) =>
            $isOpen ? "rotate(180deg)" : "rotate(0deg)"};
        transition: transform 0.3s ease;
    }
`;

export const StyledAccordionTitle = styled.h2`
    font-size: 2rem;
    font-weight: 500;
    margin: 0;

    @media (max-width: 768px) {
        font-size: 1.6rem;
        max-width: 80%;
    }

    @media (max-width: 480px) {
        font-size: 1.4rem;
        max-width: 100%;
        text-align: left;
    }
`;

export const StyledAccordionContent = styled.div`
    max-height: ${({ $isOpen }) => ($isOpen ? "500px" : "0")};
    opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};
    overflow: hidden;
    transition: all 0.3s ease-in-out;
    padding-bottom: ${({ $isOpen }) => ($isOpen ? "2rem" : "0")};
`;

export const StyledAccordionList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const StyledAccordionListItem = styled.li`
    font-size: 1.25rem;
    margin-bottom: 1rem;

    &:last-child {
        margin-bottom: 0;
    }
`;
