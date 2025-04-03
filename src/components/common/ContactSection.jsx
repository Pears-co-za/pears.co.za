import React from "react";
import { FaWhatsapp, FaLinkedin, FaPhone } from "react-icons/fa";
import FadeIn from "./FadeIn";
import styled from "styled-components";

import { 
    StyledContactSection,
    LeftPanel,
    RightPanel,
    StyledH1,
    StyledH2,
    StyledSocialIcons,
    StyledContactIntro,
    StyledFormContainer,
    StyledForm,
    StyledInput,
    StyledTextarea,
    StyledSubmitButton,
    StyledLabel,
    StyledFormGroup
} from "../../styles/Contact.styles";

const WhatsAppIcon = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: #25D366;
    color: white;
    font-size: 1.5rem;
    transition: all 0.3s ease;
    
    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
`;

const LinkedInIcon = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: #0077B5;
    color: white;
    font-size: 1.5rem;
    transition: all 0.3s ease;
    
    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
`;

const PhoneIcon = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: #FFC107;
    color: white;
    font-size: 1.5rem;
    transition: all 0.3s ease;
    
    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
`;

function ContactSection({ 
    variant = 'default',
    fadeInDelay = { left: 200, right: 300 }
}) {
    return (
        <StyledContactSection>
            <FadeIn delay={fadeInDelay.left}>
                <LeftPanel>
                    <StyledContactIntro>
                        <StyledH1>Ready?<br />Let's Talk</StyledH1>
                        <StyledSocialIcons>
                            <WhatsAppIcon href="https://wa.me/+27123456789" target="_blank" rel="noopener noreferrer">
                                <FaWhatsapp />
                            </WhatsAppIcon>
                            <LinkedInIcon href="https://linkedin.com/company/wearepears" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin />
                            </LinkedInIcon>
                            <PhoneIcon href="tel:+27123456789">
                                <FaPhone />
                            </PhoneIcon>
                        </StyledSocialIcons>
                    </StyledContactIntro>
                </LeftPanel>
            </FadeIn>
            
            <FadeIn delay={fadeInDelay.right}>
                <RightPanel>
                    <StyledFormContainer>
                        <StyledH2>Send us a message, and we will get in touch</StyledH2>
                        
                        <StyledForm 
                            action="https://formsubmit.co/bongiwe.sibanda@wearepears.co.za" 
                            method="POST"
                        >
                            {/* FormSubmit.co configuration */}
                            <input type="hidden" name="_subject" value={
                                variant === 'home' 
                                    ? 'New contact form submission from homepage' 
                                    : 'New contact form submission'
                            } />
                            <input type="hidden" name="_captcha" value="false" />
                            <input type="hidden" name="_template" value="table" />
                            <input type="text" name="_honey" style={{ display: 'none' }} />
                            <input type="hidden" name="_next" value="https://wearepears.co.za/thank-you" />
                            
                            <StyledFormGroup>
                                <StyledLabel htmlFor="name">Your Name *</StyledLabel>
                                <StyledInput 
                                    type="text" 
                                    name="name" 
                                    id="name"
                                    required 
                                />
                            </StyledFormGroup>
                            
                            <StyledFormGroup>
                                <StyledLabel htmlFor="email">Email *</StyledLabel>
                                <StyledInput 
                                    type="email" 
                                    name="email" 
                                    id="email"
                                    required 
                                />
                            </StyledFormGroup>
                            
                            <StyledFormGroup>
                                <StyledLabel htmlFor="subject">Subject</StyledLabel>
                                <StyledInput 
                                    type="text" 
                                    name="subject" 
                                    id="subject"
                                />
                            </StyledFormGroup>
                            
                            <StyledFormGroup>
                                <StyledLabel htmlFor="whatsapp">WhatsApp Number</StyledLabel>
                                <StyledInput 
                                    type="tel" 
                                    name="whatsapp" 
                                    id="whatsapp"
                                />
                            </StyledFormGroup>
                            
                            <StyledFormGroup>
                                <StyledLabel htmlFor="message">Message *</StyledLabel>
                                <StyledTextarea 
                                    name="message" 
                                    id="message" 
                                    rows="4"
                                    required
                                ></StyledTextarea>
                            </StyledFormGroup>
                            
                            <StyledSubmitButton type="submit">
                                Submit Form <img src="/assets/bee-btn-icon.png" alt="Bee icon" />
                            </StyledSubmitButton>
                        </StyledForm>
                    </StyledFormContainer>
                </RightPanel>
            </FadeIn>
        </StyledContactSection>
    );
}

export default ContactSection;