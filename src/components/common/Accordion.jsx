import React, { useState } from "react";
import {
    StyledAccordionContainer,
    StyledAccordionItem,
    StyledAccordionHeader,
    StyledAccordionTitle,
    StyledAccordionContent,
    StyledAccordionList,
    StyledAccordionListItem,
} from "../../styles/Accordion.styles";

const accordionData = [
    {
        title: "IT Consulting & Advisory",
        content: [
            "IT Infrastructure Assessment",
            "Digital Transformation Consulting",
            "Technology Strategy & Planning",
            "Change Management",
        ],
    },
    {
        title: "UX/UI Designs",
        content: [
            "User Research and Analysis",
            "Wireframing and Prototyping",
            "User Interface Design",
            "User Experience Testing",
        ],
    },
    {
        title: "Application Development",
        content: [
            "Web Development",
            "Mobile App Development",
            "Custom Software Development",
            "Quality Assurance & Testing",
        ],
    },
    {
        title: "Project Management",
        content: [
            "Project Planning & Strategy",
            "Agile & Scrum Management",
            "Resource Allocation",
            "PMO Setup",
        ],
    },
];

function AccordionItem({ title, content, isOpen, onClick }) {
    return (
        <StyledAccordionItem>
            <StyledAccordionHeader onClick={onClick} isOpen={isOpen}>
                <StyledAccordionTitle>{title}</StyledAccordionTitle>
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
            </StyledAccordionHeader>
            <StyledAccordionContent isOpen={isOpen}>
                {content.length > 0 && (
                    <StyledAccordionList>
                        {content.map((item, index) => (
                            <StyledAccordionListItem key={index}>
                                {item}
                            </StyledAccordionListItem>
                        ))}
                    </StyledAccordionList>
                )}
            </StyledAccordionContent>
        </StyledAccordionItem>
    );
}

function Accordion() {
    const [openIndex, setOpenIndex] = useState(null);

    const handleClick = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <StyledAccordionContainer>
            {accordionData.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    content={item.content}
                    isOpen={openIndex === index}
                    onClick={() => handleClick(index)}
                />
            ))}
        </StyledAccordionContainer>
    );
}

export default Accordion;
