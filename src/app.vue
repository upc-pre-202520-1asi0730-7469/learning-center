<script setup>
/**
 * App Component
 * The root component of the Vue application.
 * Renders the main layout and sets up internationalization.
 */

import Layout from "./shared/presentation/components/layout.vue";
import {useI18n} from "vue-i18n";
const { t } = useI18n();
</script>

<template>
  <layout/>
</template>

<style scoped>

</style>
