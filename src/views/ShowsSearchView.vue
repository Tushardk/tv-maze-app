<script setup lang="ts">
import { ref, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router'
import axios from 'axios';
import GoBackLink from '@/components/GoBackLink.vue';

const searchResult: any = ref({});
const route = useRoute();

onBeforeMount(async () => {
  await axios.get(`https://api.tvmaze.com/search/shows?q=${route.params.searchTerm}`).then(
    async (data) => {
      searchResult.value = data.data;
    });
});


</script>

<template>
  <GoBackLink />

  <div class="w-fit rounded-full text-white text-md text-center bg-teal-500 px-2 py-1 m-2 transform hover:scale-105">
    Results showing for term - <strong>{{ route.params.searchTerm }}</strong>
  </div>

  <div class="flex flex-wrap justify-center bg-gray-100 rounded-xl p-2">
    <div v-for="result in searchResult">
      <router-link :to="{ name: 'showDetails', params: { id: result.show.id } }">
        <div class="m-2">
          <img v-if="result?.show?.image?.medium" :src="result?.show?.image?.medium" :alt="result.show.name" class="m-auto">
          <div v-else class="py-32">Preview not available</div>
          <div class="text-sm text-white bg-teal-500 py-4 px-1">{{ result.show.name }}</div>
        </div>
      </router-link>
    </div>
  </div>
  <div>

  </div>
</template>
