import { qs, qsa, searchBtn, searchInput, gallery } from './common';

export { photoCardTemplate };

const photoCardTemplate = e => {
  return `<div class="photo-card">
  <img src="${e.webformatURL}" height="200px" width="300px" alt="${e.tags}" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes: ${e.likes}</b>
    </p>
    <p class="info-item">
      <b>Views: ${e.views}</b>
    </p>
    <p class="info-item">
      <b>Comments: ${e.comments}</b>
    </p>
    <p class="info-item">
      <b>Downloads: ${e.downloads}</b>
    </p>
  </div>
</div>
`
};
