<script setup lang="ts">
import { ref } from 'vue';

const menuItems = ref([
  'Shows',
  'People',
  'Networks',
  'Web Channels',
  'Articles',
  'Schedule',
  'Calendar',
  'Countdown',
  'Forums',
]);
</script>

<template>
  <nav class="flex items-center flex-wrap bg-teal-500 p-2 mb-6">
    <div class="block lg:hidden">
      <button
        class="flex items-center px-3 py-2 border rounded text-white border-teal-400 hover:text-gray-800 hover:border-white">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <div v-for="menu in menuItems">
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-md lg:flex-grow">
          <a href="/" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-800 mr-4">
            {{ menu }}
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>