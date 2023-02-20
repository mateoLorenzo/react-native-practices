import {StyleSheet} from 'react-native';

export const colors = {
  primary: '#5856D6',
};

export const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 10,
    fontWeight: 'bold',
    color: 'black',
  },
  page1ScreenSubtitle: {
    textAlign: 'center',
    marginTop: 100,
  },
  personInfoContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100,
    alignSelf: 'center',
    marginTop: 20,
  },
  menuContainer: {
    marginVertical: 30,
    marginHorizontal: 30,
  },
  menuButton: {
    marginVertical: 10,
    flexDirection: 'row',
  },
  menuText: {
    fontSize: 20,
    marginLeft: 20,
    color: 'black',
  },
  iconScreenTitle: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 10,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 20,
  },
  iconsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  iconContainer: {
    backgroundColor: 'lightgrey',
    borderRadius: 100,
  },
  icon: {
    marginHorizontal: 20,
    marginVertical: 20,
    color: 'black',
  },
});
