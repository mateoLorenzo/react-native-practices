import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const HomeScreen = () => {
  const navigator = useNavigation();

  return (
    <View>
      <Text>Home Screen</Text>
      <Icon name="star-outline" size={30} />
      <Button
        title="Go to pokemon Screen"
        onPress={() => navigator.navigate('PokemonScreen' as never)}
      />
    </View>
  );
};
