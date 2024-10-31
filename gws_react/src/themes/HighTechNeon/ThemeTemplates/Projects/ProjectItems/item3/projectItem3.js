import React from "react";
import PropTypes from "prop-types";
import "./project-item3.css"; // Assuming you have some CSS for styling
import Button from "../../../../themeComponents/Buttons/Button";

const ProjectItem = ({ project }) => {
  return (
    <div className="project-item flex column justify-center responsive-center">
      <a
        href={project.link}
        className="project-link"
      >
        <div className="project-img"  style={{
          backgroundImage: `url(${project.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>

        </div>
        <div className="project-content flex text-left">
          <div className="project-text flex column top-space left-space">
          <h5>{project.name}</h5>
          <p className="p-small">{project.description}</p>
          </div>
          <div className="services-in-project">
            
          </div>
        </div>
      </a>
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
};

export default ProjectItem;
