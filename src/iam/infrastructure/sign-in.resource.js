/**
 * SignInResource
 * Represents the resource returned from a sign-in API response.
 * @class
 * @property {Number} id - The user ID.
 * @property {string} username - The username.
 * @property {string} token - The authentication token.
 * 
 * @example
 * const resource = new SignInResource({ id: 1, username: 'user', token: 'abc' });
 * console.log(resource.token); // 'abc'
 */
export class SignInResource {
    /**
     * Creates an instance of SignInResource.
     * @param {Object} params - The parameters for the resource.
     * @param {Number} params.id - The user ID.
     * @param {string} params.username - The username.
     * @param {string} params.token - The authentication token.
     */
    constructor({ id, username, token}) {
        this.id = id;
        this.username = username;
        this.token = token;
    }
}