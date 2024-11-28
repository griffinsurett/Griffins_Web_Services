// CMSDisplayTheme.js
import React, { useEffect, useState } from "react";
import { getPageStructure } from "../../CMS/Utils/GetPageStructure";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

// Map section keys to their components (specific to this theme)
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

  useEffect(() => {
    const structure = getPageStructure(pageId);
    setPageStructure(structure);
  }, [pageId]);

  if (!pageStructure) {
    return <p>Loading...</p>;
  }

  const { title, description, sections, siteSettings } = pageStructure;

  return (
    <>
      <Header />
      <div className={`page-${pageId}`}>
        {pageId === "homepage" ? (
          <sectionComponents.hero data={siteSettings} />
        ) : (
          <GenericHero title={title} description={description} />
        )}

        {sections.map(({ key, data, showLink }) => {
          const SectionComponent = sectionComponents[key];
          if (!SectionComponent) {
            console.warn(`Section '${key}' is missing a component.`);
            return null;
          }

          return (
            <div key={key} className={`section-${key}`}>
              <SectionComponent data={data} />
              {showLink && (
                <div className="section-link">
                  <a href={data.slug}>View More</a>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default CMSDisplayTheme;
