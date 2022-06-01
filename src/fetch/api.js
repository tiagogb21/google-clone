const API_KEY = 'AIzaSyDjjYb4qrqOoFfcatHxMgQI8IUDUj8I1V8';

const URL_API = (query) => `
  https://www.googleapis.com/customsearch/v1?key=${API_KEY}
  &cx=017576662512468239146:omuauf_lfve&q=${query}`;

export const fetchAPI = (query) => fetch(URL_API(query))
  .then((response) => response.json())
  .then((data) => data);

export const t = '';
