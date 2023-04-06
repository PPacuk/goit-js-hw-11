export { qs, qsa, searchBtn, searchInput };
const qs = qs => document.querySelector(qs);
const qsa = qsa => document.querySelector(qsa);
const searchInput = qs(`[type="text"]`);
const searchBtn = qs(`[type="submit"]`);
