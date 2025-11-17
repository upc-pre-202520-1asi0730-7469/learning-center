import axios from "axios";
import {iamInterceptor} from "../../iam/infrastructure/iam-interceptor.js";  

const platformApi = import.meta.env.VITE_LEARNING_PLATFORM_API_URL;

/**
 * BaseApi class to handle HTTP requests using Axios.
 * Initializes an Axios instance with a base URL and default headers.
 * Provides a getter for the Axios instance and applies request interceptors.
 * @class
 */
export class BaseApi {
    /**
     * @type {import("axios").AxiosInstance}
     * @private
     */
    #http;

    /**
     * Initializes the Axios instance with the base URL and headers.
     * Adds request interceptors for authentication.
     * @constructor
     */
    constructor() {
        this.#http = axios.create({ baseURL: platformApi,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }});
        // Add interceptor for Authorization header setting
        this.#http.interceptors.request.use(iamInterceptor);
    }

    /**
     * Getter for the Axios instance.
     * @returns {import("axios").AxiosInstance} The configured Axios instance.
     */
    get http() { return this.#http;}
}