import styles from '../modules/404.module.css';
import {
    Styled404Container,
    StyledDisplayHeading,
    StyledH1,
    StyledHightlightText
} from '../../styles/404.styles'
import FadeIn from "../common/FadeIn";

const ErrorPage404 = () => {
    return (
        <Styled404Container>
            <FadeIn delay={200}>
                <StyledDisplayHeading>
                    <StyledH1>
                        <div className={`${styles.errorText}`}>
                            Oops. It looks like the
                            <span id={`${styles.span}`} >page you're trying to reach</span>
                            <StyledHightlightText>doesn't exist</StyledHightlightText> or has been
                            <span id={`${styles.span}`}>moved.</span>
                        </div>
                    </StyledH1>
                </StyledDisplayHeading>
            </FadeIn>

        </Styled404Container>
    );
};

export default ErrorPage404;
