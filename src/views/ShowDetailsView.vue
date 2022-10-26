<script setup lang="ts">
import { ref, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router';
import axios from 'axios';

const route = useRoute();
const showDetails: any = ref({});
const isLoading: any = ref(false);

onBeforeMount(async () => {
  isLoading.value = true;
  await axios.get(`https://api.tvmaze.com/shows/${route.params.id}`).then(
    async (data) => {
      showDetails.value = data.data;
      isLoading.value = false;
    });
})
</script>

<template>
  <div class="text-xl cursor-pointer underline text-teal-500 hover:text-blue-800 visited:text-purple-600"
    @click="$router.go(-1)">
    Go back
  </div>

  <!-- Loader -->
  <div v-if="isLoading" class="flex justify-center items-center basis-3/4">
    <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
    </div>
    <span> Loading</span>
  </div>
  <div v-else class="mt-4 p-4 rounded-xl p-8 bg-gray-100">
    <div class="text-center text-2xl font-bold">{{ showDetails?.name }}</div>
    <div class="flex flex-row">
      <div class="basis-1/3">
        <!-- <img :src="showDetails?.image?.original" :alt="showDetails.name"> -->
        <img v-if="showDetails?.image?.original" :src="showDetails?.image?.original"
          :alt="showDetails?.name" class="m-auto">
        <div v-else class="py-32">Preview not available</div>
      </div>
      <div class="mx-6 basis-1/2">
        <div v-html="showDetails?.summary" class="italic text-xl mb-6"></div>
        <div class="text-lg">
          <div>Stars: {{ showDetails?.rating.average }} </div>
          <div>Runtime: {{ showDetails?.runtime }} </div>
          <div>Rating : {{ showDetails?.rating?.average }} </div>
          <div>Status : {{ showDetails?.status }} </div>
          <div>Runtime : {{ showDetails?.runtime }} </div>
          <div>Average Runtime : {{ showDetails?.averageRuntime }} </div>
          <div>Premiered : {{ showDetails?.premiered }} </div>
          <div>Ended : {{ showDetails?.ended }} </div>
        </div>
      </div>
    </div>
  </div>
</template>
