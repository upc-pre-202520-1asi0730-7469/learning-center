import {IamApi} from "../infrastructure/iam-api.js";
import {defineStore} from "pinia";
import {ConfirmDialogStyle} from "primevue";
import {computed, ref} from "vue";
import {SignInAssembler} from "../infrastructure/sign-in.assembler.js";
import {UserAssembler} from "../infrastructure/user.assembler.js";
import {SignUpAssembler} from "../infrastructure/sign-up.assembler.js";

const iamApi = new IamApi();

const useIamStore = defineStore('iam', () => {
    const users = ref([]);
    const errors = ref([]);
    const usersLoaded = ref(false);
    const isSignedIn = ref(false);
    const currentUsername = ref(null);
    const currentUserId = ref(0);
    const currentToken = computed(() => isSignedIn.value 
        ? localStorage.getItem('token') 
        : null);
    
    function signIn(signInCommand, router) {
        iamApi.signIn(signInCommand)
            .then(response => {
                let signInResource = SignInAssembler.toResourceFromResponse(response);
                if (signInResource) {
                    let currentUser = UserAssembler.toEntityFromResource(signInResource);
                    currentUsername.value = currentUser.username;
                    currentUserId.value = currentUser.id;
                    isSignedIn.value = true;
                    localStorage.setItem('token', signInResource.token);
                    router.push({ name: 'home' });
                    errors.value = [];
                } else {
                    isSignedIn.value = false;
                    errors.value.push(new Error('Sign-in failed: Invalid response from server.'));
                    router.push({ name: 'iam-sign-in' });
                }
            }).catch(error => {
                isSignedIn.value = false;
                currentUsername.value = null;
                currentUserId.value = 0;
                errors.value.push(error);
                router.push({ name: 'iam-sign-in' });
            });
    }
    
    function signUp(signUpCommand, router) {
        iamApi.signUp(signUpCommand)
            .then(response => {
                let signUpResource = SignUpAssembler.toResourceFromResponse(response);
                if (signUpResource) {
                    console.log(signUpResource);
                    errors.value = [];
                    router.push({ name: 'iam-sign-in' });
                } else {
                    errors.value.push(new Error('Sign-up failed: Invalid response from server.'));
                    router.push({ name: 'iam-sign-up' });
                }
            }).catch(error => {
                errors.value.push(error);
                router.push({ name: 'iam-sign-up' });
            });
    }
    
    function signOut(router) {
        isSignedIn.value = false;
        currentUsername.value = null;
        currentUserId.value = 0;
        errors.value = [];
        localStorage.removeItem('token');
        router.push({ name: 'iam-sign-in' });
    }
    
    function fetchUsers() {
        iamApi.getUsers().then(response => {
            users.value = UserAssembler.toEntitiesFromResponse(response);
            usersLoaded.value = true;
            errors.value = [];
        }).catch(error => {
            errors.value.push(error);
        });
    }
    
    return {
        users,
        errors,
        usersLoaded,
        isSignedIn,
        currentUsername,
        currentUserId,
        currentToken,
        signIn,
        signUp,
        signOut,
        fetchUsers
    };
}); 