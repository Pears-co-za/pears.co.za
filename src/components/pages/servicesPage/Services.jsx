import React, { useState, useEffect } from "react";
import {
    ServicesContainer,
    ContentContainer,
    TabsContainer,
    TabButton,
    TabLabel,
    TabIcon,
    ServiceContentArea,
    ServiceTitle,
    ServiceDescription,
    SectionContainer,
    SectionTitle,
    SectionDescription,
    ItemsGrid,
    ServiceItem,
    ItemTitle,
    ItemDescription,
} from "../../../styles/Services.styles";

import CustomSelect from "./CustomSelect";

// Service tab content from the text file
const serviceContent = {
    applicationDevelopment: {
        title: "Application Development",
        description:
            "We provide cutting-edge application development services tailored to meet your business needs. Our expertise covers web development, custom software solutions, mobile applications, and quality assurance testing. Whether you're building a new product or improving an existing system, we ensure scalability, security, and seamless performance.",
        sections: [
            {
                title: "Custom Software Development",
                description:
                    "Every business has unique needs, and off-the-shelf software may not always be the right fit. We develop custom software solutions that align perfectly with your business processes, ensuring efficiency and scalability.",
                items: [
                    {
                        title: "Enterprise Software Solutions",
                        description:
                            "Tailored applications for automation, workflow optimization, and business intelligence.",
                    },
                    {
                        title: "CRM & ERP Development",
                        description:
                            "Customized solutions to manage customer relationships and business operations.",
                    },
                    {
                        title: "Business Process Automation",
                        description:
                            "AI-driven and rule-based automation for efficiency.",
                    },
                    {
                        title: "Database & Backend Development",
                        description:
                            "Secure and optimized database architecture for seamless performance.",
                    },
                    {
                        title: "Legacy System Modernization",
                        description:
                            "Upgrading outdated systems with modern technology.",
                    },
                ],
            },
            {
                title: "Mobile Application Development",
                description:
                    "We design and develop high-performance mobile applications for iOS and Android, ensuring an intuitive user experience and robust functionality. Our mobile solutions help businesses reach a wider audience and enhance customer engagement.",
                items: [
                    {
                        title: "Cross-Platform Development",
                        description:
                            "Cost-effective apps using Flutter, React Native, and Xamarin.",
                    },
                    {
                        title: "Enterprise Mobile Apps",
                        description:
                            "Secure business applications for workforce collaboration and productivity.",
                    },
                    {
                        title: "Native App Development",
                        description:
                            "Platform-specific applications for iOS (Swift) and Android (Kotlin).",
                    },
                ],
            },
            {
                title: "Quality Assurance & Testing",
                description:
                    "Ensuring flawless performance and security is critical for any application. Our QA and testing services guarantee that your applications meet industry standards and provide a bug-free user experience.",
                items: [
                    {
                        title: "Manual & Automated Testing",
                        description:
                            "Comprehensive testing to identify and fix potential issues.",
                    },
                    {
                        title: "Performance & Load Testing",
                        description:
                            "Ensures your app performs optimally under high traffic and usage.",
                    },
                    {
                        title: "Security Testing",
                        description:
                            "Identifies vulnerabilities to prevent cyber threats and breaches.",
                    },
                    {
                        title: "Regression Testing",
                        description:
                            "Ensures that new updates do not affect existing features.",
                    },
                ],
            },
            {
                title: "Web Development",
                description:
                    "A strong online presence starts with a well-built website or web application. We specialize in developing fast, responsive, and scalable web solutions tailored to your business needs.",
                items: [
                    {
                        title: "Custom Web Applications",
                        description:
                            "We develop interactive web apps that enhance user engagement and functionality.",
                    },
                    {
                        title: "E-Commerce Solutions",
                        description:
                            "Scalable and secure e-commerce platforms with payment gateway integration.",
                    },
                    {
                        title: "API & Third-Party Integrations",
                        description:
                            "Secure integration with existing software, CRMs, and ERPs.",
                    },
                ],
            },
        ],
    },
    itAdvisoryCounsulting: {
      // ID to link footer links
        // id: "it-advisory",
        title: "IT Advisory & Consulting",
        description:
            "In todays fast-evolving digital landscape, businesses must adopt the right technologies and strategies to stay competitive. Our IT Advisory & Consulting services provide expert guidance to help organizations drive transformation, manage change, optimize IT infrastructure, and create effective technology roadmaps.",
        sections: [
            {
                title: "Change Management",
                description:
                    "Implementing new technology or business processes can be challenging, and resistance to change is a common issue. Our Change Management services ensure a smooth transition by addressing people, processes, and technology to minimize disruptions and maximize adoption.",
                items: [
                    {
                        title: "Stakeholder Engagement & Communication",
                        description:
                            "Ensuring leadership and employees understand the need for change.",
                    },
                    {
                        title: "Training & Knowledge Transfer",
                        description:
                            "Equipping teams with the necessary skills to adapt to new systems.",
                    },
                    {
                        title: "Process Optimization",
                        description:
                            "Aligning business workflows with new technologies to improve efficiency.",
                    },
                    {
                        title: "Resistance & Risk Management",
                        description:
                            "Identifying potential obstacles and creating strategies to overcome them.",
                    },
                ],
            },
            {
                title: "Digital Transformation",
                description:
                    "Adopting digital technologies is no longer an option—its a necessity. We help businesses modernize their operations, enhance customer experiences, and unlock new opportunities through digital transformation.",
                items: [
                    {
                        title: "Business Process Automation",
                        description:
                            "Streamlining operations with AI, RPA, and cloud-based solutions.",
                    },
                    {
                        title: "Cloud Migration & Optimization",
                        description:
                            "Transitioning to scalable, secure, and cost-effective cloud environments.",
                    },
                    {
                        title: "Data Analytics & Business Intelligence",
                        description:
                            "Leveraging data for smarter decision-making.",
                    },
                    {
                        title: "Customer Experience Enhancement",
                        description:
                            "Implementing digital tools to improve engagement and satisfaction.",
                    },
                    {
                        title: "Enterprise System Modernization",
                        description:
                            "Upgrading outdated systems for better performance and security.",
                    },
                ],
            },
            {
                title: "IT Infrastructure",
                description:
                    "A robust IT infrastructure is the foundation of a successful business. We help organizations design, implement, and optimize their IT environments to ensure security, scalability, and efficiency.",
                items: [
                    {
                        title: "Network Design & Optimization",
                        description:
                            "Ensuring fast, secure, and reliable connectivity.",
                    },
                    {
                        title: "Cybersecurity & Risk Management",
                        description:
                            "Implementing measures to protect data and prevent cyber threats.",
                    },
                    {
                        title: "Disaster Recovery & Business Continuity",
                        description:
                            "Preparing for unexpected failures to minimize downtime.",
                    },
                    {
                        title: "IT Asset Management",
                        description:
                            "Streamlining hardware and software resources for optimal performance.",
                    },
                    {
                        title: "Cloud & On-Premise Solutions",
                        description:
                            "Balancing flexibility and control with hybrid IT environments.",
                    },
                ],
            },
            {
                title: "Technology Strategy & Planning",
                description:
                    "A well-defined IT strategy aligns technology investments with business goals. We provide expert guidance to help organizations create a clear roadmap for leveraging technology effectively.",
                items: [
                    {
                        title: "IT Roadmap Development",
                        description:
                            "Defining long-term technology goals and implementation plans.",
                    },
                    {
                        title: "Budgeting & Cost Optimization",
                        description:
                            "Maximizing IT investments while reducing unnecessary expenses.",
                    },
                    {
                        title: "Regulatory Compliance & Governance",
                        description:
                            "Ensuring adherence to industry standards and best practices.",
                    },
                    {
                        title: "Vendor Selection & IT Procurement",
                        description:
                            "Helping businesses choose the right technology partners.",
                    },
                ],
            },
        ],
    },
    projectManagement: {
        title: "Project Management",
        description:
            "Successful project execution requires a structured approach, clear goals, and effective resource utilization. Our project management services ensure that your projects are delivered on time, within budget, and aligned with business objectives. We follow industry best practices, including Agile and Scrum methodologies, to drive efficiency and collaboration.",
        sections: [
            {
                title: "Agile & Scrum Management",
                description:
                    "Agile methodologies enable teams to adapt to changing requirements while maintaining productivity and collaboration. We implement Agile and Scrum frameworks to ensure faster delivery, iterative improvements, and increased transparency throughout the project lifecycle.",
                items: [
                    {
                        title: "Agile Framework Implementation",
                        description:
                            "Guiding teams through Agile best practices, including Kanban and Scrum.",
                    },
                    {
                        title: "Scrum Team Facilitation",
                        description:
                            "Managing daily stand-ups, sprint planning, and retrospectives to enhance team efficiency.",
                    },
                    {
                        title: "Sprint & Backlog Management",
                        description:
                            "Prioritizing and organizing tasks for seamless execution.",
                    },
                    {
                        title: "Agile Coaching & Training",
                        description:
                            "Helping teams adopt Agile principles for long-term success.",
                    },
                ],
            },
            {
                title: "PMO Setup (Project Management Office)",
                description:
                    "A Project Management Office (PMO) ensures that project execution aligns with business goals. We help organizations establish or optimize a PMO to create standardized project management practices, improve governance, and enhance overall efficiency.",
                items: [
                    {
                        title: "PMO Strategy Development",
                        description:
                            "Defining the vision, objectives, and operating model for the PMO.",
                    },
                    {
                        title: "Process & Framework Standardization",
                        description:
                            "Implementing best practices for project execution.",
                    },
                    {
                        title: "Project Portfolio Management",
                        description:
                            "Prioritizing and aligning projects with business objectives.",
                    },
                    {
                        title: "Governance & Risk Management",
                        description:
                            "Establishing policies to mitigate project risks.",
                    },
                    {
                        title: "Performance Monitoring & Reporting",
                        description:
                            "Tracking KPIs, progress, and resource utilization.",
                    },
                ],
            },
            {
                title: "Project Planning & Strategy",
                description:
                    "A well-structured project plan sets the foundation for success. We assist businesses in defining clear objectives, identifying risks, and developing comprehensive strategies to ensure smooth project execution.",
                items: [
                    {
                        title: "Scope Definition & Goal Setting",
                        description:
                            "Establishing clear project deliverables and expectations.",
                    },
                    {
                        title: "Work Breakdown Structure (WBS)",
                        description:
                            "Breaking projects into manageable phases and tasks.",
                    },
                    {
                        title: "Risk Assessment & Mitigation Planning",
                        description:
                            "Identifying potential roadblocks and developing contingency plans.",
                    },
                    {
                        title: "Budgeting & Cost Estimation",
                        description:
                            "Allocating financial resources efficiently.",
                    },
                    {
                        title: "Milestone & Timeline Development",
                        description:
                            "Setting achievable deadlines and tracking progress.",
                    },
                ],
            },
            {
                title: "Resource Allocation",
                description:
                    "Optimizing resources is crucial for maintaining productivity and controlling costs. We help businesses allocate human, financial, and technological resources effectively to maximize efficiency and project success.",
                items: [
                    {
                        title: "Workforce Planning & Assignment",
                        description:
                            "Ensuring the right talent is assigned to the right tasks.",
                    },
                    {
                        title: "Capacity Management",
                        description:
                            "Balancing workloads to avoid overburdening teams.",
                    },
                    {
                        title: "Budget Allocation & Cost Control",
                        description:
                            "Optimizing financial resources for cost-effective execution.",
                    },
                    {
                        title: "Technology & Tool Selection",
                        description:
                            "Identifying and implementing the best tools for project success.",
                    },
                    {
                        title: "Performance Tracking & Optimization",
                        description:
                            "Monitoring resource utilization for continuous improvement.",
                    },
                ],
            },
        ],
    },
    uiUxDesign: {
        title: "UI/UX Design",
        description:
            "A well-crafted user experience (UX) and intuitive user interface (UI) are crucial for engaging customers and driving business success. Our UI/UX design services focus on creating user-centered designs that are visually appealing, highly functional, and optimized for seamless interaction.",
        sections: [
            {
                title: "User Experience (UX) Testing",
                description:
                    "UX testing ensures that your application or website provides a seamless and satisfying experience for users. We conduct thorough usability testing to identify pain points, improve navigation, and optimize interactions.",
                items: [
                    {
                        title: "A/B Testing",
                        description:
                            "Comparing different design versions to determine what works best.",
                    },
                    {
                        title: "Heuristic Evaluation",
                        description:
                            "Assessing UI/UX against established usability principles.",
                    },
                    {
                        title: "Task Analysis & Journey Mapping",
                        description:
                            "Understanding how users interact with your product.",
                    },
                    {
                        title: "Usability Testing",
                        description:
                            "Gathering real user feedback through in-depth testing.",
                    },
                    {
                        title: "Performance & Accessibility Testing",
                        description:
                            "Ensuring fast load times and compliance with accessibility standards (WCAG).",
                    },
                ],
            },
            {
                title: "User Interface (UI) & Prototyping",
                description:
                    "A well-designed user interface is critical for creating an intuitive and visually appealing digital experience. We design interfaces that align with your brand identity while ensuring ease of use and responsiveness across devices.",
                items: [
                    {
                        title: "Visual Design & Branding",
                        description:
                            "Crafting stunning designs with brand consistency.",
                    },
                    {
                        title: "Responsive UI Design",
                        description:
                            "Optimizing interfaces for mobile, desktop, and tablet experiences.",
                    },
                    {
                        title: "Interactive Prototypes",
                        description:
                            "Creating clickable models to simulate the final product.",
                    },
                    {
                        title: "Dark Mode & Custom Themes",
                        description:
                            "Providing users with customizable UI options.",
                    },
                ],
            },
            {
                title: "User Research & Analysis",
                description:
                    "Understanding user behavior, needs, and motivations is the foundation of effective UI/UX design. Our research-driven approach ensures that design decisions are based on real user insights rather than assumptions.",
                items: [
                    {
                        title: "Competitor Analysis",
                        description:
                            "Studying industry trends and best practices.",
                    },
                    {
                        title: "Persona Development",
                        description:
                            "Creating detailed user profiles to represent target audiences.",
                    },
                    {
                        title: "Heatmaps & Behavioral Analytics",
                        description:
                            "Tracking user interactions to identify pain points.",
                    },
                    {
                        title: "User Journey Mapping",
                        description:
                            "Visualizing how users interact with your product.",
                    },
                ],
            },
            {
                title: "Wireframing & Prototyping",
                description:
                    "Wireframes and prototypes serve as blueprints for your final product. We create structured layouts and interactive prototypes to visualize the user journey before development begins.",
                items: [
                    {
                        title: "Low-Fidelity Wireframes",
                        description:
                            "Basic sketches to map out structure and layout.",
                    },
                    {
                        title: "High-Fidelity Prototypes",
                        description:
                            "Interactive models that simulate real user interactions.",
                    },
                    {
                        title: "Design Iterations & Refinements",
                        description: "Improving the design based on feedback.",
                    },
                    {
                        title: "Collaboration with Developers",
                        description:
                            "Ensuring seamless handoff for development.",
                    },
                ],
            },
        ],
    },
};

