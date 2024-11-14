import React, { useEffect, useRef } from 'react';
import { StyledFadeInSection } from '../../styles/FadeIn.styles';

function FadeIn({ children, delay = 0 }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add delay if specified
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, delay);
          // Once animation is triggered, we can unobserve
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1, // Trigger when at least 10% of the element is visible
        rootMargin: '50px', // Start animation slightly before the element comes into view
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
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