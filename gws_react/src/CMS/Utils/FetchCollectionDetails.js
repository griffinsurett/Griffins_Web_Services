// FetchCollectionDetails.js
import Content from "../Content";
import { getCollection } from "./GetCollection";

/**
 * Determines if the page is a collection, item, or static page and fetches associated data.
 * @param {string} pageId - The ID of the page.
 * @returns {object|null} - An object containing collection or item data, or null for static pages.
 */
const fetchCollectionDetails = (pageId) => {
  const collection = getCollection(pageId);

  if (!collection) return null;

  const isCollectionPage = collection.collection === pageId;
  const isItemPage = collection.items?.some((item) => item.slug === pageId);

  const item = isItemPage ? collection.items.find((item) => item.slug === pageId) : null;

  return {
    collection,
    isCollectionPage,
    isItemPage,
    item,
  };
};

export default fetchCollectionDetails;
