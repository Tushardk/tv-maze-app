<script setup lang="ts">
import { ALL_GENRES } from '@/constants';
</script>

<template>
  <div
    class="text-md text-center rounded-lg bg-gray-100 text-gray-800 p-2 ml-4"
  >
    More genres...
  </div>
  <div class="flex flex-wrap justify-center p-4">
    <div
      v-for="(genre, index) in ALL_GENRES"
      :key="index"
      class="w-fit rounded-full text-center bg-teal-500 px-2 py-1 m-2 transform hover:scale-105"
    >
      <router-link :to="{ name: 'allShowsByGenre', params: { genre } }">
        <div class="text-white text-md">{{ genre }}</div>
      </router-link>
    </div>
  </div>
</template>
