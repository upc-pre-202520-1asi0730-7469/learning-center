/**
 * Category Entity
 * Represents a category in the publishing domain.
 * @class
 * @property {Number|null} id - The unique identifier of the category.
 * @property {string} name - The name of the category.
 * 
 * @example
 * const category = new Category({ id: 1, name: 'Technology' });
 * console.log(category.id); // 1
 * console.log(category.name); // 'Technology'
 */
export class Category {
    /**
     * Creates an instance of Category.
     * @param id - The unique identifier of the category.
     * @param name - The name of the category.
     */
    constructor({ id = null, name = '' }) {
        this.id = id;
        this.name = name;
    }
}