<script setup>
/**
 * Language Switcher Component
 * Provides a button group to switch between available locales.
 * Integrates with Vue I18n for language selection.
 */

  import {useI18n} from "vue-i18n";

  const { t, locale, availableLocales } = useI18n();
</script>

<template>
  <pv-select-button  v-model="locale" :options="availableLocales"/>
</template>

<style scoped>

</style>