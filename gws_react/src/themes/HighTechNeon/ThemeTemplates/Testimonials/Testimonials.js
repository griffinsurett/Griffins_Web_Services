import React from "react";
import Section from "../../themeComponents/Section/Section";
import ContentTemplate from "../../themeComponents/ContentTemplate/ContentTemplate"; // Updated to ContentTemplate
import TestimonialCarousel from "./TestimonialBox1/TestimonialContainer"; // Import the TestimonialCarousel component
import "./testimonials.css"; // Ensure to keep unique styles for testimonials

// Define testimonials content directly in this file
const testimonials = [
  {
    name: "Kenn Faria",
    quote: "Working with this team brought our vision to life! The website captures our services perfectly and has brought in a steady stream of clients.",
    position: "Owner, Faria's Demolition",
  },
  {
    name: "Anthony Gonzales",
    quote: "Highly recommend! Griffin was professional and efficient with a great website that has helped us grow our business exponentially.",
    position: "Owner, Pronto Junk Removal",
  },
  {
    name: "Darius Clark",
    quote: "From branding to the e-commerce platform, everything was done with precision and creativity. Griffin has been able to 5x business and I’m beyond satisfied with the results.",
    position: "CEO of i-75 CPA Review",
  },
  {
    name: "Arold Norelus",
    quote: "Griffin truly captured my brand’s essence. The website has been a game-changer for my courses and community engagement.",
    position: "Best-Selling Author",
  },
  {
    name: "Tarun Kumar",
    quote: "Professional, skilled, and efficient! Our new site is not only beautiful but effectively showcases our client success stories.",
    position: "Owner, Koi Crest Marketing",
  },
  {
    name: "Richard Faria",
    quote: "An excellent experience from start to finish. The site has helped position us as a leader in our industry.",
    position: "Owner, Koi Crest Marketing",
  },
];

const Testimonials = () => {
  return (
    <Section
      className={"testimonials flex justify-center full-height column"}
      shadowClass={"right-shadow bottom"}
    >
      <ContentTemplate
        className={"testimonials-content flex item-align-center justify-between bottom-space responsive responsive-center"}
        ifButton={true}
        heading="Hear From Our Clients"
        title="Our Testimonials"
        buttonText="Get Started"
        buttonLink="#"
        buttonId="testimonials-header-btn"
      />
      {/* Pass the testimonials content as a prop to the TestimonialCarousel */}
      <TestimonialCarousel testimonials={testimonials} />
    </Section>
  );
};

export default Testimonials;
