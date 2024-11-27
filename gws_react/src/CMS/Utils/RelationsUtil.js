export class RelationalUtil {
  constructor(content) {
    this.content = content;
  }

  /**
   * Helper to resolve the full slug, adding the collection prefix if missing.
   * @param {string} collectionName - The collection name.
   * @param {string|number} identifier - The slug or index to resolve.
   * @returns {string} - The resolved slug with the collection prefix, or null if index-based.
   */
  resolveSlug(collectionName, identifier) {
    if (typeof identifier === "number") {
      // Index-based resolution doesn't use slugs directly
      return null;
    }

    if (!identifier.startsWith("/")) identifier = `/${identifier}`; // Ensure it starts with "/"
    const collection = this.content.collections.find(
      (col) => col.collection === collectionName
    );

    if (!collection) {
      console.error(`Collection '${collectionName}' not found.`);
      return identifier; // Return as-is if collection not found
    }

    if (identifier.startsWith(collection.slug)) {
      return identifier; // Already prefixed
    }

    // Add collection prefix if not present
    return `${collection.slug}${identifier}`.replace("//", "/"); // Avoid double slashes
  }

  /**
   * Resolve an entity by slug or index.
   * @param {string} collectionName - The collection name.
   * @param {string|number} identifier - The slug or index of the item.
   * @returns {object|null} - The resolved entity, or null if not found.
   */
  resolveEntity(collectionName, identifier) {
    const collection = this.content.collections.find(
      (col) => col.collection === collectionName
    );

    if (!collection) {
      console.error(`Collection '${collectionName}' not found.`);
      return null;
    }

    if (typeof identifier === "number") {
      // Handle index-based resolution
      return collection.items?.[identifier] || null;
    }

    if (typeof identifier === "string") {
      // Handle slug-based resolution
      const resolvedSlug = this.resolveSlug(collectionName, identifier);
      return collection.items?.find((item) => item.slug === resolvedSlug) || null;
    }

    console.error(`Invalid identifier '${identifier}' for collection '${collectionName}'.`);
    return null;
  }

  /**
   * Establish a bidirectional relationship between two entities using slug or index.
   * Automatically resolves the correct entities.
   * @param {string} fromCollection - The originating collection name.
   * @param {string|number} fromIdentifier - The slug or index of the originating entity.
   * @param {string} toCollection - The target collection name.
   * @param {string|number} toIdentifier - The slug or index of the target entity.
   */
  relate(fromCollection, fromIdentifier, toCollection, toIdentifier) {
    const fromEntity = this.resolveEntity(fromCollection, fromIdentifier);
    const toEntity = this.resolveEntity(toCollection, toIdentifier);

    if (!fromEntity || !toEntity) {
      console.error(
        `Failed to create relationship: Invalid entities (${fromCollection}:${fromIdentifier} <-> ${toCollection}:${toIdentifier})`
      );
      return;
    }

    const fromRelationKey = `relatedTo${this.capitalize(toCollection)}`;
    const toRelationKey = `relatedTo${this.capitalize(fromCollection)}`;

    // Establish the relationship from `fromEntity` to `toEntity`
    fromEntity[fromRelationKey] = fromEntity[fromRelationKey] || [];
    if (!fromEntity[fromRelationKey].includes(toEntity.slug)) {
      fromEntity[fromRelationKey].push(toEntity.slug);
    }

    // Establish the reverse relationship from `toEntity` to `fromEntity`
    toEntity[toRelationKey] = toEntity[toRelationKey] || [];
    if (!toEntity[toRelationKey].includes(fromEntity.slug)) {
      toEntity[toRelationKey].push(fromEntity.slug);
    }
  }

  /**
   * Automatically infer indirect relationships between entities.
   */
  inferIndirectRelationships() {
    const collections = this.content.collections;

    collections.forEach((sourceCollection) => {
      if (sourceCollection.items) {
        sourceCollection.items.forEach((entity) => {
          Object.keys(entity).forEach((relationKey) => {
            if (relationKey.startsWith("relatedTo")) {
              const targetCollectionName = relationKey.replace("relatedTo", "").toLowerCase();
              const relatedSlugs = entity[relationKey] || [];

              relatedSlugs.forEach((slug) => {
                const relatedEntity = this.resolveEntity(targetCollectionName, slug);

                if (relatedEntity) {
                  Object.keys(relatedEntity).forEach((relatedRelationKey) => {
                    if (relatedRelationKey.startsWith("relatedTo")) {
                      const indirectTargetCollectionName = relatedRelationKey
                        .replace("relatedTo", "")
                        .toLowerCase();

                      const indirectSlugs = relatedEntity[relatedRelationKey] || [];

                      const indirectRelationKey = `relatedTo${this.capitalize(indirectTargetCollectionName)}`;
                      entity[indirectRelationKey] = entity[indirectRelationKey] || [];

                      indirectSlugs.forEach((indirectSlug) => {
                        if (!entity[indirectRelationKey].includes(indirectSlug)) {
                          entity[indirectRelationKey].push(indirectSlug);
                        }
                      });
                    }
                  });
                }
              });
            }
          });
        });
      }
    });
  }

  /**
   * Helper to capitalize the first letter of a string.
   * @param {string} string - The string to capitalize.
   * @returns {string} - The capitalized string.
   */
  capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  /**
   * Fetch related items from a target collection for a given entity.
   * @param {string} fromCollection - The originating collection name.
   * @param {string|number} fromIdentifier - The slug or index of the originating entity.
   * @param {string} targetCollection - The target collection name.
   * @returns {Array} - The list of related items.
   */
  getRelatedItems(fromCollection, fromIdentifier, targetCollection) {
    const entity = this.resolveEntity(fromCollection, fromIdentifier);
    if (!entity) {
      console.error(
        `Entity '${fromIdentifier}' not found in collection '${fromCollection}'.`
      );
      return [];
    }

    const relationKey = `relatedTo${this.capitalize(targetCollection)}`;
    const relatedSlugs = entity[relationKey] || [];

    return relatedSlugs.map((slug) =>
      this.resolveEntity(targetCollection, slug)
    ).filter(Boolean);
  }
}

export default RelationalUtil;
