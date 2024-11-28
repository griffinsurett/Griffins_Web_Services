// CMS/Utils/DynamicRoutes.js
import React, { useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Content from "../Content";
import PickTheme from "../PickTheme";

const DynamicRoutes = () => {
  const location = useLocation(); // Listen to the current location

  useEffect(() => {
    // Reactively handle any logic that must trigger on route change
    // console.log("Navigated to", location.pathname);
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<PickTheme key="homepage" pageId="homepage" />} />
      {Content.collections
        .filter((collection) => collection.hasPage)
        .map((collection) => (
          <Route
            key={collection.collection}
            path={collection.slug}
            element={<PickTheme key={collection.collection} pageId={collection.collection} />}
          />
        ))}
      {Content.collections
        .filter((collection) => collection.itemsHasPage)
        .flatMap((collection) =>
          collection.items.map((item) => {
            const itemPath = item.slug.startsWith("/") ? item.slug : `/${item.slug}`;
            return (
              <Route
                key={item.slug}
                path={itemPath}
                element={<PickTheme key={item.slug} pageId={item.slug} />}
              />
            );
          })
        )}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default DynamicRoutes;
