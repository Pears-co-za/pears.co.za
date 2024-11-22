import { SocialMediaButtonCTA } from "../common/ButtonCTA";
// import Accordion from "../common/Accordion";
import FadeIn from "../common/FadeIn";
import styles from '../modules/contact.module.css';
import {
    StyledContactContainer,
    StyledH1,
    StyledDisplayHeading,
    LeftPanel,
    RightPanel,
    StyledH2
} from "../../styles/Contact.styles";

function Contact() {
    return (
        <StyledContactContainer>
            {/* <FadeIn>
                    <StyledDisplayHeading>
                        Inspired by nature, driven by technology, perfected in
                        partnership.
                        <StyledHightlightText>
                            Welcome to Pears.
                        </StyledHightlightText>
                    </StyledDisplayHeading>
                </FadeIn> */}

            <FadeIn delay={200}>
                {/* <div className="contactUsContainer"> */}

                <StyledDisplayHeading>

                    <LeftPanel>

                        <div>
                            <p className={`${styles.paragraphs} ${styles.largeText}`}>Contact</p>

                            <StyledH1>
                                Get in touch
                            </StyledH1>
                            <StyledH2>
                                Ready to grow together? Reach out
                                <span id={`${styles.span}`}>to Pears and let’s start building </span> <span id={`${styles.span}`}>your digital future..</span>
                            </StyledH2>
                        </div>

                        <p className={`${styles.paragraphs}`}>Get in touch</p>

                        <div>
                            <p>info@wearepears.co.za</p>
                            <p className={`${styles.paragraphs} ${styles.phone} `}>Phone</p>
                            <p>+27 76 091 7529</p>
                        </div>

                        <div>
                            <p className={`${styles.paragraphs} ${styles.address} `}>Address</p>
                            <p>Founders Hill, Sandton, Gauteng</p>
                        </div>
                    </LeftPanel>

                    <RightPanel>
                        <SocialMediaButtonCTA to="/about">Twitter</SocialMediaButtonCTA>
                        <SocialMediaButtonCTA to="/about">Instagram</SocialMediaButtonCTA>
                    </RightPanel>

                </StyledDisplayHeading>
            </FadeIn>

            {/* <FadeIn delay={400}>
                    <StyledServicesSection>
                    <p>Services</p>
                    <Accordion />
                    </StyledServicesSection>
                </FadeIn> */}

        </StyledContactContainer>
    );
}

export default Contact;
