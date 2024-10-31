// Services.js
import React from "react";
import "./services.css"; // Ensure to keep unique styles for services
import ContentTemplate from "../../themeComponents/ContentTemplate/ContentTemplate"; 
import Section from "../../themeComponents/Section/Section";
import ServiceBox from "./ServiceBox/ServiceBox"; // Import the ServiceBox component
import { faLaptop, faLaptopCode, faChartLine, faPaintBrush, faRobot, faWandMagicSparkles, faGlobe } from "@fortawesome/free-solid-svg-icons";

const servicesData = [
  {
    icon: faLaptop,
    title: "Website Services",
    description: "We design, develop, manage, and host custom, responsive websites that engage users and enhance your brand’s online presence..",
    href: "#websites",
  },
  {
    icon: faChartLine,
    title: "Digital Marketing",
    description: "Boost your brand’s reach with our SEO, influencer, social media, and targeted digital ad campaigns.",
    href: "#digital-marketing",
  },
  {
    icon: faWandMagicSparkles,
    title: "Branding and Identity",
    description: "Build a strong, memorable brand identity that resonates with your audience through impactful visuals and strategic messaging.",
    href: "#branding",
  },  
  {
    icon: faPaintBrush,
    title: "Graphic Design",
    description: "Capture attention with unique logos and visual designs that communicate your brand’s identity.",
    href: "#graphic-design",
  },
  {
    icon: faRobot,
    title: "AI and Automation",
    description: "Boost efficiency with AI-powered automation solutions that streamline workflows and provide actionable insights.",
    href: "#ai",
  },  
  {
    icon: faGlobe,
    title: "Software Consulting",
    description: "Get expert guidance on selecting and implementing tech solutions to support your business goals.",
    href: "#software-consulting",
  },
];

const Services = () => {
  return (
    <Section
      className={"services-section justify-center full-height column"}
      shadowClass={"right-shadow bottom"}
    >
      <ContentTemplate
        className={"justify-between-section responsive responsive-center"}
        ifButton={true}
        heading="What We Offer"
        title="Our Services"
        buttonText="Get Started"
        buttonLink="#"
        buttonId="services-header-btn"
        paragraph1="Explore our wide range of services."
        isHero={false} // Since it's a section, not a hero
      />
      <div className="space"></div>

      <div className="services-boxes flex justify-between-section">
        {servicesData.map((service, index) => (
          <ServiceBox
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            href={service.href}
            size="lg"
          />
        ))}
      </div>
    </Section>
  );
};

export default Services;
