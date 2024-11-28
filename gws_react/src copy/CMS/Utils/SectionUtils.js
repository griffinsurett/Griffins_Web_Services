// Utils/SectionUtils.js
// Utils/SectionUtils.js
export const shouldShowSectionLink = (data, currentPageId) => {
  if (!data || !data.slug) return false;

  // Check if the current page is a collection page
  const isCollectionPage = data.slug === `/${currentPageId}`;

  // Check if the current page is an item within the collection
  const isItemPage =
    Array.isArray(data.items) &&
    data.items.some((item) => item.slug === `/${currentPageId}`);

  // Show the section link only if:
  // - It's not a collection page
  // - The page is an item within the collection
  // - OR the collection has items with valid slugs
  return !isCollectionPage && (isItemPage || (data.items?.some((item) => item.slug) || false));
};
