const signInForm = () => import('./views/sign-in-form.vue');
const signUpForm = () => import('./views/sign-up-form.vue');

/**
 * Routes configuration for the IAM module.
 * Defines routes for sign-in and sign-up views.
 * @type {Array<Object>}
 */
const iamRoutes = [
    { path: 'sign-in', name: 'iam-sign-in', component: signInForm, meta: { title: 'Sign-In' } },
    { path: 'sign-up', name: 'iam-sign-up', component: signUpForm, meta: { title: 'Sign-Up' } },
];

export default iamRoutes;
