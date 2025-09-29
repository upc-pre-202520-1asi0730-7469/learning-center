import axios from "axios";  

const platformApi = import.meta.env.VITE_LEARNING_PLATFORM_API_URL;

/**
 * BaseApi class to handle HTTP requests using Axios.
 * It initializes an Axios instance with a base URL from environment variables.
 * Provides a getter for the Axios instance to be used in derived classes.
 */
export class BaseApi {
    /**
     * @type {import("axios").AxiosInstance}
     */
    #http;

    /**
     * Initializes the Axios instance with the base URL.
     */
    constructor() {
        this.#http = axios.create({ baseURL: platformApi });
    }

    /**
     * Getter for the Axios instance.
     * @returns {AxiosInstance}
     */
    get http() { return this.#http;}
}