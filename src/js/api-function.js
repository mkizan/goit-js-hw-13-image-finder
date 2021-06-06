const BASE_URL = 'https://pixabay.com/api';
const KEY = '21953239-920783d9236e07918df0be6ca';

export default class SearchService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchQueryItems() {
    const url = `${BASE_URL}/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&key=${KEY}&per_page=12&page=${this.page}`;
    console.log(this);
    // console.log(this.searchQuery.trim());

    return fetch(url)
      .then(response => response.json())
      .then(data => {
        // console.log(data); //Нам приходит массив объектов из hits
        const { hits } = data;
        this.incrementPage();
        return hits;
      });
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }
}
