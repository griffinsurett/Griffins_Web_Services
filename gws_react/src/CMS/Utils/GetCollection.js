// CMS/Utils/GetCollection.js
import Content from "../Content"; // Adjust path if needed

export const getCollection = (collectionName) => {
  if (!Content || !Content.collections) {
    console.error("Error: Collections are not defined in Content");
    return null;
  }

  const collection = Content.collections.find(
    (item) => item.collection === collectionName
  );

  if (!collection) {
    console.error(`Error: Collection '${collectionName}' not found`);
    return null;
  }

  return collection;
};
