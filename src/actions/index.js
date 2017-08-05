import showsdata from '../data/showsdata.js';
import episodesdata from '../data/episodesdata.js';

export const FETCH_PODCASTS = "fetch_podcasts";

export function fetchPodcasts() {
  return {
    type: FETCH_PODCASTS,
    payload: showsdata
  }
}
