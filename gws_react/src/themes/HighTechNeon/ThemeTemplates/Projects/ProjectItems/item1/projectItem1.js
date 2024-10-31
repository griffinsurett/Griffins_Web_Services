// Project-item.js
import React from "react";
import PropTypes from "prop-types";
import Button from "../../../../themeComponents/Buttons/Button"; // Adjust the path as necessary
import "./project-item1.css"; // Assuming you have some CSS for styling

const ProjectItem = ({ project, isEven }) => {
  return (
    <div
      className={`project-item flex items-align-center responsive responsive-center ${
        isEven ? "reverse" : ""
      }`}
    >
      <a
        href={project.link}
        className={`project-link half-column self-center ${
          isEven ? "order-2" : ""
        }`}
      >
        <img
          src={project.image}
          alt={project.name}
          className="project-image grow"
        />
      </a>
      <div
        className={`project-content flex column justify-center ${
          isEven ? "text-left" : "text-right"
        } responsive-center`}
      >
        <h3>{project.name}</h3>
        <p className="p-small">{project.description}</p>
        <div className="project-button-container top-space">
          <Button buttonLink={project.link} text="View Project" />
        </div>
      </div>
    </div>
  );
};

ProjectItem.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  isEven: PropTypes.bool.isRequired,
};

export default ProjectItem;
