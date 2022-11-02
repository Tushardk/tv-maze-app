import { ref, onBeforeMount } from 'vue'
import axios from 'axios';
import { ALL_GENRES } from '@/constants';

export function useShows() {

	const allShows: any = ref([]);
	const showsByGenres: any = ref([]);
	const allShowsLoading = ref(true);

	const fetchAllShows = async () => {
		allShowsLoading.value = true;
		await axios.get('https://api.tvmaze.com/shows').then(
			async (response: any) => {
				allShows.value.push(...response.data);
				allShowsLoading.value = false;
			}).catch((error: any) => {
				console.log(`Request failed with reason - ${error?.response?.status}`);
			});
	}

	const filterShowsByGenres = () => {
		ALL_GENRES.forEach(genre => {
			const showsByGenre = allShows.value.filter((show: any) => {
				if (show.genres.includes(genre)) { return show }
			});
			showsByGenres.value.push({ [genre]: showsByGenre });
		});
	}

	onBeforeMount(async () => {
		await fetchAllShows();
		await filterShowsByGenres();
	})

	return { allShows, allShowsLoading, showsByGenres }
}
