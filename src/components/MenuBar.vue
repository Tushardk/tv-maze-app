<script setup lang="ts">
import { ref, onMounted } from 'vue';

const menuItems = ref([
  'Shows',
  'People',
  'Networks',
  'Web Channels',
  'Schedule',
  'Calendar',
  'Countdown',
]);

onMounted(() => {
  const btn = document.querySelector("button.mobile-menu-button");
  const menu = document.querySelector(".mobile-menu");

  btn?.addEventListener("click", () => {
    menu?.classList.toggle("hidden");
  });
});

</script>

<template>

  <!-- Navbar goes here -->
  <nav class="bg-white shadow-md">
    <div class="relative p-4">
      <div class="flex">
        <div class="flex space-x-7">
          <div class="hidden md:flex items-center space-x-1">
            <div v-for="menu in menuItems">
              <router-link :to="{ name: 'home' }">
                <div class="py-2 px-2 text-gray-500 font-semibold hover:text-teal-500 transition duration-300">
                  {{ menu }}
                </div>
              </router-link>
            </div>
          </div>
        </div>
        <!-- Mobile menu button -->
        <div class="md:hidden flex items-center">
          <button class="outline-none mobile-menu-button">
            <svg class=" w-6 h-6 text-gray-500 hover:text-teal-500 " x-show="!showMenu" fill="none"
              stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <!-- Mobile menu -->
    <div class="hidden absolute w-full mobile-menu z-40 bg-white">
      <ul>
        <li v-for="menu in menuItems" class="block text-sm px-2 py-1 hover:bg-teal-500 transition duration-300">
          <router-link :to="{ name: 'home' }">
            <div class="py-2 px-2 text-gray-500 font-semibold hover:text-white transition duration-300">
              {{ menu }}
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>