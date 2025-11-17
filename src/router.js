/**
 * Vue Router configuration.
 * Defines routes for the application and sets up navigation guards.
 */

import Home from "./shared/presentation/views/home.vue";
import {createRouter, createWebHistory} from "vue-router";
import publishingRoutes from "./publishing/presentation/publishing-routes.js";
import iamRoutes  from "./iam/presentation/iam-routes.js";

const about = () => import('./shared/presentation/views/about.vue');
const pageNotFound = () => import('./shared/presentation/views/page-not-found.vue');

const routes = [
    { path: '/home',            name: 'home',       component: Home,            meta: { title: 'Home' } },
    { path: '/about',           name: 'about',      component: about,           meta: { title: 'About' } },
    { path: '/publishing',      name: 'publishing', children: publishingRoutes },
    { path: '/iam',             name: 'iam',        children: iamRoutes },
    { path: '/',                redirect: '/home'},
    { path: '/:pathMatch(.*)*', name: 'not-found',  component: pageNotFound,    meta: { title: 'Page Not Found' } },
];

const router = createRouter({
    history:    createWebHistory(import.meta.env.BASE_URL),
    routes:     routes,
});

router.beforeEach((to, from, next) => {
    /**
     * Navigation guard to set the document title based on the route meta.
     * @param {Object} to - The target route object.
     * @param {Object} from - The current route object.
     * @param {Function} next - Function to proceed to the next route.
     */
    console.log(`Navigating from ${from.name} to ${to.name}`);
    let baseTitle = 'ACME Learning Center';
    document.title = to.meta['title'] ? `${to.meta['title']} - ${baseTitle}` : baseTitle;
    next();
});

export default router;
