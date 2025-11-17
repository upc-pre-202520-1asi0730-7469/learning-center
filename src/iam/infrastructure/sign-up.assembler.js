import {SignUpResource} from "./sign-up.resource.js";

/**
 * Assembler for SignUp resources.
 * Converts raw API responses into SignUpResource objects.
 * @class
 * 
 * @example
 * const response = { status: 200, data: { message: 'User created' } };
 * const resource = SignUpAssembler.toResourceFromResponse(response);
 */
export class SignUpAssembler {
    /**
     * Converts an API response into a SignUpResource.
     * @param {Object} response - The API response object.
     * @param {Number} response.status - The HTTP status code.
     * @param {Object} response.data - The response data.
     * @returns {SignUpResource|null} The SignUpResource or null if invalid.
     */
    static toResourceFromResponse(response) {
        console.log(response);
        if (response.status !== 200) {
            console.error(`${response.status}, ${response.statusText}`);
            return null;
        }
        return new SignUpResource({...response.data});
    }
}