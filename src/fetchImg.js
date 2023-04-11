export { fetchImg, renderGallery, maxHit, renderNextPage };

import axios from 'axios';
import { pageValue } from './index';

const fetchImg = async keyword => {
  const API_KEY = '35040895-5a8e4f49ce4c30427977eed8e';
  const url = `https://pixabay.com/api/?key=${API_KEY}&q=${keyword}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${pageValue}`;
  const resp = await axios.get(url);
  return resp;
};


