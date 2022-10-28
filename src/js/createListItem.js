import { refs  } from './refs';
import { BASE_URL, KEY, IMG_URL, API_URL, POPULAR_URL } from "./url"
import { getfilmsGenres } from './getGandersFromId';


export function createListItem({
      poster_path,
      original_title,
      genre_ids,
      release_date,
      first_air_date,
      original_name,
      id,
      vote_average,
}) {
  

  let allGanres = getfilmsGenres(genre_ids);

 
      return `<li class="movie-popular__item" data-id="${id}">
        <a href="" class="movie-popular__reference" target="_blank">
        <img src="${poster_path? IMG_URL + poster_path: "https://via.placeholder.com/395x574"}" 
        class="movie-popular__img" 
          alt="${original_title || original_name}">
        <h2 class="movie-popular__title">${(original_title || original_name) ? (original_title || original_name) : ""}</h2>
        <p class="movie-popular__genre">${allGanres.length <= 2 ? allGanres : allGanres.slice(0, 2).join(", ") + ", " + "Other"} | ${
        (Number.parseInt(release_date) || Number.parseInt(first_air_date)) ? (Number.parseInt(release_date) || Number.parseInt(first_air_date)) : ""
      }</p>
      <p class="movie-popular__rating">${vote_average ? vote_average.toFixed(1) : "-"}</p>
      </a>
        </li>`;
    }

    

    export function generateContent(array) {
      return array.reduce((acc, item) => acc + createListItem(item), '');
    }
    
    export function pasteContent(array) {
      const result = generateContent(array);
      refs.list.insertAdjacentHTML('beforeend', result);
}
    

    