export { fetchImg, renderImg, maxHit };

import axios from 'axios';
import { searchBtn, searchInput, gallery, loadingBtn } from './common';
import { Notify } from 'notiflix';
import { photoCardTemplate } from './photoCardTemplate';
import { pageValue } from './index';

let maxHit = 0;

const fetchImg = async keyword => {
  const API_KEY = '35040895-5a8e4f49ce4c30427977eed8e';
  const url = `https://pixabay.com/api/?key=${API_KEY}&q=${keyword}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${pageValue}`;
  const resp = await axios.get(url);
  return resp;
};

const renderImg = resp => {

  // const pageNumber = resp.data.total / resp.data.hits.length;
  // const roundedPageNumber = Math.round(pageNumber * 1);
  maxHit += resp.data.hits.length;
  
  // console.log(resp.data.totalHits);

  if (searchInput.value.length === 0 || resp.data.total === 0) {
    Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.'
    );
  // } else if (roundedPageNumber <= 1) {
    loadingBtn.style.display = 'none';
  //   const render = resp.data.hits.map(e => photoCardTemplate(e)).join('');

  //   gallery.insertAdjacentHTML('beforeend', renderImg);
  } else {
    const render = resp.data.hits.map(e => photoCardTemplate(e)).join('');

    gallery.insertAdjacentHTML('beforeend', render);
    loadingBtn.style.display = 'block';
    // console.log(resp.data.totalHits);
    // console.log(resp.data.total);
    // console.log(roundedPageNumber);
  }
};
