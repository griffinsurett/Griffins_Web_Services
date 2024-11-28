// CMS/Utils/GetPageStructure.js
import Content from "../Content";
import { getCollection } from "./GetCollection";
import { getSiteSettings } from "./GetSettings";

/**
 * Determines if a section link should be shown.
 * @param {object} sectionData - The section data.
 * @param {string} currentPageId - The current page ID.
 */
const shouldShowSectionLink = (sectionData, currentPageId) => {
  if (!sectionData || !sectionData.slug || !sectionData.hasPage) return false; // Ensure hasPage is true

  const isCollectionPage = sectionData.slug === `/${currentPageId}`;
  const isItemPage =
    Array.isArray(sectionData.items) &&
    sectionData.items.some((item) => item.slug === `/${currentPageId}`);

  // Show the section link only if:
  // - It's not the collection page
  // - It's not an item within the collection
  // - AND the collection's `hasPage` is true
  return !isCollectionPage && (isItemPage || sectionData.items?.some((item) => item.slug));
};

/**
 * Builds and returns the structure of the requested page, including data for its sections.
 */
export const getPageStructure = (pageId) => {
  const page = Content.pages.find((p) => p.id === pageId);
  if (!page) {
    console.error(`Page '${pageId}' not found in CMS.`);
    return null;
  }

  const siteSettings = getSiteSettings();

  const collection = getCollection(pageId);
  const isCollectionPage = collection && collection.collection === pageId;
  const isItemPage = collection && collection.items?.some((item) => item.slug === pageId);

  const item = isItemPage ? collection.items.find((item) => item.slug === pageId) : null;

  const title = item?.name || item?.title || collection?.title || page.title || "Untitled Page";
  const description = item?.description || collection?.paragraph || "";

  const addedSlugs = new Set();

  const sections = (item?.sections || page.sections).map((sectionKey) => {
    const isCollection = Content.collections.some((col) => col.collection === sectionKey);

    if (!isCollection) {
      return {
        key: sectionKey,
        data: page[sectionKey] || {},
        showLink: false, // No link for static data sections
      };
    }

    const sectionData = getCollection(sectionKey, pageId);

    if (!sectionData) {
      return {
        key: sectionKey,
        data: null,
        showLink: false,
      };
    }

    if (sectionData.items) {
      const aggregatedSlugs = new Set();

      if (isCollectionPage) {
        collection.items.forEach((colItem) => {
          const relatedKey = `relatedTo${capitalize(sectionKey)}`;
          const relatedSlugs = colItem[relatedKey] || [];
          relatedSlugs.forEach((slug) => aggregatedSlugs.add(slug));
        });
      }

      if (isItemPage && item) {
        const relatedKey = `relatedTo${capitalize(sectionKey)}`;
        const relatedSlugs = item[relatedKey] || [];
        relatedSlugs.forEach((slug) => aggregatedSlugs.add(slug));
      }

      sectionData.items = [
        ...new Map(
          [
            ...(isCollectionPage ? collection.items : []),
            ...sectionData.items.filter((relatedItem) => aggregatedSlugs.has(relatedItem.slug)),
          ]
            .filter((item) => !addedSlugs.has(item.slug))
            .map((item) => [item.slug, item])
        ).values(),
      ];

      sectionData.items.forEach((item) => addedSlugs.add(item.slug));
    }

    // Determine if the section link should be shown (requires `hasPage=true`)
    const showLink = sectionData.hasPage && shouldShowSectionLink(sectionData, pageId);

    return {
      key: sectionKey,
      data: sectionData,
      showLink, // Add visibility information for the link
    };
  });

  return {
    title,
    description,
    sections,
    siteSettings,
  };
};

// Helper function to capitalize the first letter
const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);
