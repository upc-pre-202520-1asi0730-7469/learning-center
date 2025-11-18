<script setup>
/**
 * Sign-In Form Component
 * Provides a form for user sign-in with username and password fields.
 * Handles form submission and integrates with the IAM store.
 */

import {useRouter} from "vue-router";
import useIamStore from "../../application/iam.store.js";
import {reactive} from "vue";
import {SignInCommand} from "../../domain/sign-in.command.js";

const router = useRouter();
const store = useIamStore();
const {signIn} = store;
/**
 * Reactive form data for sign-in.
 * @type {Reactive<{username: string, password: string}>}
 */
const form = reactive({
  username: "",
  password: ""
});

/**
 * Performs the sign-in action by creating a SignInCommand and calling the store's signIn method.
 */
function performSignIn() {
  let signInCommand = new SignInCommand(form);
  signIn(signInCommand, router);
}

</script>

<template>
  <div><h3>Sign-In</h3></div>
  <p class="p-fluid mb-5">Please enter the required information to sign-in.</p>
  <div>
    <form @submit.prevent="performSignIn">
      <div class="p-fluid">
        <div class="field mt-5">
          <pv-float-label>
            <label for="username">Username</label>
            <pv-input-text id="username" v-model="form.username" :class="{'p-invalid': !form.username}"/>
            <small v-if="!form.username" class="p-invalid">Username is required.</small>
          </pv-float-label>
        </div>
        <div class="field mt-5">
          <pv-float-label>
            <label for="password">Password</label>
            <pv-input-text id="password" v-model="form.password" :class="{'p-invalid': !form.password}"
                           type="password"/>
            <small v-if="!form.password" class="p-invalid">Password is required.</small>
          </pv-float-label>
        </div>
      </div>
      <div class="p-field mt-5">
        <pv-button type="submit">Sign-In</pv-button>
      </div>
    </form>
  </div>
</template>

<style scoped>

</style>