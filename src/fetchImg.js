export { fetchImg };
import axios from 'axios';

const fetchImg = async keyword => {
  try {
    const API_KEY = '35040895-5a8e4f49ce4c30427977eed8e';
    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${keyword}&image_type=photo&orientation=horizontal&safesearch=true`;
    const resp = await axios.get(url);
    resp.data.hits.map(e => console.log(e.largeImageURL));
    console.log(resp.data.total);
  } catch (error) {
    console.error(error);
  }
};
