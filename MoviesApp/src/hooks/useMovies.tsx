import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {Movie, MovieDBMoviesResponse} from '../interfaces/movieInterface';

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [nowPlayingMovies, setNowPlayingMovies] = useState<Movie[]>([]);
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);

  const getMovies = async () => {
    const resNowPlaying = await movieDB.get<MovieDBMoviesResponse>(
      '/now_playing',
    );
    const resPopular = await movieDB.get<MovieDBMoviesResponse>('/popular');
    setNowPlayingMovies(resNowPlaying.data.results);
    setPopularMovies(resPopular.data.results);
    setIsLoading(false);
  };

  useEffect(() => {
    //get /now_playing movies
    getMovies();
  }, []);

  return {
    nowPlayingMovies,
    popularMovies,
    isLoading,
  };
};
