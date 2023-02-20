import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {Movie, MovieDBNowPlayingResponse} from '../interfaces/movieInterface';

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [moviesList, setMoviesList] = useState<Movie[]>([]);

  const getMovies = async () => {
    const response = await movieDB.get<MovieDBNowPlayingResponse>(
      '/now_playing',
    );
    setMoviesList(response.data.results);
    setIsLoading(false);
  };

  useEffect(() => {
    //get /now_playing movies
    getMovies();
  }, []);

  return {
    moviesList,
    isLoading,
  };
};
