import React, { useEffect, useRef } from 'react';
import { StyledFadeInSection } from '../../styles/FadeIn.styles';

function FadeIn({ children, delay = 0 }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentElement = sectionRef.current; // Store ref in variable

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [delay]);

  return (
    <StyledFadeInSection ref={sectionRef}>
      {children}
    </StyledFadeInSection>
  );
}

export default FadeIn;