export { fetchImg };
import axios from 'axios';
import { searchBtn, searchInput } from './common';
import { Notify } from 'notiflix';

const fetchImg = async keyword => {
  try {
    const API_KEY = '35040895-5a8e4f49ce4c30427977eed8e';
    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${keyword}&image_type=photo&orientation=horizontal&safesearch=true`;
    const resp = await axios.get(url);

    console.log(resp.data.total);
    console.log(searchInput.value.length, 'hgw');

    if (searchInput.value.length === 0 || resp.data.total === 0) {
      return Notify.warning(
        'Sorry, there are no images matching your search query. Please try again.'
      );
    } else {
      return resp.data.hits.map(e => console.log(e.largeImageURL));
    }
  } catch (error) {
    console.error(error);
  }
};

