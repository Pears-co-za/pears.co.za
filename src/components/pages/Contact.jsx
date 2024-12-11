import { SocialMediaButtonCTA } from "../common/ButtonCTA";
import FadeIn from "../common/FadeIn";
import styles from '../../styles/modules/contact.module.css';
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

            <FadeIn delay={200}>

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

                        <p id={`${styles.getInTouch}`} className={`${styles.paragraphs}`}>
                            Get in touch
                        </p>

                        <div>
                            <p id={`${styles.blackText}`} >info@wearepears.co.za</p>
                            <p className={`${styles.paragraphs} ${styles.phone} `}>Phone</p>
                            <p id={`${styles.blackText}`}>+27 76 091 7529</p>
                        </div>

                        <div>
                            <p className={`${styles.paragraphs} ${styles.address}`}>
                                Address
                            </p>
                            <p id={`${styles.blackText}`} >Founders Hill, Sandton, Gauteng</p>
                        </div>
                    </LeftPanel>

                    <RightPanel>
                        <SocialMediaButtonCTA to="/twitter">Twitter</SocialMediaButtonCTA>
                        <SocialMediaButtonCTA to="/instagram">Instagram</SocialMediaButtonCTA>
                    </RightPanel>

                </StyledDisplayHeading>

            </FadeIn>

        </StyledContactContainer >
    );
}

export default Contact;
