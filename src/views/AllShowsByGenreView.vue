<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router';
import { useShows } from "../composables/useShows"
import GoBackLink from '@/components/GoBackLink.vue';

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
  <GoBackLink />

  <div class="w-fit rounded-full text-white text-md text-center bg-teal-500 px-2 py-1 m-2 transform hover:scale-105">
    {{ route.params.genre }}
  </div>

  <div v-for="shows in showsByGenre" class="flex flex-wrap justify-center bg-gray-100 rounded-xl p-2">
    <div v-for="(show ) in shows">
      <router-link :to="{ name: 'showDetails', params: { id: show.id } }">
        <div class="m-2">
          <img v-if="show?.image?.medium" :src="show?.image?.medium" :alt="show?.name" class="m-auto">
          <div v-else class="py-32">Preview not available</div>
          <div class="text-sm text-white text-center bg-teal-500 py-4 px-1">{{ show.name }}</div>
        </div>
      </router-link>
    </div>
  </div>
</template>
