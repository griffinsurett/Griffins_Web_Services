// Container.js
import React from "react";
import PropTypes from "prop-types";
import ProjectItem from "../projectItem1"; // Import the ProjectItem component
import "./container1.css"; // Container-specific styles

const ProjectContainer = ({ projects }) => {
  return (
    <div className="project-container flex justify-center column">
      {projects.map((project, index) => {
        // Determine the class names and order
        const isEven = index % 2 === 0;

        return (
          <ProjectItem key={project.id} project={project} isEven={isEven} />
        );
      })}
    </div>
  );
};

ProjectContainer.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ProjectContainer;
