export { fetchImg };
import axios from 'axios';
import { searchBtn, searchInput, gallery } from './common';
import { Notify } from 'notiflix';
import { photoCardTemplate } from './photoCardTemplate';

const fetchImg = async keyword => {
  try {
    const API_KEY = '35040895-5a8e4f49ce4c30427977eed8e';
    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${keyword}&image_type=photo&orientation=horizontal&safesearch=true`;
    const resp = await axios.get(url);

    if (searchInput.value.length === 0 || resp.data.total === 0) {
      return Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
    } else {
      return (gallery.innerHTML = resp.data.hits.map(e =>
        photoCardTemplate(e)
      ));
    }
  } catch (error) {
    console.error(error);
  }
};
