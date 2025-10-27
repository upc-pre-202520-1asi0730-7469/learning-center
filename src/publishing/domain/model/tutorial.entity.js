import {Category} from "./category.entity.js";

/**
 * Tutorial Entity
 * Represents a tutorial in the publishing domain.
 * @class
 * @property {Number|null} id - The unique identifier of the tutorial.
 * @property {string} title - The title of the tutorial.
 * @property {string} summary - The summary of the tutorial.
 * @property {Number|null} categoryId - The ID of the associated category.
 * @property {Category|null} category - The associated category object.
 * 
 * @example
 * const tutorial = new Tutorial({ id: 1, title: 'Vue Basics', summary: 'Intro to Vue', categoryId: 1, category: someCategory });
 * console.log(tutorial.title); // 'Vue Basics'
 */
export class Tutorial {
    /**
     * Creates an instance of Tutorial.
     * @param {Object} params - The parameters for the tutorial.
     * @param {Number|null} params.id - The unique identifier of the tutorial.
     * @param {string} params.title - The title of the tutorial.
     * @param {string} params.summary - The summary of the tutorial.
     * @param {Number|null} params.categoryId - The ID of the associated category.
     * @param {Category|null} params.category - The associated category object.
     */
    constructor({ id = null, title = '', summary = '', categoryId = null, category = null }) {
        this.id = id;
        this.title = title;
        this.summary = summary;
        this.categoryId = categoryId;
        this.category = category instanceof Category ? category : null;
    }
}