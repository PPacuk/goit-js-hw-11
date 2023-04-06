import { fetchImg } from '../src/fetchImg';
import { qs, qsa, searchBtn, searchInput } from './common';

const inputHandler = async event => {
  event.preventDefault();

  await fetchImg(searchInput.value);
};

searchBtn.addEventListener('click', inputHandler);
