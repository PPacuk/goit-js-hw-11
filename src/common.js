export { qs, qsa, searchBtn, searchInput, gallery };

const qs = qs => document.querySelector(qs);
const qsa = qsa => document.querySelector(qsa);
const searchInput = qs(`[type="text"]`);
const searchBtn = qs(`[type="submit"]`);
const gallery = qs(`.gallery`)
