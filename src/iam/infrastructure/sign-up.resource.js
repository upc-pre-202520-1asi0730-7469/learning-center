/**
 * SignUpResource
 * Represents the resource returned from a sign-up API response.
 * @class
 * @property {string} message - The response message.
 * 
 * @example
 * const resource = new SignUpResource({ message: 'User created successfully' });
 * console.log(resource.message); // 'User created successfully'
 */
export class SignUpResource {
    /**
     * Creates an instance of SignUpResource.
     * @param {Object} params - The parameters for the resource.
     * @param {string} params.message - The response message.
     */
    constructor({ message}) {
        this.message = message;
    }
}