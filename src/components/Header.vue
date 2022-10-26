<script setup lang="ts">
import HeaderLogo from '@/assets/tvm-header-logo.png';
import SearchBar from './SearchBar.vue';
</script>

<template>
	<header class="bg-stone-700 py-4 px-16">
		<div class="flex justify-between items-center">
			<div>
				<router-link :to="{ name: 'home'}">
					<img :src="HeaderLogo" />
				</router-link>
			</div>
			<div class="w-7/12">
				<SearchBar />
			</div>
			<div>
				<button class="bg-teal-700 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded">
					Login
				</button>
			</div>
		</div>
	</header>
</template>