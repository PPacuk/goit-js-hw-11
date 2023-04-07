export { qs, qsa, searchBtn, searchInput, gallery, loadingBtn, pageValue, counter };

const qs = qs => document.querySelector(qs);
const qsa = qsa => document.querySelector(qsa);
const searchInput = qs(`[type="text"]`);
const searchBtn = qs(`[type="submit"]`);
const gallery = qs(`.gallery`)
const loadingBtn = qs(`.load-more`)