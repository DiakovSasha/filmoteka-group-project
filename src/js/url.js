import axios from 'axios';
export const BASE_URL = 'https://api.themoviedb.org/3/'; //базове юрл
export const KEY = '00bb2c85647763d13c7f7e27b824373c'; //ключ
export const IMG_URL = 'https://image.tmdb.org/t/p/w500'; // посилання на картинку
export const API_URL = `${BASE_URL}trending/all/day?api_key=${KEY}`; // посилання на початковий рендер популярних фільмів
export const BASE_FIND_WORD_URL = `https://api.themoviedb.org/3/search/movie?api_key=00bb2c85647763d13c7f7e27b824373c`; // посилання на пошук фільмів за назвою
export const POPULAR_URL = `${BASE_URL}discover/movie/?sort_by=popularity.desc&api_key=${KEY}`;
// export const MODAL_MOVIE_CARD = ``

const API_GENRE = `${BASE_URL}genre/movie/list?api_key=${KEY}`; // посилання на жанри фільмів

// export async function fetchCardFilm(id) {
//   const fetchCard = await fetch(`${BASE_URL}movie/${id}?api_key=${KEY}`);
//   const fetchCardJson = await fetchCard.json();

//   return fetchCardJson;
// }

export class Api {
  constructor() {}

  async fetchCardFilm(id) {
    const fetchCard = await axios.get(`${BASE_URL}movie/${id}?api_key=${KEY}`);
    return fetchCard.data;
  }
}