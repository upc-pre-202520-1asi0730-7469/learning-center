import {Category} from "../domain/model/category.entity.js";

/**
 * Assembler for Category entities.
 * Converts raw data from API responses into Category domain entities.
 * Handles both single resource and collection responses.
 * Assumes API responses follow JSON:API specification.
 * @class
 * 
 * @example
 * // Single resource response
 * const singleResponse = {
 *   status: 200,
 *   data: { id: 1, name: 'Tech', description: 'Technology related articles' }
 * };
 * const category = CategoryAssembler.toEntityFromResource(singleResponse.data);
 * 
 * // Collection response
 * const collectionResponse = {
 *   status: 200,
 *   data: {
 *     categories: [
 *       { id: 1, name: 'Tech', description: 'Technology related articles' },
 *       { id: 2, name: 'Health', description: 'Health and wellness articles' }
 *     ]
 *   }
 * };
 * const categories = CategoryAssembler.toEntitiesFromResponse(collectionResponse);
 */
export class CategoryAssembler {
    /**
     * Converts a single resource object into a Category entity.
     * @param resource - Raw resource object from API response.
     * @returns {Category} - Category domain entity.
     * 
     * @example
     * const resource = { id: 1, name: 'Tech', description: 'Technology related articles' };
     * const category = CategoryAssembler.toEntityFromResource(resource);
     */
    static toEntityFromResource(resource) {
        return new Category({...resource});
    }

    /**
     * Converts an API response containing multiple resources into an array of Category entities.
     * @param response - API response object.
     * @returns {Category[]} - Array of Category domain entities.
     * 
     * @example
     * const response = {
     *   status: 200,
     *   data: {
     *     categories: [
     *       { id: 1, name: 'Tech', description: 'Technology related articles' },
     *       { id: 2, name: 'Health', description: 'Health and wellness articles' }
     *     ]
     *   }
     * };
     * const categories = CategoryAssembler.toEntitiesFromResponse(response);
     */
    static toEntitiesFromResponse(response) {
        if (response.status !== 200) {
            console.error(`${response.status}: ${response.statusText}`);
            return [];
        }
        let resources = response.data instanceof Array ? response.data : response.data['categories'];
        return resources.map(resource => this.toEntityFromResource(resource));
    }
}

