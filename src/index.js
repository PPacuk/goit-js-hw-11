import axios from 'axios';

const fetchImg = async keyword => {
  try {
    const url = `https://pixabay.com/api/?key=35040895-5a8e4f49ce4c30427977eed8e&q=${keyword}&image_type=photo&orientation=horizontal&safesearch=true`;
    const resp = await axios.get(url);
    resp.data.hits.map(e => console.log(e.largeImageURL));
  } catch (error) {}
};
fetchImg('dog');
