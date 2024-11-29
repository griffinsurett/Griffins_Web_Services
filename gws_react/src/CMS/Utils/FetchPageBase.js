// FetchBasePage.js
import Content from "../Content";

/**
 * Fetches the base page structure by pageId.
 * @param {string} pageId - The ID of the page.
 * @returns {object|null} - The page structure or null if not found.
 */
const fetchBasePage = (pageId) => {
  const page = Content.pages.find((p) => p.id === pageId);
  if (!page) {
    console.error(`Page '${pageId}' not found in CMS.`);
    return null;
  }
  return page;
};

export default fetchBasePage;
