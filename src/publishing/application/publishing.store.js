import {PublishingApi} from "../infrastructure/publishing-api.js";
import {defineStore} from "pinia";
import {computed, ref} from "vue";
import {CategoryAssembler} from "../infrastructure/category.assembler.js";
import {TutorialAssembler} from "../infrastructure/tutorial.assembler.js";

const publishingApi = new PublishingApi();

/**
 * Pinia store for managing publishing state, including categories and tutorials.
 * Provides state, getters, and actions for fetching, adding, updating, and deleting categories and tutorials.
 * 
 * @store
 * @example
 * import { usePublishingStore } from '@/publishing/application/publishing.store.js';
 * const publishingStore = usePublishingStore();
 * publishingStore.fetchCategories();
 * console.log(publishingStore.categories);
 */
const usePublishingStore = defineStore('publishing', () => {
    // State
    const categories = ref([]);
    const tutorials = ref([]);
    const errors = ref([]);
    const categoriesLoaded = ref(false);
    const tutorialsLoaded = ref(false);
    
    // Properties
    /**
     * Computed property that returns the count of loaded categories.
     * @type {ComputedRef<number>}
     */
    const categoriesCount = computed(() => { 
    return categoriesLoaded ? categories.value.length : 0; });
    
    /**
     * Computed property that returns the count of loaded tutorials.
     * @type {ComputedRef<number>}
     */
    const tutorialsCount = computed(() => { 
    return tutorialsLoaded ? tutorials.value.length : 0; });
    
    // Actions
    /**
     * Fetches categories from the API and updates the store state.
     */
    function fetchCategories() {
        publishingApi.getCategories().then(response => {
            categories.value = CategoryAssembler.toEntitiesFromResponse(response);
            categoriesLoaded.value = true;
            console.log(categoriesLoaded.value);
            console.log(categories.value);
        }).catch(error => {
            errors.value.push(error);
        });
    }
    
    /**
     * Fetches tutorials from the API and updates the store state.
     */
    function fetchTutorials() {
        publishingApi.getTutorials().then(response => {
            tutorials.value = TutorialAssembler.toEntitiesFromResponse(response);
            tutorialsLoaded.value = true;
            console.log(tutorialsLoaded.value);
            console.log(tutorials.value);
        }).catch(error => {
            errors.value.push(error);
        });
    }

    /**
     * Finds a category by ID in the local state.
     * @param {Number|string} id - The ID of the category.
     * @returns {Category|null} The category or null if not found.
     */
    function getCategoryById(id) {
        let idNum = parseInt(id);
        return categories.value.find(category => category["id"] === idNum);
    }

    /**
     * Adds a new category by sending it to the API and updating the store.
     * @param {Category} category - The category to add.
     */
    function addCategory(category) {
        publishingApi.createCategory(category).then(response => {
            const resource = response.data;
            const newCategory = CategoryAssembler.toEntityFromResource(resource);
            categories.value.push(newCategory);
        }).catch(error => {
            errors.value.push(error);
        });
    }
    
    /**
     * Updates an existing category by sending it to the API and updating the store.
     * @param {Category} category - The category to update.
     */
    function updateCategory(category) {
        publishingApi.updateCategory(category).then(response => {
            const resource = response.data;
            const updatedCategory = CategoryAssembler.toEntityFromResource(resource);
            const index = categories.value.findIndex(c => c["id"] === updatedCategory.id);
            if (index !== -1) categories.value[index] = updatedCategory;
        }).catch(error => {
            errors.value.push(error);
        });
    }
    
    /**
     * Deletes a category by ID from the API and updates the store.
     * @param {Number} categoryId - The ID of the category to delete.
     */
    function deleteCategory(categoryId) {
        publishingApi.deleteCategory(categoryId).then(() => {
            const index = categories.value.findIndex(c => c["id"] === categoryId);
            if (index !== -1) categories.value.splice(index, 1);
        }).catch(error => {
            errors.value.push(error);
        });
    }

    /**
     * Finds a tutorial by ID in the local state.
     * @param {Number|string} id - The ID of the tutorial.
     * @returns {Tutorial|null} The tutorial or null if not found.
     */
    function getTutorialById(id) {
        let idNum = parseInt(id);
        return tutorials.value.find(tutorial => tutorial["id"] === idNum);
    }

    /**
     * Adds a new tutorial by sending it to the API and updating the store.
     * @param {Tutorial} tutorial - The tutorial to add.
     */
    function addTutorial(tutorial) {
        publishingApi.createTutorial(tutorial).then(response => {
            const resource = response.data;
            const newTutorial = TutorialAssembler.toEntityFromResource(resource);
            tutorials.value.push(newTutorial);
        }).catch(error => {
            errors.value.push(error);
        });
    }
    
    /**
     * Updates an existing tutorial by sending it to the API and updating the store.
     * @param {Tutorial} tutorial - The tutorial to update.
     */
    function updateTutorial(tutorial) {
        publishingApi.updateTutorial(tutorial).then(response => {
            const resource = response.data;
            const updatedTutorial = TutorialAssembler.toEntityFromResource(resource);
            const index = tutorials.value.findIndex(t => t["id"] === updatedTutorial.id);
            if (index !== -1) tutorials.value[index] = updatedTutorial;
        }).catch(error => {
            errors.value.push(error);
        });
    }
    
    /**
     * Deletes a tutorial by ID from the API and updates the store.
     * @param {Number} tutorialId - The ID of the tutorial to delete.
     */
    function deleteTutorial(tutorialId) {
        publishingApi.deleteTutorial(tutorialId).then(() => {
            const index = tutorials.value.findIndex(t => t["id"] === tutorialId);
            if (index !== -1) tutorials.value.splice(index, 1);
        }).catch(error => {
            errors.value.push(error);
        });
    }

    
    return {
        // State
        categories,
        tutorials,
        errors,
        categoriesLoaded,
        tutorialsLoaded,
        // Properties
        categoriesCount,
        tutorialsCount,
        // Actions
        fetchCategories,
        fetchTutorials,
        addCategory,
        updateCategory,
        deleteCategory,
        getCategoryById,
        addTutorial,
        updateTutorial,
        deleteTutorial,
        getTutorialById
    };
});

export default usePublishingStore;