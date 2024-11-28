// Theme/Components/Sections/Services.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Services = ({  data  }) => {
  if (!data) return <p>No Services section data available.</p>;

  return (
    <section className="services-section">
      <h2>{data.heading}</h2>
      <p>{data.paragraph}</p>
      <div className="services-list">
        {data.items.map((item, i) => (
          <div key={i} className="service-item">
            <FontAwesomeIcon icon={item.icon} className="service-icon" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            {item.slug && (
              <Link to={item.slug} className="service-button">
                Learn More
              </Link>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
