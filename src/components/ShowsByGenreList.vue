<script setup lang="ts">
import { computed } from 'vue'
import { useShows } from "../composables/useShows"

const { showsByGenres } = useShows();
const props = defineProps(['genre']);

const showsByGenre = computed(() => {
  return showsByGenres.value.find((show: any) => {
    if (Object.keys(show)[0] === props.genre) {
      return show;
    }
  });
})

</script>

<template>
  <div v-for="shows in showsByGenre" class="flex justify-center bg-gray-100 rounded-xl py-8">
    <div v-for="(show, index ) in shows">
      <router-link :to="{ name: 'showDetails', params: { id: show.id }}">
        <div v-if="index < 5" class="mx-6 transform hover:scale-105">
          <img :src="show.image.medium" :alt="show.name">
          <div class="text-sm text-white bg-teal-500 p-1">
            <div>{{ show.name }}</div>
            <div class="font-bold">&#9733; {{ show.rating.average }}</div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>
