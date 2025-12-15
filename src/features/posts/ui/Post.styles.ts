import { lightColors } from '@/shared/styles/theme/colors/light';
import { fonts } from '@/shared/styles/theme/fonts/fonts';
import { Dimensions, StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
  container: {
    gap: 5,
    fontFamily: fonts.main,
    marginVertical: 5,
    flex: 1,
  },
  border: {
    backgroundColor: lightColors.bordersDefault,
    height: StyleSheet.hairlineWidth,
  },
  spaceBetween: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: 10,
    alignItems: 'center',
  },
  left: { gap: 10, flexDirection: 'row' },
  username: { fontWeight: 600, fontSize: 13 },
  location: {
    fontWeight: 400,
    fontSize: 12,
  },
  content: {
    width: '100%',
    height: 400,
  },
  media: {
    width: Dimensions.get('window').width,
    height: '100%',
    maxHeight: 400,
  },
  btn: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  comments: {
    marginHorizontal: 10,
    flexDirection: 'row',
    gap: 5,
    fontSize: 14
  },
  username2: { fontWeight: 600, fontSize: 14 },
  noMedia: {
    width: '100%',
    height: '100%',
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
