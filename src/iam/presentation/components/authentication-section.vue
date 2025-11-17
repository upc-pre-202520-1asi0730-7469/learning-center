<script setup>
/**
 * Authentication Section Component
 * Displays sign-in/sign-up buttons or welcome message and sign-out button based on authentication state.
 * Integrates with the IAM store for authentication actions.
 */

import {useRouter} from "vue-router";
import useIamStore from "../../application/iam.store.js";
import {computed} from "vue";

const router = useRouter();
const store = useIamStore();
const { signOut } = store;

let isSignedIn = computed(() => !!store.isSignedIn);
let currentUsername = computed(() => store.currentUsername);

/**
 * Navigates to the sign-in page.
 */
function performSignIn() {
    router.push({ name: 'iam-sign-in' });
}

/**
 * Navigates to the sign-up page.
 */
function performSignUp() {
    router.push({ name: 'iam-sign-up' });
}

/**
 * Signs out the current user.
 */
function performSignOut() {
    signOut(router);
}

</script>

<template>
  <div>
    <div v-if="isSignedIn">
      <span class="p-button-text bg-primary">Welcome, {{ currentUsername }}</span>
      <pv-button class="bg-primary" text @click="performSignOut">Sign-Out</pv-button>
    </div>
    <div v-else>
      <pv-button class="bg-primary" text @click="performSignIn">Sign-In</pv-button>
      <pv-button class="bg-primary" text @click="performSignUp">Sign-Up</pv-button>
    </div>
  </div>
</template>

<style scoped>

</style>