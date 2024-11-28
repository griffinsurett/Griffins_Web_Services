// Theme/CMSDisplayTheme.js
import React from "react";
import { getPageStructure } from "../../CMS/Utils/GetPageStructure";
import { getSiteSettings } from "../../CMS/Utils/GetSettings";
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
  const pageStructure = getPageStructure(pageId);

  if (!pageStructure) {
    return <p>Error: No structure found for page '{pageId}'.</p>;
  }

  const { title, description, sections } = pageStructure;

  return (
    <div className={`page-${pageId}`}>
      {/* Render Hero */}
      {pageId === "homepage" ? (
        <HomeHero data={getSiteSettings()} />
      ) : (
        <GenericHero title={title} description={description} />
      )}

      {/* Render Sections */}
      {sections.map(({ key, data }) => {
        const SectionComponent = sectionComponents[key];
        if (!SectionComponent) {
          console.warn(`Section '${key}' is missing data or a component.`);
          return null;
        }
        return <SectionComponent key={key} data={data} />;
      })}
    </div>
  );
};

export default CMSDisplayTheme;
