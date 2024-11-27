// CMS/Utils/DynamicRoutes.js
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Content from "../Content";
import PickTheme from "../PickTheme";

/**
 * Helper to determine route path, prioritizing slug for internal routes
 * and falling back to link if no slug exists.
 */
const getRoutePath = (item) => {
  if (item.slug) return item.slug.startsWith("/") ? item.slug : `/${item.slug}`;
  if (item.link && item.link.startsWith("/")) return item.link; // Internal link
  return null; // External links should not be part of Routes
};

const DynamicRoutes = () => {
  const collectionsWithPages = Content.collections.filter((c) => c.hasPage);

  // Map all items with their prefixed and unprefixed routes
  const itemRedirects = collectionsWithPages
    .filter((collection) => collection.itemsHasPage)
    .flatMap((collection) =>
      collection.items.map((item) => {
        const prefixedSlug = getRoutePath(item); // The full prefixed slug
        const unprefixedSlug = `/${item.slug.split("/").pop()}`; // Extract last part of the slug
        return { prefixedSlug, unprefixedSlug };
      })
    );

  return (
    <Routes>
      {/* Homepage Route */}
      <Route path="/" element={<PickTheme pageId="homepage" />} />

      {/* Collection Routes */}
      {collectionsWithPages.map((collection) => {
        const collectionPath = getRoutePath(collection);
        if (!collectionPath) return null; // Skip external links or undefined paths

        return (
          <Route
            key={collection.id}
            path={collectionPath}
            element={<PickTheme pageId={collection.collection} />}
          />
        );
      })}

      {/* Item-specific Routes */}
      {collectionsWithPages
        .filter((collection) => collection.itemsHasPage)
        .flatMap((collection) =>
          collection.items.map((item) => {
            const itemPath = getRoutePath(item);
            if (!itemPath) return null; // Skip items without a valid path
            return (
              <Route
                key={itemPath}
                path={itemPath}
                element={
                  <PickTheme
                    pageId={itemPath}
                    sections={item.sections || []} // Pass sections for rendering
                  />
                }
              />
            );
          })
        )}

      {/* Unprefixed Slug Redirects */}
      {itemRedirects.map(({ prefixedSlug, unprefixedSlug }) => (
        <Route
          key={`redirect-${unprefixedSlug}`}
          path={unprefixedSlug}
          element={<Navigate to={prefixedSlug} replace />}
        />
      ))}

      {/* RedirectFrom Logic */}
      {collectionsWithPages
        .filter(
          (collection) =>
            collection.redirectFrom && collection.redirectFrom.length > 0
        )
        .flatMap((collection) =>
          collection.redirectFrom.map((fromPath) => (
            <Route
              key={`redirect-${fromPath}`}
              path={fromPath}
              element={<Navigate to={getRoutePath(collection)} replace />}
            />
          ))
        )}

      {/* Invalid Routes */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default DynamicRoutes;
