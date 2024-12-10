import { StyledButton, StyledGoHomeButton, StyledSocialMediaButton } from '../../styles/ButtonCTA.styles';

function ButtonCTA({ children, to, className }) {
    return (
        <StyledButton to={to} className={className}>
            {children}
            <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
        </StyledButton>
    );
}

function SocialMediaButtonCTA({ children, to, className }) {
    return (
        <StyledSocialMediaButton to={to} className={className}>
            {children}
            <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <line x1="1" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
        </StyledSocialMediaButton>
    );
}

function GoHomeButtonCTA({ children, to, className }) {
    return (
        <StyledGoHomeButton to={to} className={className}>
            {children}
            <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <line x1="1" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
        </StyledGoHomeButton>
    );
}

export { ButtonCTA, SocialMediaButtonCTA, GoHomeButtonCTA };