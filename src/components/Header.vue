<script setup lang="ts">
import HeaderLogo from '@/assets/tvm-header-logo.png';
import SearchBar from './SearchBar.vue';
</script>

<template>
	<header class="bg-stone-700 p-4">
		<div class="lg:flex justify-between items-center">
			<!-- App Logo-->
			<div class="mb-4 lg:m-auto lg:basis-1/4">
				<router-link :to="{ name: 'home' }">
					<img :src="HeaderLogo" class="m-auto">
				</router-link>
			</div>
			<!-- App search bar -->
			<div class="mb-4 lg:m-auto lg:basis-1/2 lg:p-4">
				<SearchBar />
			</div>
			<!-- App login & register buttons -->
			<div class="flex justify-between items-center lg:basis-1/4 sm:justify-end">
				<div>
					<button class="bg-teal-700 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded sm:mr-2">
						Login
					</button>
				</div>
				<div>
					<button class="bg-teal-700 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded">
						Register
					</button>
				</div>
			</div>
		</div>
	</header>
</template>	