import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {MovieFull} from '../interfaces/movieInterface';

interface MovieDetails {
  isLoading: boolean;
  movieFull: MovieFull;
  cast: any[];
}

export const useMovieDetails = (movieId: number) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [state, setState] = useState<MovieDetails>();

  const getMovieDetails = async () => {
    const response = await movieDB.get<MovieFull>(`/${movieId}`);
    console.log('resp.data', response.data.overview);
  };

  useEffect(() => {
    getMovieDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {state};
};
