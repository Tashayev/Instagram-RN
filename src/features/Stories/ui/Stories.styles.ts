import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
  },
  item: {
    alignItems: 'center',
    marginVertical: 6,
    marginHorizontal: 9,
  },
  imgWrapper: {
    marginHorizontal: 2,
    marginVertical: 2,
  },

  name: {
    marginTop: 4,
    fontSize: 12,
    color: '#000',
  },
  gradient: { position: 'absolute', top: -3, left: -3 },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    cursor: 'pointer',
    margin: 4,
    width: 93,
    height: 93,
  },
  plusIconWrapper:{
    position: 'relative'
  }
});
