import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {TouchableIcon} from '../components/TouchableIcon';

export const Tab1Screen = () => {
  const [iconSelected, setIconSelected] = useState('funnel-outline');
  useEffect(() => {
    console.log('log from tab1Screen');
  }, []);

  return (
    <View style={{...styles.globalMargin}}>
      <Text style={styles.iconScreenTitle}>Icons - Ionicons</Text>
      <View style={styles.iconsContainer}>
        <TouchableIcon
          iconSelected={iconSelected}
          setIconSelected={setIconSelected}
          iconName="rocket"
        />
        <TouchableIcon
          iconSelected={iconSelected}
          setIconSelected={setIconSelected}
          iconName="funnel-outline"
        />
        <TouchableIcon
          iconSelected={iconSelected}
          setIconSelected={setIconSelected}
          iconName="laptop-outline"
        />
        <TouchableIcon
          iconSelected={iconSelected}
          setIconSelected={setIconSelected}
          iconName="megaphone-outline"
        />
        <TouchableIcon
          iconSelected={iconSelected}
          setIconSelected={setIconSelected}
          iconName="mic-outline"
        />
        <TouchableIcon
          iconSelected={iconSelected}
          setIconSelected={setIconSelected}
          iconName="newspaper-outline"
        />
        <TouchableIcon
          iconSelected={iconSelected}
          setIconSelected={setIconSelected}
          iconName="people-outline"
        />
        <TouchableIcon
          iconSelected={iconSelected}
          setIconSelected={setIconSelected}
          iconName="phone-portrait-outline"
        />
        <TouchableIcon
          iconSelected={iconSelected}
          setIconSelected={setIconSelected}
          iconName="pin-outline"
        />
        <TouchableIcon
          iconSelected={iconSelected}
          setIconSelected={setIconSelected}
          iconName="person-add-outline"
        />
        <TouchableIcon
          iconSelected={iconSelected}
          setIconSelected={setIconSelected}
          iconName="pulse-outline"
        />
        <TouchableIcon
          iconSelected={iconSelected}
          setIconSelected={setIconSelected}
          iconName="medal-outline"
        />
        <TouchableIcon
          iconSelected={iconSelected}
          setIconSelected={setIconSelected}
          iconName="share-outline"
        />
        <TouchableIcon
          iconSelected={iconSelected}
          setIconSelected={setIconSelected}
          iconName="skull-outline"
        />
        <TouchableIcon
          iconSelected={iconSelected}
          setIconSelected={setIconSelected}
          iconName="train-outline"
        />
        <TouchableIcon
          iconSelected={iconSelected}
          setIconSelected={setIconSelected}
          iconName="star-outline"
        />
        <TouchableIcon
          iconSelected={iconSelected}
          setIconSelected={setIconSelected}
          iconName="terminal-outline"
        />
        <TouchableIcon
          iconSelected={iconSelected}
          setIconSelected={setIconSelected}
          iconName="volume-mute-outline"
        />
        <TouchableIcon
          iconSelected={iconSelected}
          setIconSelected={setIconSelected}
          iconName="woman-outline"
        />
        <TouchableIcon
          iconSelected={iconSelected}
          setIconSelected={setIconSelected}
          iconName="trophy-outline"
        />
      </View>
    </View>
  );
};
