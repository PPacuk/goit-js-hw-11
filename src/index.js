import axios from 'axios';
import { fetchImg, renderImg, maxHit } from '../src/fetchImg';
import { qs, qsa, searchBtn, searchInput, loadingBtn, gallery } from './common';
import { Notify } from 'notiflix';
export { pageValue };
let pageValue = 1;

const inputHandler = async event => {
  event.preventDefault();
  gallery.innerHTML = '';
  pageValue = 1;
  fetchImg(searchInput.value)
    .then(resp => {
      renderImg(resp);
    })
    .catch(error => console.log(error));
};

const loadingHandler = async event => {
  pageValue++;
  fetchImg(searchInput.value)
    .then(resp => {
      if (maxHit <= resp.data.totalHits) {
        renderImg(resp);
      } else {
        console.log(
          "We're sorry, but you've reached the end of search results."
        );
      }
    })
    .catch(error => console.log(error));
};

searchBtn.addEventListener('click', inputHandler);
loadingBtn.addEventListener('click', loadingHandler);
console.log();
