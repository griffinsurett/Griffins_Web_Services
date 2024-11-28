// CMS/Utils/GetPageStructure.js
import Content from "../Content";
import { getCollection } from "./GetCollection";

export const getPageStructure = (pageId) => {
  const page = Content.pages.find((p) => p.id === pageId);
  if (!page) {
    console.error(`Page '${pageId}' not found in CMS.`);
    return null;
  }

  // Determine if the page is a collection page or an item page
  const collection = getCollection(pageId);
  const isCollectionPage = collection && collection.collection === pageId;
  const isItemPage = collection && collection.items?.some((item) => item.slug === pageId);

  const item = isItemPage ? collection.items.find((item) => item.slug === pageId) : null;

  const title = item?.title || collection?.title || page.title || "Untitled Page";
  const description = item?.description || collection?.paragraph || "";

  // Track already added items to avoid duplicates globally
  const addedSlugs = new Set();

  // Build sections dynamically
  const sections = (item?.sections || page.sections).map((sectionKey) => {
    const isCollection = Content.collections.some((col) => col.collection === sectionKey);

    // If the section is not a collection, just return the section data directly
    if (!isCollection) {
      const sectionData = page[sectionKey] || {}; // You can fetch static data here
      return {
        key: sectionKey,
        data: sectionData,
      };
    }

    // If the section is a collection, fetch the collection data
    const sectionData = getCollection(sectionKey, pageId);

    if (!sectionData) {
      return {
        key: sectionKey,
        data: null, // No data for this section
      };
    }

    if (sectionData.items) {
      // Handle items for collection pages and item pages
      if (isCollectionPage || isItemPage) {
        const aggregatedSlugs = new Set();

        if (isCollectionPage) {
          const relatedKey = `relatedTo${capitalize(sectionKey)}`;

          // Aggregate related slugs for all items in the collection
          collection.items.forEach((colItem) => {
            const relatedSlugs = colItem[relatedKey] || [];
            relatedSlugs.forEach((slug) => aggregatedSlugs.add(slug));
          });
        }

        if (isItemPage && item) {
          const relatedKey = `relatedTo${capitalize(sectionKey)}`;

          // Add only related slugs for the specific item
          const relatedSlugs = item[relatedKey] || [];
          relatedSlugs.forEach((slug) => aggregatedSlugs.add(slug));
        }

        // Combine original collection items and related items, filtering duplicates
        const deduplicatedItems = [
          ...new Map(
            [
              ...(isCollectionPage ? collection.items : []),
              ...sectionData.items.filter((relatedItem) => aggregatedSlugs.has(relatedItem.slug)),
            ]
              .filter((item) => !addedSlugs.has(item.slug)) // Skip items already added
              .map((item) => [item.slug, item]) // Deduplicate by slug
          ).values(),
        ];

        // Add these items to the global tracker to avoid duplicates across sections
        deduplicatedItems.forEach((item) => addedSlugs.add(item.slug));

        sectionData.items = deduplicatedItems;
      }
    }

    return {
      key: sectionKey,
      data: sectionData,
    };
  });

  return { title, description, sections };
};

// Helper function to capitalize the first letter
const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);
