import {Tutorial} from "../domain/model/tutorial.entity.js";

/**
 * Assembler class to convert tutorial resources and responses into Tutorial entities.
 * @class
 * 
 * @example
 * // Convert a single resource to an entity
 * const resource = { id: 1, title: "Tutorial 1", content: "Content of tutorial 1" };
 * const tutorialEntity = TutorialAssembler.toEntityFromResource(resource); 
 * 
 * // Convert a response containing multiple resources to entities
 * const response = {
 *   status: 200,
 *   data: [
 *     { id: 1, title: "Tutorial 1", content: "Content of tutorial 1" },
 *     { id: 2, title: "Tutorial 2", content: "Content of tutorial 2" }
 *   ]
 * };
 * const tutorialEntities = TutorialAssembler.toEntitiesFromResponse(response);     
 */
export class TutorialAssembler {

    /**
     * Convert a single tutorial resource into a Tutorial entity.
     * @param {Object} resource - The tutorial resource object.
     * @param {Number|null} resource.id - The ID of the tutorial.
     * @param {string} resource.title - The title of the tutorial.
     * @param {string} resource.summary - The summary of the tutorial.
     * @param {Number|null} resource.categoryId - The ID of the associated category.
     * @param {Object|null} resource.category - The associated category object.
     * @returns {Tutorial} - The converted Tutorial entity.
     * 
     * @example
     * const resource = { id: 1, title: "Tutorial 1", summary: "Summary", categoryId: 1, category: {id:1, name:'Tech'} };
     * const tutorialEntity = TutorialAssembler.toEntityFromResource(resource);
     */
    static toEntityFromResource(resource) {
        return new Tutorial({...resource});
    }

    /**
     * Convert a response containing multiple tutorial resources into an array of Tutorial entities.
     * @param {Object} response - The response object containing tutorial resources.
     * @param {Number} response.status - HTTP status code.
     * @param {Object|Array} response.data - The data payload.
     * @returns {Tutorial[]} - An array of converted Tutorial entities.
     * 
     * @example
     * const response = {
     *   status: 200,
     *   data: [
     *     { id: 1, title: "Tutorial 1", summary: "Summary", categoryId: 1 },
     *     { id: 2, title: "Tutorial 2", summary: "Summary", categoryId: 2 }
     *   ]
     * };
     * const tutorialEntities = TutorialAssembler.toEntitiesFromResponse(response);
     */
    static toEntitiesFromResponse(response) {
        if (response.status !== 200) {
            console.error(`${response.status}: ${response.statusText}`);
            return [];
        }
        let resources = response.data instanceof Array ? response.data : response.data['tutorials'];
        return resources.map(resource => this.toEntityFromResource(resource));
    }
}