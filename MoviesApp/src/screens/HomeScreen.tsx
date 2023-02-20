import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import movieDB from '../api/movieDB';
import {MovieDBNowPlayingResponse} from '../interfaces/movieInterface';

interface Props extends StackScreenProps<any, any> {}

export const HomeScreen = ({navigation}: Props) => {
  useEffect(() => {
    movieDB.get<MovieDBNowPlayingResponse>('/now_playing').then(resp => {
      console.log('response:', resp.data.results[0].title);
    });
  }, []);

  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        title="Go to detail"
        onPress={() => navigation.navigate('DetailScreen')}
      />
    </View>
  );
};
