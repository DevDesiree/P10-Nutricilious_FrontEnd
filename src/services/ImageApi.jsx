/* eslint-disable no-useless-catch */
import axios from 'axios';

const UNSPLASH_API_URL = 'https://api.unsplash.com/search/photos';
const UNSPLASH_ACCESS_KEY = '6Y16C0IlX9ePkLI9K3OHCztjdNxzErXXAxrioy7oFfo';

const fetchFruitsImages = async (fruitQuery) => {
  try {
    const response = await axios.get(UNSPLASH_API_URL, {
      params: {
        query: fruitQuery,
        per_page: 20, 
        orientation: 'landscape',
      },
      headers: {
        Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
      },
    });

    if (response.status === 200) {
      const imageData = response.data.results;
      return imageData.map((image) => image.urls.regular); 
    } else {
      throw new Error(`API request failed with status: ${response.status}`);
    }
  } catch (error) {
    console.error('Error fetching images:', error);
    return []; 
  }
};

export default {
  fetchFruitsImages,
};
