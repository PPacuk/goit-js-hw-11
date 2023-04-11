export { renderGallery, renderNextPage, maxHit };
    
import { searchInput, gallery, loadingBtn } from './common';
import { Notify } from 'notiflix';
import { photoCardTemplate } from './photoCardTemplate';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250 });
let maxHit = 0;

const renderGallery = resp => {
  maxHit = resp.data.hits.length;
  if (searchInput.value.length === 0 || resp.data.totalHits === 0) {
    Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.'
    );
    loadingBtn.style.display = 'none';
  } else {
    const render = resp.data.hits.map(e => photoCardTemplate(e)).join('');

    gallery.innerHTML = render;
    lightbox.refresh();
    loadingBtn.style.display = 'block';
    Notify.success(`Hooray! We found ${resp.data.totalHits} images.`);
  }
};

const renderNextPage = resp => {
  if (maxHit < resp.data.totalHits) {
    const render = resp.data.hits.map(e => photoCardTemplate(e)).join('');

    maxHit += resp.data.hits.length;
    gallery.insertAdjacentHTML('beforeend', render);
    loadingBtn.style.display = 'block';
    lightbox.refresh();
  } else {
    Notify.failure(
      "We're sorry, but you've reached the end of search results."
    );
    loadingBtn.style.display = 'none';
  }
};
