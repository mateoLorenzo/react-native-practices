import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {ActivityIndicator, Button, Text, View} from 'react-native';
import {useMovies} from '../hooks/useMovies';

interface Props extends StackScreenProps<any, any> {}

export const HomeScreen = ({navigation}: Props) => {
  const {moviesList, isLoading} = useMovies();
  console.log('moviesList', moviesList[2]?.title);

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <ActivityIndicator color="red" size={20} />
      </View>
    );
  }
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>HomeScreen</Text>
      <Button
        title="Go to detail"
        onPress={() => navigation.navigate('DetailScreen')}
      />
    </View>
  );
};
