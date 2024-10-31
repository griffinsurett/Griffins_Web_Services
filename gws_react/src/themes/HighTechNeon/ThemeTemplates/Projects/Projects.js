// Projects.js
import React from "react";
import Section from "../../themeComponents/Section/Section";
import ContentTemplate from "../../themeComponents/ContentTemplate/ContentTemplate";
import ProjectContainer2 from "./ProjectItems/item2/Container/Container2"; // Import the new ProjectContainer
import "./projects.css"; // Ensure to keep unique styles for projects

const Projects = () => {
  const projects = [
    {
      name: "i-75 CPA Review",
      description: "Developed multiple e-commerce sites with landing pages, branding, and digital marketing solutions.",
      link: "https://i75cpareview.com/", // Placeholder image link
      image: "https://picsum.photos/200/300", // Image URL
    },
    {
      name: "Faria's Demolition",
      description: "Created a comprehensive website showcasing demolition services, including project galleries and contact forms.",
      link: "https://fariasdemolition.com/", // Placeholder image link
      image: "https://picsum.photos/200/300", // Image URL
    },
    {
      name: "Pronto Junk Removal",
      description: "Built a service-oriented site with booking functionality and optimized for lead generation in junk removal.",
      link: "https://prontojunkremovalnj.com/", // Placeholder image link
      image: "https://picsum.photos/200/300", // Image URL
    },
    {
      name: "Koi Solar",
      description: "Designed a clean, informative site to promote solar solutions, emphasizing brand trust and environmental impact.",
      link: "https://koisolarofficial.com/", // Placeholder image link
      image: "https://picsum.photos/200/300", // Image URL
    },
    {
      name: "Certified Bag Chasers",
      description: "Created a personal brand website for a best-selling author and course creator, featuring courses, testimonials, and community-building resources.",
      link: "https://certifiedbagchasers.com/", // Placeholder image link
      image: "https://picsum.photos/200/300", // Image URL
    },
    {
      name: "Koi Crest Marketing",
      description: "Built a digital marketing agency website with case studies and service offerings, highlighting client success stories.",
      link: "https://koicrest.com/", // Placeholder image link
      image: "https://picsum.photos/200/300", // Image URL
    },
  ];

  return (
    <Section
      className={"justify-center full-height column"}
      shadowClass={"left-shadow bottom"}
    >
      <ContentTemplate
        className="column bottom-space text-center"
        textSectionClass={"smaller-top-space"}
        ifButton={true}
        buttonBottom={true}
        heading="Our Work"
        title="Our Projects"
        buttonText="More Projects"
        buttonLink="#"
        buttonId="projects-header-btn"
        buttonSecClass="space"
      >
        <ProjectContainer2 projects={projects} />
      </ContentTemplate>
    </Section>
  );
};

export default Projects;
