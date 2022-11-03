<script setup lang="ts">
import ShowsByGenreList from '../components/ShowsByGenreList.vue';
import MoreGenresCard from '../components/MoreGenresCard.vue';
import { useShows } from '../composables/useShows';

const { showsByGenres, allShowsLoading } = useShows();

const getGenre = (showGenre: any) => {
  return Object.keys(showGenre)[0];
};
</script>

<template>
  <main class="mb-24 px-4">
    <div class="md:flex mt-8">
      <!-- Loader -->
      <div
        v-if="allShowsLoading"
        class="flex justify-center items-center basis-3/4"
      >
        <div
          class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
          role="status"
        ></div>
      </div>
      <!-- List of shows cards -->
      <div v-else class="basis-3/4">
        <div v-for="(showGenre, index) in showsByGenres" :key="index">
          <div v-if="index < 6">
            <router-link
              :to="{
                name: 'allShowsByGenre',
                params: { genre: getGenre(showGenre) },
              }"
            >
              <div
                class="text-md w-fit text-white rounded-full bg-teal-500 px-4 mb-2"
              >
                {{ getGenre(showGenre) }}
              </div>
            </router-link>
            <ShowsByGenreList :genre="getGenre(showGenre)" />
            <router-link
              :to="{
                name: 'allShowsByGenre',
                params: { genre: getGenre(showGenre) },
              }"
            >
              <div class="text-right text-lg text-teal-500 hover:text-teal-800">
                {{ `See more in ${getGenre(showGenre)}...` }}
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <!-- More genres card -->
      <div class="mt-8 basis-1/4">
        <MoreGenresCard />
      </div>
    </div>
  </main>
</template>
