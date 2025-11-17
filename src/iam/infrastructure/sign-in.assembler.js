import {SignInResource} from "./sign-in.resource.js";

/**
 * Assembler for SignIn resources.
 * Converts raw API responses into SignInResource objects.
 * @class
 * 
 * @example
 * const response = { status: 200, data: { id: 1, username: 'user', token: 'abc' } };
 * const resource = SignInAssembler.toResourceFromResponse(response);
 */
export class SignInAssembler {
    /**
     * Converts an API response into a SignInResource.
     * @param {Object} response - The API response object.
     * @param {Number} response.status - The HTTP status code.
     * @param {Object} response.data - The response data.
     * @returns {SignInResource|null} The SignInResource or null if invalid.
     */
    static toResourceFromResponse(response) {
        console.log(response);
        if (response.status !== 200) {
            console.error(`${response.status}, ${response.statusText}`);
            return null;
        }
        return new SignInResource({...response.data});
    }
}