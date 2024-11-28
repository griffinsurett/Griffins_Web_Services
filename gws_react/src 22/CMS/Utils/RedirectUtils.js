// CMS/Utils/RedirectUtils.js
import React from "react";
import { Navigate, Route } from "react-router-dom";

/**
 * Generate redirect routes for collections and items with redirectFrom properties.
 * 
 * @param {Array} collections - The collections array from Content.js.
 * @returns {Array} - An array of <Route> elements for redirects.
 */
export const generateRedirectRoutes = (collections) => {
  const redirects = [];

  // Process collection-level redirects
  collections.forEach((collection) => {
    if (collection.hasPage && collection.redirectFrom) {
      collection.redirectFrom.forEach((redirectPath) => {
        redirects.push(
          <Route
            key={`${collection.collection}-redirect-${redirectPath}`}
            path={redirectPath}
            element={<Navigate to={collection.slug} replace />}
          />
        );
      });
    }

    // Process item-level redirects
    if (collection.itemsHasPage && Array.isArray(collection.items)) {
      collection.items.forEach((item) => {
        if (item.redirectFrom) {
          item.redirectFrom.forEach((redirectPath) => {
            redirects.push(
              <Route
                key={`${item.slug}-redirect-${redirectPath}`}
                path={redirectPath}
                element={<Navigate to={item.slug} replace />}
              />
            );
          });
        }
      });
    }
  });

  return redirects;
};
