import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {TouchableIcon} from '../components/TouchableIcon';

export const Tab1Screen = () => {
  useEffect(() => {
    console.log('log from tab1Screen');
  }, []);

  return (
    <View style={{...styles.globalMargin}}>
      <Text style={styles.iconScreenTitle}>Icons - Ionicons</Text>
      <View style={styles.iconsContainer}>
        <TouchableIcon iconName="rocket" />
        <TouchableIcon iconName="funnel-outline" />
        <TouchableIcon iconName="laptop-outline" />
        <TouchableIcon iconName="megaphone-outline" />
        <TouchableIcon iconName="mic-outline" />
        <TouchableIcon iconName="newspaper-outline" />
        <TouchableIcon iconName="people-outline" />
        <TouchableIcon iconName="phone-portrait-outline" />
        <TouchableIcon iconName="pin-outline" />
        <TouchableIcon iconName="person-add-outline" />
        <TouchableIcon iconName="pulse-outline" />
        <TouchableIcon iconName="medal-outline" />
        <TouchableIcon iconName="share-outline" />
        <TouchableIcon iconName="skull-outline" />
        <TouchableIcon iconName="train-outline" />
        <TouchableIcon iconName="star-outline" />
        <TouchableIcon iconName="terminal-outline" />
        <TouchableIcon iconName="volume-mute-outline" />
        <TouchableIcon iconName="woman-outline" />
        <TouchableIcon iconName="trophy-outline" />
      </View>
    </View>
  );
};
