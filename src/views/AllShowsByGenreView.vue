<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router';
import { useShows } from "../composables/useShows"

const route = useRoute();
const { showsByGenres } = useShows();

const showsByGenre = computed(() => {
  return showsByGenres.value.find((show: any) => {
    if (Object.keys(show)[0] === route.params.genre) {
      return show;
    }
  });
});

</script>

<template>
  <div class="text-xl cursor-pointer underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
    @click="$router.go(-1)">
    Go back
  </div>
  <div class="text-2xl">{{ route.params.genre }}</div>
  <div v-for="shows in showsByGenre" class="flex flex-wrap justify-center bg-gray-100 rounded-xl p-2">
    <div v-for="(show ) in shows">
      <router-link :to="{ name: 'showDetails', params: { id: show.id }}">
        <div class="m-2">
          <img :src="show.image.medium" :alt="show.name">
          <div class="text-sm text-white text-center bg-teal-500 py-4 px-1">{{ show.name }}</div>
        </div>
      </router-link>
    </div>
  </div>
</template>
