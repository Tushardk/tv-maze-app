import { ref, onBeforeMount } from 'vue'
import axios from 'axios';

export function useShows() {
	const allGenres: any = ref([
		"Action",
		"Horror",
		"Mystery",
		"Science-Fiction",
		"Romance",
		"Supernatural",
		"Comedy",
		"Medical",
		"Fantasy",
		"Family",
		"Adventure",
		"Legal",
		"Drama",
		"Thriller",
		"Crime",
		"Music",
		"History",
		"Anime",
		"War",
		"Western",
		"Sports",
		"Espionage",
	]);
	const allShows: any = ref([]);
	const showsByGenres: any = ref([]);
	const allShowsLoading = ref(false);

	const fetchAllShows = async () => {
		allShowsLoading.value = true;
		await axios.get('https://api.tvmaze.com/shows').then(
			async (data) => {
				allShowsLoading.value = false;
				allShows.value.push(...data.data);
			});
		filterShowsByGenres();
	}

	const filterShowsByGenres = () => {
		for (let i = 0; i < allGenres.value.length; i++) {
			const genre = allGenres.value[i];
			const showsByGenre = allShows.value.filter((show: any) => {
				if (show.genres.includes(genre)) { return show }
			});
			showsByGenres.value.push({ [genre]: showsByGenre });
		}
	}


	onBeforeMount(() => {
		fetchAllShows();
	})

	return { allGenres, allShows, allShowsLoading, showsByGenres }
}
