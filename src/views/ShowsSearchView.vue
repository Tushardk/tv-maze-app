<script setup lang="ts">
import { ref, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router'
import axios from 'axios';

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
  <div class="text-xl cursor-pointer underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
    @click="$router.go(-1)">
    Go back
  </div>

  <div class="flex flex-wrap justify-center items-center text-center">
    <div v-for="result in searchResult" class="w-1/6 m-10">
      <router-link :to="{ name: 'showDetails', params: { id: result.show.id } }">
        <img v-if="result?.show?.image?.medium" :src="result?.show?.image?.medium" :alt="result.show.name"
          class="m-auto">
        <div v-else class="py-32">Preview not available</div>
        <div class="text-sm text-white bg-teal-500 py-4 px-1">{{ result.show.name }}</div>
      </router-link>
    </div>
  </div>
  <div>

  </div>
</template>
