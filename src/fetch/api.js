const URL_API = (query) => `
  https://www.googleapis.com/customsearch/v1?key=${API_KEY}
  &cx=017576662512468239146:omuauf_lfve&q=${query}`;

export const fetchAPI = (search) => fetch(URL_API(search))
  .then((response) => response.json())
  .then((data) => data);

export const t = '';
