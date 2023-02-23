import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {Movie} from '../interfaces/movieInterface';
import {MovieCard} from './MovieCard';

interface Props {
  title?: string;
  moviesList: Movie[];
}

export const HorizontalSlider = ({moviesList, title}: Props) => {
  return (
    <View style={{height: title ? 260 : 230}}>
      {title ? <Text style={styles.sliderTitle}>{title}</Text> : null}
      <FlatList
        data={moviesList}
        renderItem={({item}: any) => (
          <MovieCard movie={item} height={200} width={140} />
        )}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sliderTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});
