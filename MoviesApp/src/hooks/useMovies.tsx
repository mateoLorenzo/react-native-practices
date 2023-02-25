import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {Movie, MovieDBMoviesResponse} from '../interfaces/movieInterface';

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [moviesList, setMoviesList] = useState<Movie[]>([]);
  const [popularMoviesList, setPopularMoviesList] = useState<Movie[]>([]);

  const getMovies = async () => {
    const resNowPlaying = await movieDB.get<MovieDBMoviesResponse>(
      '/now_playing',
    );
    const resPopular = await movieDB.get<MovieDBMoviesResponse>('/popular');
    setMoviesList(resNowPlaying.data.results);
    setPopularMoviesList(resPopular.data.results);
    setIsLoading(false);
  };

  useEffect(() => {
    //get /now_playing movies
    getMovies();
  }, []);

  return {
    moviesList,
    popularMoviesList,
    isLoading,
  };
};
