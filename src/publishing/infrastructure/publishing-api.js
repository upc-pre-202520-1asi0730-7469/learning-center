import {BaseApi} from "../../shared/infrastructure/base-api.js";
import {BaseEndpoint} from "../../shared/infrastructure/base-endpoint.js";

const categoriesEndpointPath = import.meta.env.VITE_CATEGORIES_ENDPOINT_PATH;
const tutorialsEndpointPath = import.meta.env.VITE_TUTORIALS_ENDPOINT_PATH;

/**
 * Publishing API class to interact with categories and tutorials endpoints.
 * Provides methods to perform CRUD operations on categories and tutorials.
 * @extends BaseApi
 * @example
 * const api = new PublishingApi();
 * const categories = await api.getCategories();
 * const tutorial = await api.getTutorialById(1);
 */
export class PublishingApi extends BaseApi {
    #categoriesEndpoint;
    #tutorialsEndpoint;

    /**
     * Creates an instance of PublishingApi.
     * Initializes the categories and tutorials endpoints.
     * @constructor
     */
    constructor() {
        super();
        this.#categoriesEndpoint = new BaseEndpoint(this,  categoriesEndpointPath); 
        this.#tutorialsEndpoint = new BaseEndpoint(this,  tutorialsEndpointPath);
    }

    /**
     * Fetches all categories from the categories endpoint.
     * @returns {*} A promise that resolves to the list of categories.
     */
    getCategories() {
        return this.#categoriesEndpoint.getAll();
    }

    /**
     * Fetches a category by its ID from the categories' endpoint.
     * @param id - The ID of the category to fetch.
     * @returns {*} A promise that resolves to the category data.
     */
    getCategoryById(id) {
        return this.#categoriesEndpoint.getById(id);
    }

    /**
     * Creates a new category by sending a POST request to the categories' endpoint.
     * @param resource - The category data to create.
     * @returns {resource} A promise that resolves to the created category data.
     */
    createCategory(resource) {
        return this.#categoriesEndpoint.create(resource);
    }

    /**
     * Updates an existing category by sending a PUT request to the categories' endpoint.
     * @param resource - The category data to update.
     * @returns {*} A promise that resolves to the updated category data.
     */
    updateCategory(resource) {
        return this.#categoriesEndpoint.update(resource.id, resource);
    }

    /**
     * Deletes a category by its ID by sending a DELETE request to the categories' endpoint.
     * @param id - The ID of the category to delete.
     * @returns {*} A promise that resolves to the deletion result.
     */
    deleteCategory(id) {
        return this.#categoriesEndpoint.delete(id);
    }

    /**
     * Fetches all tutorials from the tutorials endpoint.
     * @returns {*} A promise that resolves to the list of tutorials.
     */
    getTutorials() {
        return this.#tutorialsEndpoint.getAll();
    }

    /**
     * Fetches a tutorial by its ID from the tutorials' endpoint.
     * @param id - The ID of tutorial to fetch.
     * @returns {*} A promise that resolves to the tutorial data.
     */
    getTutorialById(id) {
        return this.#tutorialsEndpoint.getById(id);
    }

    /**
     * Creates a new tutorial by sending a POST request to the tutorials' endpoint.
     * @param resource - The tutorial data to create.
     * @returns {resource} A promise that resolves to the created tutorial data.
     */
    createTutorial(resource) {
        return this.#tutorialsEndpoint.create(resource);
    }

    /**
     * Updates an existing tutorial by sending a PUT request to the tutorials' endpoint.
     * @param resource - The tutorial data to update.
     * @returns {*} A promise that resolves to the updated tutorial data.
     */
    updateTutorial(resource) {
        return this.#tutorialsEndpoint.update(resource.id, resource);
    }

    /**
     * Deletes a tutorial by its ID by sending a DELETE request to the tutorials' endpoint.
     * @param id - The ID of the tutorial to delete.
     * @returns {*} A promise that resolves to the deletion result.
     */
    deleteTutorial(id) {
        return this.#tutorialsEndpoint.delete(id);
    }
}