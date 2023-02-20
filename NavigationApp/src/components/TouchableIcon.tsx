import React, {useContext} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {AuthContext} from '../context/AuthContext';
import {styles} from '../theme/appTheme';

interface Props {
  iconName: string;
}

export const TouchableIcon = ({iconName}: Props) => {
  const {authState, changeFavoriteIcon} = useContext(AuthContext);
  const {favoriteIcon} = authState;
  return (
    <TouchableOpacity
      style={favoriteIcon === iconName ? styles.iconContainer : {}}
      onPress={() => changeFavoriteIcon(iconName)}>
      <Icon style={styles.icon} name={iconName} size={30} />
    </TouchableOpacity>
  );
};
