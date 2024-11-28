/**
 * Utility for handling slug-related operations
 */

/**
 * Generate a URL-friendly slug from a given string.
 */
export const generateSlug = (title) => {
    if (!title) return "";
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, "") // Remove special characters
      .trim()
      .replace(/\s+/g, "-"); // Replace spaces with hyphens
  };
  
  /**
   * Resolve the full slug for an item, including its parent collection prefix if applicable.
   */
  export const resolveSlug = (collectionSlug, itemSlug) => {
    if (!itemSlug) return null;
    if (itemSlug.startsWith(collectionSlug)) return itemSlug; // Already resolved
    return `${collectionSlug}/${itemSlug.replace(/^\//, "")}`.replace("//", "/");
  };
  
  /**
   * Deduplicate slugs to avoid conflicts.
   */
  export const deduplicateSlugs = (items) => {
    const seen = new Set();
    return items.map((item) => {
      let slug = item.slug;
      let count = 1;
  
      while (seen.has(slug)) {
        slug = `${item.slug}-${count}`;
        count++;
      }
  
      seen.add(slug);
      return { ...item, slug };
    });
  };
  