import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    paddingVertical: 10,
    flex:1    
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
  image: {
    width: 81,
    height: 81,
    borderRadius: 50,
    cursor: 'pointer',
  },
  name: {
    marginTop: 4,
    fontSize: 12,
    color: '#000',
  },
  gradient: { position: 'absolute', top: -3, left: -3 },
});
