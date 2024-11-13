// projectItem2.js
import React from "react";
import PropTypes from "prop-types";
import "./project-item2.css"; // Assuming you have some CSS for styling
import Button from "../../../../themeComponents/Buttons/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import IntersectionObserverComponent from "../../../../ScrollAnimations";

const ProjectItem = ({ project, index }) => {
  // Determine animation class based on whether index is odd or even
  const animationClass = index % 2 === 0 ? "left" : "right";

  return (
    <div className="project-item flex column justify-center responsive-center">
      <IntersectionObserverComponent inViewClass={`fade-in-${animationClass}`} outViewClass={`fade-out-${animationClass}`}>
        <a
          href={project.link}
          className="project-link"
          style={{
            backgroundImage: `url(${project.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "350px",
          }}
        >
          <div className="project-content flex column text-left">
            <h5>{project.name}</h5>
            <p className="project-item-onhover p-small smaller-top-space">{project.description}</p>
          </div>
          <div className="project-item-icon project-item-onhover">
            <FontAwesomeIcon className="arrow" size="xl" icon={faArrowRight} />
          </div>
        </a>
      </IntersectionObserverComponent>
    </div>
  );
};

ProjectItem.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectItem;
