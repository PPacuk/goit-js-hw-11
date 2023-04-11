export { photoCardTemplate };

const photoCardTemplate = e => {
  return `
  <div class="photo-card">
  <a href="${e.largeImageURL}">
  <img src="${e.webformatURL}" height="200px" width="300px" alt="${e.tags}" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes:</b><span>${e.likes}</span>
    </p>
    <p class="info-item">
      <b>Views:</b><span>${e.views}</span>
    </p>
    <p class="info-item">
      <b>Comments:</b><span>${e.comments}</span>
    </p>
    <p class="info-item">
      <b>Downloads:</b><span>${e.downloads}</span>
    </p>
  </div>
</div>
`;
};