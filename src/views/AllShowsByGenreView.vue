<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useShows } from '../composables/useShows';
import ShowsList from '@/components/ShowsList.vue';
import GoBackLink from '@/components/GoBackLink.vue';
import type { Show } from '@/types';

const route = useRoute();
const { showsByGenres } = useShows();

const showsByGenre = computed(() => {
  return showsByGenres.value.find((show: Show) => {
    if (Object.keys(show)[0] === route.params.genre) {
      return show;
    }
  });
});
</script>

<template>
  <GoBackLink />

  <div
    class="w-fit rounded-full text-white text-md text-center bg-teal-500 px-2 py-1 m-2 transform hover:scale-105"
  >
    {{ route.params.genre }}
  </div>

  <div
    v-for="(shows, index) in showsByGenre"
    :key="index"
    class="flex flex-wrap justify-center bg-gray-100 rounded-xl p-2"
  >
    <ShowsList :shows="shows"></ShowsList>
  </div>
</template>
