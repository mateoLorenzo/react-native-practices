import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from '../theme/appTheme';

interface Props {
  iconName: string;
}

export const TouchableIcon = ({iconName}: Props) => {
  return (
    <TouchableOpacity onPress={() => console.log('iconName: ', iconName)}>
      <Icon style={styles.icon} name={iconName} size={30} />
    </TouchableOpacity>
  );
};
