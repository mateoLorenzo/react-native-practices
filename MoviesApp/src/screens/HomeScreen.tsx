import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import movieDB from '../api/movieDB';

interface Props extends StackScreenProps<any, any> {}

export const HomeScreen = ({navigation}: Props) => {
  useEffect(() => {
    movieDB.get('/now_playing').then(resp => {
      console.log('response:', resp.data);
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
