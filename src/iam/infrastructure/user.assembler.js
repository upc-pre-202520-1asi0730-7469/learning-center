import {User} from "../domain/user.entity.js";

/**
 * Assembler for User entities.
 * Converts raw API responses into User domain entities.
 * @class
 * 
 * @example
 * const resource = { id: 1, username: 'user' };
 * const user = UserAssembler.toEntityFromResource(resource);
 */
export class UserAssembler {
    /**
     * Converts a resource object into a User entity.
     * @param {Object} resource - The resource object.
     * @param {Number} resource.id - The user ID.
     * @param {string} resource.username - The username.
     * @returns {User} The User entity.
     */
    static toEntityFromResource(resource) {
        return new User({...resource});
    }
    
    /**
     * Converts an API response into an array of User entities.
     * @param {Object} response - The API response object.
     * @param {Number} response.status - The HTTP status code.
     * @param {Object|Array} response.data - The response data.
     * @returns {User[]} Array of User entities.
     */
    static toEntitiesFromResponse(response) {
        if (response.status !== 200) {
            console.error(`${response.status}, ${response.statusText}`);
            return [];
        }
        let resources = response.data instanceof Array ? response.data : response.data["users"];
        return resources.map(resource => this.toEntityFromResource(resource));
    }
}