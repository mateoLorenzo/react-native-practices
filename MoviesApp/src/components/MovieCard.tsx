import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Movie} from '../interfaces/movieInterface';

interface Props {
  movie: Movie;
}

export const MovieCard = ({movie}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  return (
    <View style={styles.cardContainer}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 300,
    height: 420,
  },
  imageContainer: {
    borderRadius: 20,

    flex: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13,
  },
  image: {
    flex: 1,
    borderRadius: 20,
  },
});
