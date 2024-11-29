// CMSDisplayTheme.js
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; // To detect route changes
import CMS from "../../CMS";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HomeHero from "./Components/Section/Hero";
import GenericHero from "./Components/Section/Hero2";
import About from "./Components/Section/About/About";
import Services from "./Components/Section/Services";
import Contact from "./Components/Section/Contact";
import Testimonials from "./Components/Section/Testimonials";
import Projects from "./Components/Section/Projects";
import FAQ from "./Components/Section/FAQ";

const sectionComponents = {
  hero: HomeHero,
  about: About,
  services: Services,
  contact: Contact,
  testimonials: Testimonials,
  projects: Projects,
  faq: FAQ,
};

const CMSDisplayTheme = ({ pageId }) => {
  const [pageStructure, setPageStructure] = useState(null);
  const location = useLocation(); // Detect location changes

  useEffect(() => {
    const structure = CMS.getPageStructure(pageId);
    setPageStructure(structure);
  }, [pageId, location.pathname]); // Update on route change

  if (!pageStructure) return <p>Loading...</p>;

  const { title, description, sections } = pageStructure;

  return (
    <div className={`page-${pageId}`}>
      <Header />
      {pageId === "homepage" ? (
        <HomeHero data={CMS.getSiteSettings()} />
      ) : (
        <GenericHero title={title} description={description} />
      )}
      {sections.map(({ key, data, showSectionLink }) => {
        const SectionComponent = sectionComponents[key];
        if (!SectionComponent) {
          console.warn(`Missing component for section: '${key}'`);
          return null;
        }
        return (
          <SectionComponent key={`${key}-${location.pathname}`} data={data} showSectionLink={showSectionLink} />
        );
      })}
      <Footer />
    </div>
  );
};

export default CMSDisplayTheme;
