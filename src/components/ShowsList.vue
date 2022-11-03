<script setup lang="ts">
const props = defineProps(['shows']);
</script>

<template>
  <div v-for="(show, index) in shows" :key="index">
    <router-link :to="{ name: 'showDetails', params: { id: show?.id } }">
      <div class="m-2">
        <img
          v-if="show?.image?.medium"
          :src="show?.image?.medium"
          :alt="show?.name"
          class="m-auto"
        />
        <div v-else class="py-32">Preview not available</div>
        <div class="text-sm text-white bg-teal-500 py-4 px-1">
          <div>{{ show.name }}</div>
          <div class="font-bold">&#9733; {{ show.rating.average }}</div>
        </div>
      </div>
    </router-link>
  </div>
</template>
