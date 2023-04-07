import { fetchImg } from '../src/fetchImg';
import { qs, qsa, searchBtn, searchInput, loadingBtn, gallery } from './common';
export { pageValue };
let pageValue = 1;

const inputHandler = async event => {
  event.preventDefault();
  gallery.innerHTML = '';
  pageValue = 1;
  await fetchImg(searchInput.value);
};

const loadingHandler = async event => {
  pageValue++;
  await fetchImg(searchInput.value);

  console.log(pageValue);
};

searchBtn.addEventListener('click', inputHandler);
loadingBtn.addEventListener('click', loadingHandler);
