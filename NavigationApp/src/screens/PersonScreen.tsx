import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {useContext} from 'react';
import {Text, View} from 'react-native';
import {AuthContext} from '../context/AuthContext';
import {RootStackParams} from '../navigator/StackNavigator';
import {styles} from '../theme/appTheme';

interface Props extends StackScreenProps<RootStackParams, 'PersonScreen'> {}

export const PersonScreen = ({route, navigation}: Props) => {
  const params = route.params;
  const {changeUserName} = useContext(AuthContext);

  useEffect(() => {
    navigation.setOptions({
      title: params.name,
    });
  });

  useEffect(() => {
    changeUserName(params.name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.personInfoContainer}>
      <Text style={styles.title}>Person Screen</Text>
      <Text>{params.name}</Text>
      <Text>{params.age}</Text>
    </View>
  );
};
