// Theme/Components/Sections/Projects.js
import React from "react";
import { Link } from "react-router-dom";

const Projects = ({ data }) => {
  if (!data) return <p>No Projects section data available.</p>;

  return (
    <section className="projects-section">
      <h2>{data.heading}</h2>
      <p>{data.paragraph}</p>
      <div className="projects-list">
  {data.items.map((project) => (
    <div key={project.slug} className="project-item"> {/* Use slug as the unique key */}
      <img src={project.image} alt={project.name} />
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      {project.slug ? (
        <Link to={project.slug} className="project-link">
          Learn More
        </Link>
      ) : (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          Visit Site
        </a>
      )}
    </div>
  ))}
</div>
      {data.slug && (
        <div className="section-link">
          <Link to={data.slug}>View All Projects</Link>
        </div>
      )}
    </section>
  );
};

export default Projects;
