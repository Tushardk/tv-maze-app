import { ref, onBeforeMount } from 'vue';
import axios, { AxiosError } from 'axios';
import type { Ref } from 'vue';
import { ALL_GENRES } from '@/constants';
import type { Show, ShowsByGenres } from '@/types';

export function useShows() {
  const allShows: any = ref([]);
  const showsByGenres: any = ref([]);
  const allShowsLoading: Ref<boolean> = ref(true);

  const fetchAllShows = async () => {
    allShowsLoading.value = true;
    await axios
      .get('https://api.tvmaze.com/shows')
      .then(async (response: any) => {
        allShows.value.push(...response.data);
        allShowsLoading.value = false;
      })
      .catch((error: AxiosError) => {
        console.log(`Request failed with reason - ${error?.response?.status}`);
      });
  };

  const filterShowsByGenres = () => {
    ALL_GENRES.forEach((genre) => {
      const showsByGenre = allShows.value.filter((show: Show) => {
        if (show?.genres?.includes(genre)) {
          return show;
        }
      });
      showsByGenres.value.push({ [genre]: showsByGenre });
    });
  };

  onBeforeMount(async () => {
    await fetchAllShows();
    await filterShowsByGenres();
  });

  return { allShows, allShowsLoading, showsByGenres };
}
