import React, { useState } from "react";
import styled from "styled-components";

// ServicesTab component
const servicesData = [
    {
        title: "Application Development",
        items: [
            "Web Development",
            "Mobile Application Development", 
            "Custom Software Development",
            "Quality Assurance & Testing"
        ],
    },
    {
        title: "IT Advisory & Consulting",
        items: [
            "Change Management",
            "Digital Transformation Consulting",
            "IT Infrastructure Assessment",
            "Technology Strategy & Planning"
        ],
    },
    {
        title: "Project Management",
        items: [
            "Project Planning & Strategy",
            "Agile & Scrum Management",
            "Resource Allocation",
            "PMO Setup"
        ],
    },
    {
        title: "UX/UI Design",
        items: [
            "User Research & Analysis",
            "Wireframing & Prototyping",
            "User Interface and Prototyping",
            "User Experience Testing"
        ],
    },
];

// Styled Components
const Container = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 0 0 4rem;
`;

const TabsContainer = styled.div`
    display: flex;
    justify-content: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    border-top: 1px solid rgba(255, 255, 255, 0.3);
    padding: 1rem 0;
    margin-bottom: 2rem;
`;

const TabItem = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    padding: 0 1.5rem;
    font-size: ${props => props.active ? "1.5rem" : "1.4rem"};
    font-weight: ${props => props.active ? "500" : "400"};
    color: ${props => props.active ? "#3C4F31" : "#FFFFFF"};
    transition: all 0.3s ease;
    position: relative;

    &:not(:last-child)::after {
        content: "|";
        position: absolute;
        right: 0;
        color: white;
        opacity: 0.5;
    }
`;

const ServicesLayout = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 1rem;
    position: relative;
    height: 480px;
`;

const ServiceItem = styled.div`
    color: ${props => props.active ? "#3C4F31" : "rgba(255, 255, 255, 0.85)"};
    font-size: ${props => props.active ? "1.25rem" : "1.15rem"};
    font-weight: ${props => props.active ? "500" : "400"};
    white-space: nowrap;
    padding: 0.5rem;
    transition: all 0.3s ease;
`;

function ServicesTab() {
    const [activeTabIndex, setActiveTabIndex] = useState(1); // IT Advisory & Consulting active by default

    const handleTabClick = (index) => {
        setActiveTabIndex(index);
    };

    // Custom positioning for items to match the design with exact positioning
    const layoutItems = [
        // Row 1
        { 
            text: "Agile & Scrum Management", 
            category: 2, 
            style: { position: "absolute", left: "12%", top: "0" }
        },
        { 
            text: "Change Management", 
            category: 1, 
            style: { position: "absolute", left: "50%", top: "0", transform: "translateX(-50%)", fontSize: "1.3rem" }
        },
        { 
            text: "Custom Software Development", 
            category: 0, 
            style: { position: "absolute", right: "12%", top: "0" }
        },
        
        // Row 2
        { 
            text: "Digital Transformation Consulting", 
            category: 1, 
            style: { position: "absolute", left: "14%", top: "80px" }
        },
        { 
            text: "IT Infrastructure Assessment", 
            category: 1, 
            style: { position: "absolute", right: "14%", top: "80px" }
        },
        
        // Row 3
        { 
            text: "Mobile Application Development", 
            category: 0, 
            style: { position: "absolute", left: "5%", top: "160px", textAlign: "center", width: "180px" }
        },
        { 
            text: "PMO Setup", 
            category: 2, 
            style: { position: "absolute", left: "40%", top: "160px" }
        },
        { 
            text: "Project Planning & Strategy", 
            category: 2, 
            style: { position: "absolute", right: "25%", top: "160px" }
        },
        
        // Row 4
        { 
            text: "Quality Assurance & Testing", 
            category: 0, 
            style: { position: "absolute", left: "10%", top: "240px" }
        },
        { 
            text: "Resource Allocation", 
            category: 2, 
            style: { position: "absolute", left: "37%", top: "240px" }
        },
        { 
            text: "Technology Strategy & Planning", 
            category: 1, 
            style: { position: "absolute", right: "15%", top: "240px", fontSize: "1.3rem" }
        },
        
        // Row 5
        { 
            text: "User Experience Testing", 
            category: 3, 
            style: { position: "absolute", left: "8%", top: "320px" }
        },
        { 
            text: "User Interface and Prototyping", 
            category: 3, 
            style: { position: "absolute", right: "8%", top: "320px" }
        },
        
        // Row 6
        { 
            text: "User Research & Analysis", 
            category: 3, 
            style: { position: "absolute", left: "15%", top: "400px" }
        },
        { 
            text: "Web Development", 
            category: 0, 
            style: { position: "absolute", left: "48%", top: "400px", transform: "translateX(-50%)" }
        },
        { 
            text: "Wireframing & Prototyping", 
            category: 3, 
            style: { position: "absolute", right: "15%", top: "400px" }
        },
    ];

    return (
        <Container>
            <TabsContainer>
                {servicesData.map((item, index) => (
                    <TabItem 
                        key={index}
                        active={activeTabIndex === index}
                        onClick={() => handleTabClick(index)}
                    >
                        {item.title}
                    </TabItem>
                ))}
            </TabsContainer>
            
            <ServicesLayout>
                {layoutItems.map((item, index) => (
                    <ServiceItem 
                        key={index}
                        active={item.category === activeTabIndex}
                        style={{
                            ...item.style,
                            color: item.category === activeTabIndex ? "#3C4F31" : "rgba(255, 255, 255, 0.85)",
                            fontWeight: item.category === activeTabIndex ? "500" : "400",
                            fontSize: item.category === activeTabIndex ? 
                                (item.style.fontSize || "1.25rem") : 
                                (item.style.fontSize ? "1.2rem" : "1.15rem")
                        }}
                    >
                        {item.text}
                    </ServiceItem>
                ))}
            </ServicesLayout>
        </Container>
    );
}

export default ServicesTab;