import { StyledHomeContainer } from "../../styles/Home.styles";
import FadeIn from "../common/FadeIn";
import ButtonCTA from "../common/ButtonCTA";
import {
  AboutStyledDisplayHeading,
  StyledHightlightText,
  StyledColSections,
  StyledAboutH1,
  StyledAboutH2,
  StyledH1SpacingSection,
  StyledAboutSubheading,
  StyledAboutSideHeading,
  StyledAboutParagraphBreak,
  StyledAboutContent,
  Styled3ColSection,
  StyledOurWorkH1,
  StyledHightlightH2Text
} from "../../styles/About.styles";

function About() {
  return (
    <StyledHomeContainer>
      <div>
        <FadeIn>
          <StyledAboutSideHeading>Our Hive</StyledAboutSideHeading>
          <AboutStyledDisplayHeading>
            We Are
            <StyledHightlightText> Pears.</StyledHightlightText>
          </AboutStyledDisplayHeading>
        </FadeIn>

        <FadeIn delay={250}>
          <StyledAboutH2>
            Just as
            <StyledHightlightH2Text> bees </StyledHightlightH2Text>
            work together to create something meaningful, we bring a
            collaborative approach to every project, leveraging our expertise to
            help your business thrive in a digital world.
          </StyledAboutH2>
        </FadeIn>

        <FadeIn delay={200}>
          <StyledColSections>
            <StyledAboutSideHeading>Our Mission</StyledAboutSideHeading>
            <StyledAboutH1>
              To create digital solutions that foster growth, efficiency, and
              innovation. We believe in the power of partnerships, working
              closely with clients to transform ideas into impactful outcomes.
              <StyledAboutParagraphBreak>
                Inspired by the ecosystem of a hive,
                <StyledHightlightText>
                  {" "}
                  we aim to foster a community where business can flourish
                  through technology.
                </StyledHightlightText>
              </StyledAboutParagraphBreak>
            </StyledAboutH1>
          </StyledColSections>
        </FadeIn>

        <FadeIn delay={200}>
          <StyledColSections>
            <StyledAboutSideHeading>Services</StyledAboutSideHeading>
            <StyledAboutH1>
              At Pears, we offer a comprehensive suite of IT services designed
              to help
              <StyledHightlightText>
                {" "}
                businesses leverage technology{" "}
              </StyledHightlightText>
              for growth and efficiency. With a team of specialists in key areas
              of digital transformation, we ensure that each solution is crafted
              to meet the unique needs of our clients.
              <FadeIn >
                <StyledH1SpacingSection>
                  Here's how we can help:
                </StyledH1SpacingSection>
                <FadeIn delay={250}>
                  <StyledAboutSubheading>
                    IT Consultancy & Advisory
                  </StyledAboutSubheading>
                  <StyledAboutContent>
                    Guiding your digital transformation, system improvements,
                    and technology strategy to ensure sustained growth.
                  </StyledAboutContent>
                </FadeIn>

                <FadeIn delay={250}>
                  <StyledAboutSubheading>UX & UI Design</StyledAboutSubheading>
                  <StyledAboutContent>
                    Creating user-centered designs that enhance functionality
                    and reflect your brand's identity.
                  </StyledAboutContent>
                </FadeIn>

                <FadeIn delay={250}>
                  <StyledAboutSubheading>
                    Application Development
                  </StyledAboutSubheading>
                  <StyledAboutContent>
                    Building customized web and mobile applications tailored to
                    meet your business needs.
                  </StyledAboutContent>
                </FadeIn>

                <FadeIn delay={250}>
                  <StyledAboutSubheading>
                    Project Management
                  </StyledAboutSubheading>
                  <StyledAboutContent>
                    Ensuring projects are executed with efficiency,
                    adaptability, and transparency for timely, successful
                    delivery.
                  </StyledAboutContent>
                </FadeIn>
              </FadeIn>
            </StyledAboutH1>
          </StyledColSections>
        </FadeIn>

        <FadeIn delay={200}>
          <StyledColSections>
            <StyledAboutSideHeading>How We Work</StyledAboutSideHeading>
            <StyledAboutH1>
              At
              <StyledHightlightText> Pears </StyledHightlightText>
              we believe that the best results come from working in harmony with
              our clients. Our approach blends deep technical expertise with a
              collaborative mindset, ensuring that each project is a true
              <StyledHightlightText> partnership.</StyledHightlightText>
              <FadeIn>
              <FadeIn delay={200}>
              <StyledAboutSubheading>
                  01 Consultation & Discovery
                </StyledAboutSubheading>
                <StyledAboutContent>
                  Every project starts with an in-depth consultation to
                  understand your business needs, challenges, and goals. We take
                  the time to learn about your vision, ensuring our approach
                  aligns with your objectives from the outset.
                </StyledAboutContent>
              </FadeIn>
              <FadeIn delay={200}>
              <StyledAboutSubheading>
                  02 Agile Development & Design
                </StyledAboutSubheading>
                <StyledAboutContent>
                  We believe flexibility is essential in the digital world.
                  Using agile methodology, we approach projects in stages,
                  allowing for ongoing feedback, adaptations, and refinements.
                </StyledAboutContent>
              </FadeIn>
              <FadeIn delay={200}>
              <StyledAboutSubheading>
                  03 Quality Assurance & Testing
                </StyledAboutSubheading>
                <StyledAboutContent>
                  Every solution we create is rigorously tested to ensure it
                  performs optimally and meets high standards of quality and
                  security. Our QA team conducts thorough testing to identify
                  and resolve any issues, delivering a polished product that's
                  ready to launch.
                </StyledAboutContent>
              </FadeIn>
              <FadeIn delay={200}>
              <StyledAboutSubheading>
                  04 Launch & Continuous Support
                </StyledAboutSubheading>
                <StyledAboutContent>
                  After a successful launch, our partnership doesn't end. We
                  provide continuous support, including maintenance, updates,
                  and any future enhancements you may need. Our goal is to help
                  your business grow by providing dependable, long-term IT
                  solutions.
                </StyledAboutContent>
              </FadeIn>

              </FadeIn>
            </StyledAboutH1>
          </StyledColSections>
        </FadeIn>

        <FadeIn delay={200}>
          <Styled3ColSection>
            <StyledAboutSideHeading>Designing Success</StyledAboutSideHeading>
            <StyledOurWorkH1>
              Our projects are designed to build not only innovative solutions
              but also lasting partnerships with our clients. Our team
              approaches each project like crafting a digital ecosystem, where
              every element works together seamlessly to achieve growth and
              resilience. Explore our
              <StyledHightlightText>
                {" "}
                past work to see how we bring these ideas to life and pollinate
                digital success across industries.
              </StyledHightlightText>
            </StyledOurWorkH1>
            <ButtonCTA to="/about">Our Work</ButtonCTA>
          </Styled3ColSection>
        </FadeIn>

        <FadeIn delay={200}>

          
        </FadeIn>
      </div>
    </StyledHomeContainer>
  );
}

export default About;
