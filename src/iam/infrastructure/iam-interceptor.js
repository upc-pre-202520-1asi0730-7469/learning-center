import useIamStore from "../application/iam.store.js";

export const iamInterceptor = (config) => {
    const store = useIamStore();
    const { isSignedIn, currentToken } = store;
    
    if (isSignedIn) {
        config.headers.Authorization = `Bearer ${currentToken}`;
        console.log(config);
    }
    return config;
}