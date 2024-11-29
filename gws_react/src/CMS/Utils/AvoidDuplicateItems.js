// ResolveSections.js
import Content from "../Content";
import { getCollection } from "./GetCollection";

/**
 * Resolves sections dynamically for a page or item.
 * @param {Array} sectionKeys - The section keys to resolve.
 * @param {string} pageId - The ID of the current page.
 * @param {Set} addedSlugs - A Set to track duplicate slugs globally.
 * @returns {Array} - An array of resolved sections with their data.
 */
const resolveSections = (sectionKeys, pageId, addedSlugs) => {
  return sectionKeys.map((sectionKey) => {
    const isCollection = Content.collections.some((col) => col.collection === sectionKey);

    if (!isCollection) {
      return {
        key: sectionKey,
        data: Content.pages.find((p) => p.id === sectionKey) || {},
      };
    }

    const sectionData = getCollection(sectionKey, pageId);

    if (!sectionData) {
      return {
        key: sectionKey,
        data: null,
      };
    }

    if (sectionData.items) {
      sectionData.items = sectionData.items.filter((item) => {
        if (addedSlugs.has(item.slug)) return false;
        addedSlugs.add(item.slug);
        return true;
      });
    }

    return {
      key: sectionKey,
      data: sectionData,
    };
  });
};

export default resolveSections;
