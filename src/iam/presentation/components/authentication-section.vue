<script setup>

import {useRouter} from "vue-router";
import useIamStore from "../../application/iam.store.js";
import {computed} from "vue";

const router = useRouter();
const store = useIamStore();
const { signOut } = store;

let isSignedIn = computed(() => !!store.isSignedIn);
let currentUsername = computed(() => store.currentUsername);

function performSignIn() {
    router.push({ name: 'iam-sign-in' });
}

function performSignUp() {
    router.push({ name: 'iam-sign-up' });
}

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