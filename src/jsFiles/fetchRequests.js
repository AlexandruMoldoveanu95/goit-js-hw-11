import axios from 'axios';

export const receivedImages = async (typedValue, pageNum) => {
  const url = `https://pixabay.com/api/?key=37188038-d1df2257fbd38fe1e6179e818=${typedValue}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${pageNum}`;
  try {
    const resp = await axios.get(url);
    const { data } = resp;
    const { totalHits, hits } = data;
    return { totalHits, hits };
  } catch (err) {
    console.log(err);
  }
};
