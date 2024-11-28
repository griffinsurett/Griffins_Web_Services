// CMSDisplayTheme.js
import React, { useEffect, useState } from "react";
import CMS from "../../CMS"; // Centralized CMS import
import HomeHero from "./Components/Section/Hero";
import GenericHero from "./Components/Section/Hero2";
import About from "./Components/Section/About/About";
import Services from "./Components/Section/Services";
import Contact from "./Components/Section/Contact";
import Testimonials from "./Components/Section/Testimonials";
import Projects from "./Components/Section/Projects";
import FAQ from "./Components/Section/FAQ";
import Header from "./Components/Header";

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

  useEffect(() => {
    const structure = CMS.getPageStructure(pageId);
    setPageStructure(structure);
  }, [pageId]); // Recalculate when pageId changes

  if (!pageStructure) {
    return <p>Loading...</p>;
  }

  const { title, description, sections } = pageStructure;

  return (
    <div className={`page-${pageId}`}>
      <Header />
      {pageId === "homepage" ? (
        <HomeHero data={CMS.getSiteSettings()} />
      ) : (
        <GenericHero title={title} description={description} />
      )}

      {sections.map(({ key, data }) => {
        const SectionComponent = sectionComponents[key];
        if (!SectionComponent) {
          console.warn(`Section '${key}' is missing data or a component.`);
          return null;
        }

        const showSectionLink = CMS.shouldShowSectionLink(data, pageId);

        return (
          <SectionComponent
            key={key}
            data={data}
            currentPageId={pageId}
            showSectionLink={showSectionLink}
          />
        );
      })}
    </div>
  );
};

export default CMSDisplayTheme;
