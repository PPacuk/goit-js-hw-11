export { pageValue };

import { fetchImg } from '../src/fetchImg';
import { renderGallery, renderNextPage} from './render';
import {searchBtn, searchInput, loadingBtn, gallery } from './common';

let pageValue = 1;

const inputHandler = event => {
  event.preventDefault();
  gallery.innerHTML = '';
  pageValue = 1;

  fetchImg(searchInput.value)
    .then(resp => {
      renderGallery(resp);
    })
    .catch(error => console.log(error));
};

const loadingHandler = event => {
  pageValue++;
  fetchImg(searchInput.value)
    .then(resp => {
      renderNextPage(resp);
    })
    .catch(error => console.log(error));
};

searchBtn.addEventListener('click', inputHandler);
loadingBtn.addEventListener('click', loadingHandler);
