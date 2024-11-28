// Theme/Components/Sections/About.js
import React from "react";
import { Link } from "react-router-dom";

const About = ({ data }) => {
  if (!data) return <p>No About section data available.</p>;

  return (
    <section className="about-section">
      <h2>{data.heading}</h2>
      {data.paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
      {data.slug && (
        <div className="section-link">
          <Link to={data.slug}>Learn More About Us</Link>
        </div>
      )}
    </section>
  );
};

export default About;
