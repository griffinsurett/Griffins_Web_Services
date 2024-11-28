// CMS/Utils/GetCollection.js
import Content from "../Content";
import RelationalUtil from "./RelationsUtil";

const relationalUtil = new RelationalUtil(Content);

export const getCollection = (slug, pageId = null) => {
  const collection = Content.collections.find(
    (c) => c.collection === slug || c.items?.some((item) => item.slug === slug)
  );

  if (!collection) {
    console.warn(`'${slug}' is not a collection or item in a collection.`);
    return null;
  }

  if (pageId && collection.items) {
    const item = collection.items.find((item) => item.slug === pageId);
    if (item) {
      // console.log("Current item:", item);
      // console.log("Exclude Identifier:", pageId);

      // Get related items, excluding the current item
      const relatedItems = relationalUtil.getRelatedItems(
        collection.collection,
        item.slug,
        collection.collection,
        pageId // Exclude the current page ID
      );

      // console.log("Filtered related items:", relatedItems);

      // Overwrite `items` in the returned collection
      return {
        ...collection,
        items: relatedItems, // Use filtered related items here
      };
    }
  }

  return collection;
};