// Main Services component
const Services = () => {
    const [activeTab, setActiveTab] = useState("applicationDevelopment");
    const [isMobile, setIsMobile] = useState(false);

    // Check if mobile on mount and on resize
    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkIfMobile();
        window.addEventListener("resize", checkIfMobile);

        return () => {
            window.removeEventListener("resize", checkIfMobile);
        };
    }, []);

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const handleMobileSelectChange = (e) => {
        setActiveTab(e.target.value);
    };

    // Render tabs for desktop or dropdown for mobile
    const renderTabNavigation = () => {
        if (isMobile) {
            const dropdownOptions = [
                {
                    value: "applicationDevelopment",
                    label: "Application Development",
                },
                {
                    value: "itAdvisoryCounsulting",
                    label: "IT Advisory & Consulting",
                },
                { value: "projectManagement", label: "Project Management" },
                { value: "uiUxDesign", label: "UI/UX Design" },
            ];

            return (
                <CustomSelect
                    value={activeTab}
                    options={dropdownOptions}
                    onChange={handleMobileSelectChange}
                />
            );
        }

        return (
            <TabsContainer>
                <TabButton
                    active={activeTab === "applicationDevelopment"}
                    onClick={() => handleTabChange("applicationDevelopment")}
                >
                    <TabIcon>
                        <img
                            src="/assets/dev-icon.svg"
                            alt="Application Development"
                        />
                    </TabIcon>
                    <TabLabel>Application Development</TabLabel>
                </TabButton>

                <TabButton
                    active={activeTab === "itAdvisoryCounsulting"}
                    onClick={() => handleTabChange("itAdvisoryCounsulting")}
                >
                    <TabIcon>
                        <img
                            src="/assets/advisory-icon.svg"
                            alt="IT Advisory & Consulting"
                        />
                    </TabIcon>
                    <TabLabel>IT Advisory & Consulting</TabLabel>
                </TabButton>

                <TabButton
                    active={activeTab === "projectManagement"}
                    onClick={() => handleTabChange("projectManagement")}
                >
                    <TabIcon>
                        <img
                            src="/assets/pm-icon.svg"
                            alt="Project Management"
                        />
                    </TabIcon>
                    <TabLabel>Project Management</TabLabel>
                </TabButton>

                <TabButton
                    active={activeTab === "uiUxDesign"}
                    onClick={() => handleTabChange("uiUxDesign")}
                >
                    <TabIcon>
                        <img src="/assets/uiux-icon.svg" alt="UI/UX Design" />
                    </TabIcon>
                    <TabLabel>UI/UX Design</TabLabel>
                </TabButton>
            </TabsContainer>
        );
    };

    const activeService = serviceContent[activeTab];

    // Function to render service content based on active tab
    const renderServiceContent = () => {
        if (!activeService) return null;

        return (
            <ServiceContentArea>
                <ServiceTitle>{activeService.title}</ServiceTitle>
                <ServiceDescription>
                    {activeService.description}
                </ServiceDescription>

                {activeService.sections &&
                    activeService.sections.map((section, index) => (
                        <SectionContainer key={index}>
                            <SectionTitle>{section.title}</SectionTitle>
                            <SectionDescription>
                                {section.description}
                            </SectionDescription>

                            {section.items && (
                                <ItemsGrid>
                                    {section.items.map((item, itemIndex) => (
                                        <ServiceItem key={itemIndex}>
                                            <ItemTitle>{item.title}</ItemTitle>
                                            <ItemDescription>
                                                {item.description}
                                            </ItemDescription>
                                        </ServiceItem>
                                    ))}
                                </ItemsGrid>
                            )}
                        </SectionContainer>
                    ))}
            </ServiceContentArea>
        );
    };

    return (
        <ServicesContainer>
            <ContentContainer>
                {renderTabNavigation()}
                {renderServiceContent()}
            </ContentContainer>
        </ServicesContainer>
    );
};

export default Services;
