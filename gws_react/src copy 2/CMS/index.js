// CMS/index.js
import Content from "./Content";
import { RelationalUtil } from "./Utils/RelationsUtil";
import { getSiteSettings as fetchSiteSettings } from "./Utils/GetSettings";
import { getPageStructure as fetchPageStructure } from "./Utils/GetPageStructure";
import { getCollection as fetchCollection } from "./Utils/GetCollection";
import { shouldShowSectionLink } from "./Utils/SectionUtils";

// Initialize relational utility
const relationalUtil = new RelationalUtil(Content);

const CMS = {
  // Expose site settings
  getSiteSettings() {
    return fetchSiteSettings();
  },

  // Expose page structure
  getPageStructure(pageId) {
    // Ensure page exists
    const page = Content.pages.find((p) => p.id === pageId);
    if (!page) {
      console.error(`Page '${pageId}' not found in CMS.`);
      return null;
    }

    // Special handling for collection pages
    const collection = Content.collections.find((col) => col.collection === pageId);
    if (collection) {
      return {
        title: collection.title || collection.heading || "Untitled Collection",
        description: collection.paragraph || "",
        sections: collection.sections.map((sectionKey) => {
          const sectionData = fetchCollection(sectionKey, pageId);
          return {
            key: sectionKey,
            data: sectionData,
          };
        }),
        items: collection.items || [], // Directly include collection items
      };
    }

    return fetchPageStructure(pageId);
  },

  // Expose collections
  getCollection(collectionSlug, excludePageId = null) {
    const collection = fetchCollection(collectionSlug, excludePageId);

    if (!collection) {
      console.error(`Collection '${collectionSlug}' not found.`);
      return null;
    }

    return {
      ...collection,
      items: collection.items || [], // Ensure items are included
    };
  },

  // Expose relational data
  getRelatedItems(fromCollection, fromIdentifier, targetCollection) {
    return relationalUtil.getRelatedItems(fromCollection, fromIdentifier, targetCollection);
  },

  // Section utility
  shouldShowSectionLink(data, pageId) {
    return shouldShowSectionLink(data, pageId);
  },
};

export default CMS;