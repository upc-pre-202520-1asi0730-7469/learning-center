<script setup>
/**
 * Tutorial List Component
 * Displays a list of tutorials with options to view, edit, and delete.
 * Integrates with the publishing store to fetch and manage tutorials.
 */

import {useI18n} from "vue-i18n";
import {useRouter} from "vue-router";
import {useConfirm} from "primevue";
import usePublishingStore from "../../application/publishing.store.js";
import {onMounted} from "vue";

const { t } = useI18n();
const router = useRouter();
const confirm = useConfirm();
const store = usePublishingStore();
const { tutorials, tutorialsLoaded, errors, fetchTutorials, deleteTutorial, fetchCategories, setCategoriesForTutorials } = store;

onMounted(() => {
  if (!tutorialsLoaded) fetchTutorials();
  console.log(tutorials);
});

/**
 * Navigates to the new tutorial page.
 */
const navigateToNew = () => {
  router.push({ name: 'publishing-tutorial-new' });
};

/**
 * Navigates to the edit page for a tutorial.
 * @param {Number} id - The ID of the tutorial to edit.
 */
const navigateToEdit = (id) => {
  console.log(id);
  router.push({ name: 'publishing-tutorial-edit', params: { id } });
};

/**
 * Shows a confirmation dialog to delete a tutorial.
 * @param {Tutorial} tutorial - The tutorial to delete.
 */
const confirmDelete = (tutorial) => {
  confirm.require({
    message: t('tutorials.confirm-delete', { title: tutorial.title }),
    header: t('tutorials.delete-header'),
    icon: 'pi pi-exclamation-triangle',
    accept: () => { deleteTutorial(tutorial); },
  });
};
</script>

<template>
  <div class="p-4">
    <h1>{{ t('tutorials.title') }}</h1>
    <pv-button :label="t('tutorials.new')" icon="pi pi-plus" class="mb-3" @click="navigateToNew" />
    <pv-data-table
        :value="tutorials"
        :loading="!tutorialsLoaded"
        striped-rows
        table-style="min-width: 50rem"
        paginator
        :rows="5"
        :rows-per-page-options="[5, 10, 20]">
      <pv-column field="id" :header="t('tutorials.id')" sortable />
      <pv-column field="title" :header="t('tutorials.title')" sortable />
      <pv-column field="summary" :header="t('tutorials.summary')" />
      <pv-column field="categoryId" :header="t('tutorials.category-id')" />
      <pv-column :header="t('tutorials.actions')">
        <template #body="slotProps">
          <pv-button icon="pi pi-pencil" text rounded @click="navigateToEdit(slotProps.data.id)" />
          <pv-button icon="pi pi-trash" text rounded severity="danger" @click="confirmDelete(slotProps.data)" />
        </template>
      </pv-column>
    </pv-data-table>
    <div v-if="errors.length" class="text-red-500 mt-3">
      {{ t('errors.occurred') }}: {{ errors.map(e => e.message).join(', ') }}
    </div>
    <pv-confirm-dialog />
  </div>
</template>

<style scoped>

</style>