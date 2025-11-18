import {BaseApi} from "../../shared/infrastructure/base-api.js";
import {BaseEndpoint} from "../../shared/infrastructure/base-endpoint.js";
const signInEndpointPath = import.meta.env.VITE_SIGNIN_ENDPOINT_PATH;
const signUpEndpointPath = import.meta.env.VITE_SIGNUP_ENDPOINT_PATH;
const usersEndpointPath = import.meta.env.VITE_USERS_ENDPOINT_PATH;
/**
 * IamApi class to interact with IAM-related endpoints.
 * Provides methods for sign-in, sign-up, and user management.
 * @extends BaseApi
 * @example
 * const api = new IamApi();
 * const signInCommand = new SignInCommand({ username: 'user', password: 'pass' });
 * api.signIn(signInCommand).then(response => console.log(response));
 */
export class IamApi extends BaseApi {
    #signInEndpoint;
    #signUpEndpoint;
    #usersEndpoint;
    
    /**
     * Creates an instance of IamApi.
     * Initializes the endpoints for sign-in, sign-up, and users.
     * @constructor
     */
    constructor() {
        super();
        this.#signInEndpoint = new BaseEndpoint(this, signInEndpointPath);
        this.#signUpEndpoint = new BaseEndpoint(this, signUpEndpointPath);
        this.#usersEndpoint = new BaseEndpoint(this, usersEndpointPath);
    }
    
    /**
     * Sends a sign-in request.
     * @param {SignInCommand} signInRequest - The sign-in command.
     * @returns {Promise<Object>} A promise resolving to the sign-in response.
     */
    signIn(signInRequest) {
        return this.#signInEndpoint.create(signInRequest);
    }
    
    /**
     * Sends a sign-up request.
     * @param {SignUpCommand} signUpRequest - The sign-up command.
     * @returns {Promise<Object>} A promise resolving to the sign-up response.
     */
    signUp(signUpRequest) {
        return this.#signUpEndpoint.create(signUpRequest);
    }
    
    /**
     * Fetches all users.
     * @returns {Promise<Object>} A promise resolving to the users' response.
     */
    getUsers() {
        return this.#usersEndpoint.getAll();
    }
}