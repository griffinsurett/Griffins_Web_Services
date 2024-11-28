// About.js
import React from "react";

const About = ({ data, showSectionLink }) => {
  if (!data) return <p>No About section data available.</p>;

  return (
    <section className="about-section">
      <h2>{data.heading}</h2>
      {data.paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </section>
  );
};

export default About;
