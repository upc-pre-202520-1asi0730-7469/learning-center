/**
 * BaseEndpoint class to handle common API endpoint operations.
 * This class provides methods for CRUD operations.
 * It can be extended by specific endpoint classes.
 * 
 * Example usage:
 * const usersEndpoint = new BaseEndpoint(apiClient, '/users');
 * usersEndpoint.getAll().then(users => console.log(users));
 */
export class BaseEndpoint {
    /**
     * Constructor for BaseEndpoint.
     * @param {BaseApi} baseApi - An instance of the base API client.
     * @param {string} endpointPath - The specific endpoint path (e.g., '/users').
     */
    constructor(baseApi, endpointPath) {
        this.http = baseApi.http;
        this.endpointPath = endpointPath;
    }

    /**
     * Fetch all resources from the endpoint.
     * @returns {Promise<Object>} - A promise resolving to the list of resources.
     */
    getAll() {
        return this.http.get(this.endpointPath);
    }

    /**
     * Fetch a single resource by its ID.
     * @param {Number} id - The ID of the resource to fetch.
     * @returns {Promise<Object>} - A promise resolving to the resource.
     */
    getById(id) {
        return this.http.get(`${this.endpointPath}/${id}`);
    }

    /**
     * Create a new resource.
     * @param {Object} resource - The resource data to create.
     * @returns {Promise<Object>} - A promise resolving to the created resource.
     */
    create(resource) {
        return this.http.post(this.endpointPath, resource);
    }

    /**
     * Update an existing resource by its ID.
     * @param {Number} id - The ID of the resource to update.
     * @param {Object} resource - The updated resource data.
     * @returns {Promise<Object>} - A promise resolving to the updated resource.
     */
    update(id, resource) {
        return this.http.put(`${this.endpointPath}/${id}`, resource);
    }

    /**
     * Delete a resource by its ID.
     * @param {Number} id - The ID of the resource to delete.
     * @returns {Promise<Object>} - A promise resolving to the deletion result.
     */
    delete(id) {
        return this.http.delete(`${this.endpointPath}/${id}`);
    }
}