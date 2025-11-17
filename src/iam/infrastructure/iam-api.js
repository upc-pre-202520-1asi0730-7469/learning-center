import {BaseApi} from "../../shared/infrastructure/base-api.js";
import {BaseEndpoint} from "../../shared/infrastructure/base-endpoint.js";
const signInEndpointPath = import.meta.env.VITE_SIGNIN_ENDPOINT_PATH;
const signUpEndpointPath = import.meta.env.VITE_SIGNUP_ENDPOINT_PATH;
const usersEndpointPath = import.meta.env.VITE_USERS_ENDPOINT_PATH;
export class IamApi extends BaseApi {
    #signInEndpoint;
    #signUpEndpoint;
    #usersEndpoint;
    
    constructor() {
        super();
        this.#signInEndpoint = new BaseEndpoint(this, signInEndpointPath);
        this.#signUpEndpoint = new BaseEndpoint(this, signUpEndpointPath);
        this.#usersEndpoint = new BaseEndpoint(this, usersEndpointPath);
    }
    
    signIn(signInRequest) {
        return this.#signInEndpoint.create(signInRequest);
    }
    
    signUp(signUpRequest) {
        return this.#signUpEndpoint.create(signUpRequest);
    }
    
    getUsers() {
        return this.#usersEndpoint.getAll();
    }
}