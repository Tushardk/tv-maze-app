<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import axios, { AxiosError } from 'axios';
import GoBackLink from '@/components/GoBackLink.vue';

const searchResult: any = ref({});
const route = useRoute();

watch(
  route,
  async () => {
    await axios
      .get(`https://api.tvmaze.com/search/shows?q=${route.params.searchTerm}`)
      .then(async (response) => {
        searchResult.value = response.data;
      })
      .catch((error: AxiosError) => {
        console.log(`Request failed with reason - ${error?.response?.status}`);
      });
  },
  {
    deep: true,
    immediate: true,
  }
);
</script>

<template>
  <GoBackLink />

  <div
    class="w-fit rounded-full text-white text-md text-center bg-teal-500 px-2 py-1 m-2 transform hover:scale-105"
  >
    Results showing for term - <strong>{{ route.params.searchTerm }}</strong>
  </div>

  <div class="flex flex-wrap justify-center bg-gray-100 rounded-xl p-2">
    <div v-for="(result, index) in searchResult" :key="index">
      <router-link
        :to="{ name: 'showDetails', params: { id: result.show.id } }"
      >
        <div class="m-2">
          <img
            v-if="result?.show?.image?.medium"
            :src="result?.show?.image?.medium"
            :alt="result.show.name"
            class="m-auto"
          />
          <div v-else class="py-32">Preview not available</div>
          <div class="text-sm text-white bg-teal-500 py-4 px-1">
            <div>{{ result.show.name }}</div>
            <div v-if="result?.show?.rating?.average" class="font-bold">
              &#9733; {{ result?.show?.rating?.average }}
            </div>
            <div v-else>&#9733; - Not available</div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
  <div></div>
</template>
