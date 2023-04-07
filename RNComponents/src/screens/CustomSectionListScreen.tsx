/* eslint-disable react-native/no-inline-styles */

import React, {useContext} from 'react';
import {SectionList, Text, View} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {ItemSeparator} from '../components/ItemSeparator';
import {ThemeContext} from '../context/themeContext/ThemeContext';

interface Casas {
  casa: string;
  data: string[];
}

// prettier-ignore
const casas: Casas[] = [
  {
    casa: 'DC Comics',
    data: [ 'Batman', 'Superman', 'Robin', 'Batman', 'Superman', 'Robin', 'Batman', 'Superman', 'Robin', 'Batman', 'Superman', 'Robin', 'Batman', 'Superman', 'Robin', 'Batman', 'Superman', 'Robin', 'Batman', 'Superman', 'Robin'],
  },
  {
    casa: 'Marvel Comics',
    data: ['Antman', 'Thor', 'Spiderman', 'Antman', 'Antman', 'Thor', 'Spiderman', 'Antman', 'Antman', 'Thor', 'Spiderman', 'Antman', 'Antman', 'Thor', 'Spiderman', 'Antman', 'Antman', 'Thor', 'Spiderman', 'Antman', 'Antman', 'Thor', 'Spiderman', 'Antman', 'Antman', 'Thor', 'Spiderman', 'Antman', 'Antman', 'Thor', 'Spiderman', 'Antman', 'Antman', 'Thor', 'Spiderman', 'Antman', 'Antman', 'Thor', 'Spiderman', 'Antman', 'Antman', 'Thor', 'Spiderman', 'Antman', 'Antman', 'Thor', 'Spiderman', 'Antman'],
  },
  {
    casa: 'Anime',
    data: ['Kenshin', 'Goku', 'Saitama', 'Kenshin', 'Goku', 'Saitama', 'Kenshin', 'Goku', 'Saitama', 'Kenshin', 'Goku', 'Saitama', 'Kenshin', 'Goku', 'Saitama', 'Kenshin', 'Goku', 'Saitama', 'Kenshin', 'Goku', 'Saitama', 'Kenshin', 'Goku', 'Saitama', 'Kenshin', 'Goku', 'Saitama', 'Kenshin', 'Goku', 'Saitama', 'Kenshin', 'Goku', 'Saitama', 'Kenshin', 'Goku', 'Saitama', 'Goku', 'Saitama', 'Kenshin', 'Goku', 'Saitama', 'Kenshin', 'Goku', 'Saitama', 'Kenshin', 'Goku', 'Saitama', 'Kenshin', 'Goku', 'Saitama', 'Kenshin', 'Goku', 'Saitama', 'Kenshin', 'Goku', 'Saitama', 'Kenshin', 'Goku', 'Saitama', 'Kenshin', 'Goku', 'Saitama', 'Kenshin', 'Goku', 'Saitama', 'Kenshin', 'Goku', 'Saitama', 'Kenshin', 'Goku', 'Saitama'],
  },
];

const footerComponent = () => (
  <View style={{marginBottom: 70}}>
    <HeaderTitle title={`Total de casas: ${casas.length}`} />
  </View>
);

export const CustomSectionListScreen = () => {
  const {theme} = useContext(ThemeContext);
  const {colors} = theme;
  return (
    <View style={{padding: 20, flex: 1, backgroundColor: colors.background}}>
      <SectionList
        sections={casas}
        renderItem={({item}) => (
          <Text style={{color: colors.text}}>{item}</Text>
        )}
        ListHeaderComponent={<HeaderTitle title="Section List" />}
        ListFooterComponent={footerComponent}
        keyExtractor={(item, index) => item + index}
        stickySectionHeadersEnabled
        renderSectionHeader={({section}) => (
          <View style={{backgroundColor: colors.background}}>
            <HeaderTitle title={section.casa} />
          </View>
        )}
        renderSectionFooter={({section}) => (
          <HeaderTitle title={`Total: ${section.data.length}`} />
        )}
        ItemSeparatorComponent={ItemSeparator}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
