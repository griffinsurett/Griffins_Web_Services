// Utils/SectionUtils.js
export const shouldShowSectionLink = (data, currentPageId) => {
    if (!data || !data.slug) return false;
  
    const isCollectionPage = data.slug === `/${currentPageId}`;
    const isItemPage =
      Array.isArray(data.items) &&
      data.items.some((item) => item.slug === `/${currentPageId}`);
  
    const hasItemsWithSlugs = Array.isArray(data.items) && data.items.some((item) => item.slug);
  
    // Show the section link if:
    // - This is an item page within the collection (isItemPage is true)
    // - OR the collection has items with slugs (hasItemsWithSlugs is true but not on the main collection page)
    return isItemPage || (hasItemsWithSlugs && !isCollectionPage);
  };
  