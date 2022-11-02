<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import searchIcon from '@/assets/searchIcon.svg';
const router = useRouter();
const searchTerm = ref('');

const searchQuery = () => {
  if (searchTerm.value && searchTerm.value.length > 0) {
    router.push({ name: 'showsSearch', params: { searchTerm: searchTerm.value } });
  }
}

</script>

<template>
  <form class="flex items-center">
    <div class="relative w-full">
      <input type="text" v-model="searchTerm"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
        placeholder="Search" @keydown.enter.prevent="searchQuery">
    </div>
    <button type="submit"
      class="p-2.5 ml-2 text-sm font-medium text-white bg-teal-700 rounded-lg border border-teal-500 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800 hidden sm:block"
      @click.prevent="searchQuery">
      <img :src="searchIcon" class="w-4 h-4" />
    </button>
  </form>
</template>