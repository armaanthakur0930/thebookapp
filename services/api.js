import axios from 'axios';

const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';

export const searchBooks = async (query) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: query,
      },
    });
    return response.data.items;
  } catch (error) {
    throw error;
  }
};
