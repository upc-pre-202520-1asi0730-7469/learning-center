import useIamStore from "../application/iam.store.js";

/**
 * IAM Interceptor for Axios requests.
 * Adds Authorization header with Bearer token if the user is signed in.
 * @param {Object} config - The Axios request configuration.
 * @returns {Object} The modified config with Authorization header if applicable.
 */
export const iamInterceptor = (config) => {
    const store = useIamStore();
    const { isSignedIn, currentToken } = store;
    
    if (isSignedIn) {
        config.headers.Authorization = `Bearer ${currentToken}`;
        console.log(config);
    }
    return config;
}