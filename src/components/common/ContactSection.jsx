import React, { useState } from "react";
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

const IllustrationContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;

    @media (max-width: 992px) {
        display: none;
    }
`;

const MobileIllustration = styled.div`
    display: none;
    
    @media (max-width: 992px) {
        display: block;
        text-align: center;
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;
        
        img {
            max-width: 250px;
            height: auto;
        }
    }
`;

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

const SuccessMessage = styled.div`
    background-color: #4CAF50;
    color: white;
    padding: 15px;
    border-radius: 4px;
    text-align: center;
    margin-top: 15px;
`;

function ContactSection({ 
    variant = 'default',
    fadeInDelay = { left: 200, right: 300 }
}) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        whatsapp: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://formsubmit.co/ajax/bongiwe.sibanda@wearepears.co.za', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    ...formData,
                    _subject: variant === 'home' 
                        ? 'New contact form submission from homepage' 
                        : 'New contact form submission'
                })
            });

            if (response.ok) {
                // Clear form and show success message
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    whatsapp: '',
                    message: ''
                });
                setIsSubmitted(true);

                // Hide success message after 3 seconds
                setTimeout(() => {
                    setIsSubmitted(false);
                }, 3000);
            } else {
                // Handle error
                console.error('Form submission failed');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <StyledContactSection>
            <FadeIn delay={fadeInDelay.left}>
                <LeftPanel>
                    <StyledContactIntro>
                        <StyledH1>Ready?<br />Let's Talk</StyledH1>
                        <StyledSocialIcons>
                            <WhatsAppIcon href="https://wa.me/+27647572457" target="_blank" rel="noopener noreferrer">
                                <FaWhatsapp />
                            </WhatsAppIcon>
                            <LinkedInIcon href="https://www.linkedin.com/in/pears-consulting-1842b635b/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin />
                            </LinkedInIcon>
                            <PhoneIcon href="tel:+27647572457">
                                <FaPhone />
                            </PhoneIcon>
                        </StyledSocialIcons>

                        {/* Desktop Illustrations */}
                        <IllustrationContainer>
                            <img 
                                src="/assets/form-img-1.png" 
                                alt="Illustration 1" 
                                style={{ width: '30%', height: 'auto' }} 
                            />
                            <img 
                                src="/assets/form-img-2.png" 
                                alt="Illustration 2" 
                                style={{ width: '30%', height: 'auto' }} 
                            />
                            <img 
                                src="/assets/form-img-3.png" 
                                alt="Illustration 3" 
                                style={{ width: '30%', height: 'auto' }} 
                            />
                        </IllustrationContainer>

                        {/* Mobile Illustration */}
                        <MobileIllustration>
                            <img 
                                src="/assets/form-img-mobile.png" 
                                alt="Illustration" 
                            />
                        </MobileIllustration>
                    </StyledContactIntro>
                </LeftPanel>
            </FadeIn>
            
            <FadeIn delay={fadeInDelay.right}>
                <RightPanel>
                    <StyledFormContainer>
                        <StyledH2>Send us a message, and we will get in touch</StyledH2>
                        
                        <StyledForm onSubmit={handleSubmit}>
                            <StyledFormGroup>
                                <StyledLabel htmlFor="name">Your Name *</StyledLabel>
                                <StyledInput 
                                    type="text" 
                                    name="name" 
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required 
                                />
                            </StyledFormGroup>
                            
                            <StyledFormGroup>
                                <StyledLabel htmlFor="email">Email *</StyledLabel>
                                <StyledInput 
                                    type="email" 
                                    name="email" 
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required 
                                />
                            </StyledFormGroup>
                            
                            <StyledFormGroup>
                                <StyledLabel htmlFor="subject">Subject</StyledLabel>
                                <StyledInput 
                                    type="text" 
                                    name="subject" 
                                    id="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                />
                            </StyledFormGroup>
                            
                            <StyledFormGroup>
                                <StyledLabel htmlFor="whatsapp">WhatsApp Number</StyledLabel>
                                <StyledInput 
                                    type="tel" 
                                    name="whatsapp" 
                                    id="whatsapp"
                                    value={formData.whatsapp}
                                    onChange={handleChange}
                                />
                            </StyledFormGroup>
                            
                            <StyledFormGroup>
                                <StyledLabel htmlFor="message">Message *</StyledLabel>
                                <StyledTextarea 
                                    name="message" 
                                    id="message" 
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></StyledTextarea>
                            </StyledFormGroup>
                            
                            <StyledSubmitButton type="submit">
                                Submit Form <img src="/assets/bee-btn-icon.png" alt="Bee icon" />
                            </StyledSubmitButton>

                            {isSubmitted && (
                                <SuccessMessage>
                                    Thank you! Your message has been submitted successfully.
                                </SuccessMessage>
                            )}
                        </StyledForm>
                    </StyledFormContainer>
                </RightPanel>
            </FadeIn>
        </StyledContactSection>
    );
}

export default ContactSection;