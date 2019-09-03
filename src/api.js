import axios from "axios";

const api = axios.create({
    baseURL:"https://api.themoviedb.org/3/",
    params:{
        api_key:"b0dee7a98b54fcb780effbf77ddbc0a4",
        language:"en-US"
    }
});


export const TVApi = {
    topRated: () => api.get("tv/top_rated"),
    popular: () => api.get("tv/popular"),
    airingToday: () => api.get("tv/airing_today")
};

export const MoviesApi = {
    nowPlaying: () => api.get("movie/now_playing"),
    upcoming: () => api.get("movie/upcoming"),
    popular: () => api.get("movie/popular")
};