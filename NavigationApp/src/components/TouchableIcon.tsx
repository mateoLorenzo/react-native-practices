import React, {Dispatch, SetStateAction} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from '../theme/appTheme';

interface Props {
  iconName: string;
  iconSelected: string;
  setIconSelected: Dispatch<SetStateAction<string>>;
}

export const TouchableIcon = ({
  iconName,
  iconSelected,
  setIconSelected,
}: Props) => {
  return (
    <TouchableOpacity
      style={iconSelected === iconName ? styles.iconContainer : {}}
      onPress={() => setIconSelected(iconName)}>
      <Icon style={styles.icon} name={iconName} size={30} />
    </TouchableOpacity>
  );
};
