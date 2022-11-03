<script setup lang="ts">
import { computed } from 'vue';
import { useShows } from '../composables/useShows';
import type { Show } from '@/types';

const { showsByGenres } = useShows();
const props = defineProps(['genre']);

const showsByGenre = computed(() => {
  return showsByGenres.value.find((show: Show) => {
    if (Object.keys(show)[0] === props.genre) {
      return show;
    }
  });
});
</script>

<template>
  <div
    v-for="(shows, index) in showsByGenre"
    :key="index"
    class="flex justify-center bg-gray-100 rounded-xl py-8"
  >
    <div v-for="(show, index) in shows" :key="index">
      <router-link :to="{ name: 'showDetails', params: { id: show.id } }">
        <!-- Only 2 show posters for mobile like devices -->
        <div
          v-if="index < 2"
          class="hidden max-md:block mx-6 transform hover:scale-105"
        >
          <img :src="show.image.medium" :alt="show.name" />
          <div class="text-sm text-white bg-teal-500 p-1">
            <div>{{ show.name }}</div>
            <div class="font-bold">&#9733; {{ show.rating.average }}</div>
          </div>
        </div>
        <!-- Only 4 show posters for tablet like devices -->
        <div
          v-if="index < 3"
          class="hidden md:max-lg:block mx-6 transform hover:scale-105"
        >
          <img :src="show.image.medium" :alt="show.name" />
          <div class="text-sm text-white bg-teal-500 p-1">
            <div>{{ show.name }}</div>
            <div class="font-bold">&#9733; {{ show.rating.average }}</div>
          </div>
        </div>
        <!-- Only 5 show posters for above tablet like devices -->
        <div
          v-if="index < 5"
          class="hidden lg:block mx-6 transform hover:scale-105"
        >
          <img :src="show.image.medium" :alt="show.name" />
          <div class="text-sm text-white bg-teal-500 p-1">
            <div>{{ show.name }}</div>
            <div class="font-bold">&#9733; {{ show.rating.average }}</div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>
