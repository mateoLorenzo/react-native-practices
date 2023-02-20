import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {ActivityIndicator, Button, View} from 'react-native';
import {MovieCard} from '../components/MovieCard';
import {useMovies} from '../hooks/useMovies';

interface Props extends StackScreenProps<any, any> {}

export const HomeScreen = ({navigation}: Props) => {
  const {moviesList, isLoading} = useMovies();

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <ActivityIndicator color="red" size={20} />
      </View>
    );
  }
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <MovieCard movie={moviesList[0]} />
      <Button
        title="Go to detail"
        onPress={() => navigation.navigate('DetailScreen')}
      />
    </View>
  );
};
