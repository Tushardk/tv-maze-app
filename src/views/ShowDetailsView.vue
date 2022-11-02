<script setup lang="ts">
import { ref, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router';
import axios from 'axios';
import GoBackLink from '@/components/GoBackLink.vue';
import ShowInformation from '@/components/ShowInformation.vue';

const route = useRoute();
const showDetails: any = ref({});
const isLoading: any = ref(true);

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
  <GoBackLink />

  <!-- Loader -->
  <div v-if="isLoading" class="flex justify-center items-center basis-3/4">
    <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
    </div>
    <span> Loading</span>
  </div>

  <div v-else class="m-2 rounded-xl px-4 py-6 bg-gray-100">
    <div class="text-center text-2xl font-bold mb-3">{{ showDetails?.name }}</div>
    <div class="sm:flex sm:flex-row">
      <div class="max-md:mx-16 lg:mx-32 mb-2 sm:basis-2/5">
        <img v-if="showDetails?.image?.original" :src="showDetails?.image?.original" :alt="showDetails?.name"
          class="m-auto">
        <div v-else class="py-32 text-center">Preview not available</div>
      </div>
      <div class="mx-2 sm:ml-4 sm:basis-3/5">
        <ShowInformation :showDetails="showDetails" />
      </div>
    </div>
  </div>
</template>
