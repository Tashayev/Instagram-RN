import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get('window'); 

export const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: width,         
    height: width,         
    position: 'relative',  
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000', 
    overflow: 'hidden',     
  },
  image: {
    position: 'absolute',  
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'cover', 
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  }
});
