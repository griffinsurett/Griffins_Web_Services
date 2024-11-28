// CMS/Utils/DynamicRoutes.js
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
  return (
    <Routes>
      {/* Home Page Route */}
      <Route path="/" element={<PickTheme key="homepage" pageId="homepage" />} />

      {/* Collection-Level Routes */}
      {Content.collections
        .filter((collection) => collection.hasPage)
        .map((collection) => (
          <Route
            key={collection.collection}
            path={collection.slug}
            element={<PickTheme key={collection.collection} pageId={collection.collection} />}
          />
        ))}

      {/* Item-Level Routes */}
      {Content.collections
        .filter((collection) => collection.itemsHasPage)
        .flatMap((collection) =>
          collection.items.map((item) => {
            const itemPath = getRoutePath(item);
            return (
              <Route
                key={item.slug}
                path={itemPath}
                element={<PickTheme key={item.slug} pageId={item.slug} />}
              />
            );
          })
        )}

      {/* Fallback Route */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default DynamicRoutes;
