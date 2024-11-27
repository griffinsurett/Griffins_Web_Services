// CMS/Utils/GetCollection.js
import Content from "../Content";
import RelationalUtil from "./RelationsUtil";

const relationalUtil = new RelationalUtil(Content);

export const getCollection = (slug, pageId = null) => {
  // Check if the slug corresponds to a collection
  const collection = Content.collections.find(
    (c) => c.collection === slug || c.items?.some((item) => item.slug === slug)
  );

  if (!collection) {
    // If it's not a collection or an item within a collection, log a warning and return null
    console.warn(`'${slug}' is not a collection or item in a collection.`);
    return null;
  }

  // Add dynamic relationships for items within the collection
  if (pageId && collection.items) {
    const item = collection.items.find((item) => item.slug === pageId);
    if (item) {
      // Loop through all collections and dynamically find related items
      Content.collections.forEach((targetCollection) => {
        const relatedKey = `relatedTo${capitalize(targetCollection.collection)}`;
        item[relatedKey] = relationalUtil.getRelatedItems(
          collection.collection,
          item.slug,
          targetCollection.collection
        );        
      });
    }
  }

  return collection;
};

// Helper function to capitalize the first letter of a string
const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);