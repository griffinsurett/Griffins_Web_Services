// CMS/index.js
import Content from "./Content";
import { RelationalUtil } from "./Utils/RelationsUtil";

const relationalUtil = new RelationalUtil(Content);

const CMS = {
  // Get global site settings
  getSiteSettings() {
    return Content.siteSettings;
  },

  // Fetch a collection, with optional filtering by exclusions
  getCollection(slug, excludePageId = null) {
    const collection = Content.collections.find(
      (col) => col.collection === slug || col.items?.some((item) => item.slug === slug)
    );

    if (!collection) {
      console.warn(`Collection '${slug}' not found.`);
      return null;
    }

    if (excludePageId && collection.items) {
      const filteredItems = relationalUtil.getRelatedItems(
        collection.collection,
        excludePageId,
        collection.collection
      );
      return { ...collection, items: filteredItems };
    }

    return collection;
  },

  // Build the structure of a page, including sections and their items
  getPageStructure(pageId) {
    const page = Content.pages.find((p) => p.id === pageId);

    if (!page) {
      console.error(`Page '${pageId}' not found.`);
      return null;
    }

    const collection = this.getCollection(pageId);
    const isCollectionPage = collection && collection.collection === pageId;
    const isItemPage = collection && collection.items?.some((item) => item.slug === pageId);

    const item = isItemPage ? collection.items.find((item) => item.slug === pageId) : null;

    const title = item?.name || item?.title || collection?.title || page.title || "Untitled Page";
    const description = item?.description || collection?.paragraph || "";

    // Resolve sections, ensuring items and related items are included
    const sections = (item?.sections || page.sections).map((sectionKey) => {
      const sectionData = this.getCollection(sectionKey);

      if (sectionData?.items) {
        // Fetch related items for the section
        const relatedItems = relationalUtil.getRelatedItems(
          sectionData.collection,
          pageId,
          sectionData.collection
        );
        sectionData.items = [...sectionData.items, ...relatedItems];
      }

      return { key: sectionKey, data: sectionData };
    });

    return { title, description, sections };
  },
};

export default CMS;
