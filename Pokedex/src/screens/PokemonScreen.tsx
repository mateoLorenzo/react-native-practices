import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Text, View} from 'react-native';
import {RootStackParams} from '../navigators/StackNavigator';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> {}

export const PokemonScreen = ({route}: Props) => {
  const {simplePokemon, color} = route.params;
  return (
    <View>
      <Text>
        {simplePokemon.name} - {color}
      </Text>
    </View>
  );
};
