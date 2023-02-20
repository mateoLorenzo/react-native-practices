import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'a3ac6dca6e175d2f8f6808206fb182c8',
    language: 'es-ES',
  },
});

export default movieDB;
