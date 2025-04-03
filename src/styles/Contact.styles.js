import styled from "styled-components";
import { colors } from "../constants";

// Add background color to the entire page
export const StyledContactPage = styled.div`
    background-color: #f9faf8;
    width: 100%;
`;

export const StyledContactContainer = styled.div`
    padding: 3rem 4rem;
    margin-bottom: 2rem;
    max-width: 1280px;
    margin: 0 auto;

    @media only screen and (min-width: 1540px) {
        padding: 2rem 8rem;
    }

    @media only screen and (max-width: 768px) {
        padding: 2rem 2rem;
    }

    @media only screen and (max-width: 500px) {
        padding: 2rem 1rem;
        width: 100%;
        min-width: 350px;
        margin-bottom: 0.5rem;
    }
`;

export const LeftPanel = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: space-between;
    word-break: normal;

    @media (max-width: 768px) {
        margin-bottom: 2rem;
    }
`;

export const RightPanel = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex: 1;
    background-color:rgb(255, 255, 255);
    padding: 58px 32px;
border-radius: 8px;
    @media only screen and (max-width: 800px) {
        width: 100%;
        margin: 0;
    }
`;

export const StyledH1 = styled.h1`
    font-size: 3rem;
    font-weight: 500;
    margin: 0 0 1.5rem;
    line-height: 1.2;

    @media only screen and (max-width: 768px) {
        font-size: 2.5rem;
    }

    @media only screen and (max-width: 500px) {
        font-size: 2.2rem;
    }
`;

export const StyledH2 = styled.h2`
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.6;
    margin-bottom: 1.5rem;

    @media only screen and (max-width: 768px) {
        font-size: 1.1rem;
    }
`;

export const StyledContactSection = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 4rem;
    margin-top: 3rem;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 2rem;
    }
`;

export const StyledContactImagesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;

    @media (max-width: 992px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 500px) {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
`;

export const StyledContactImage = styled.img`
    width: 100%;
    height: auto;
    background-color: white;
    padding: 2rem;
    border-radius: 8px;
    object-fit: contain;

    @media (max-width: 768px) {
        padding: 1.5rem;
    }

    // Only show first image on mobile
    &:nth-child(n + 2) {
        @media (max-width: 500px) {
            display: none;
        }
    }

    // Only show first two images on tablet
    &:nth-child(n + 3) {
        @media (max-width: 992px) and (min-width: 501px) {
            display: none;
        }
    }
`;

export const StyledContactIntro = styled.div`
    display: flex;
    flex-direction: column;
`;

// Styling just for the social icons
export const StyledSocialIcons = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
`;

export const StyledSocialIcon = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    color: white;
    font-size: 1.5rem;
    transition: all 0.3s ease;

    // Specific colors for each icon type
    background-color: ${(props) => {
        if (props.children.type === "FaWhatsapp") return "#25D366"; // WhatsApp green
        if (props.children.type === "FaLinkedin") return "#0077B5"; // LinkedIn blue
        if (props.children.type === "FaPhone") return "#FFC107"; // Phone yellow
        return "#759066"; // Default green if no match
    }};

    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
`;

export const StyledFormContainer = styled.div`
    width: 100%;
`;

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
`;

export const StyledFormGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const StyledLabel = styled.label`
    font-size: 0.9rem;
    color: #666;
`;

export const StyledInput = styled.input`
    padding: 0.75rem 0.5rem;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    font-size: 1rem;
    transition: border-color 0.3s;

    &:focus {
        outline: none;
        border-color: #759066;
    }
`;

export const StyledTextarea = styled.textarea`
    padding: 0.75rem 0.5rem;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    font-size: 1rem;
    resize: vertical;
    min-height: 120px;
    transition: border-color 0.3s;

    &:focus {
        outline: none;
        border-color: #759066;
    }
`;

export const StyledSubmitButton = styled.button`
    background-color: #759066;
    color: white;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 50px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    width: 100%;
    gap: 0.5rem;
    align-self: flex-start;
    margin-top: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 18px;
        height: 18px;
        margin-left: 0.5rem;
        transition: transform 0.3s ease;
    }

    &:hover {
        background-color: ${colors.paleYellow || "#F8E16D"};
        color: #000;

        img {
            transform: translateY(-3px);
        }
    }
`;
