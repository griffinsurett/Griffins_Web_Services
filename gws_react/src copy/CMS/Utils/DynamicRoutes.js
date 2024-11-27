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
  // Filter collections that define `hasPage: true`
  const collectionsWithPages = Content.collections.filter((c) => c.hasPage);

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
            if (!itemPath) return null; // Skip external links or undefined paths

            return (
              <Route
                key={itemPath}
                path={itemPath}
                element={
                  <PickTheme
                    pageId={itemPath}
                    sections={item.sections} // Pass sections explicitly
                  />
                }
              />
            );
          })
        )}

      {/* Redirect Logic */}
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
    </Routes>
  );
};

export default DynamicRoutes;
