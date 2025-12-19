import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get('window'); 

export const styles = StyleSheet.create({
  container: {
    
    width: width,         
    height: width,         
    position: 'relative',  
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000', 
    overflow: 'hidden',   
    flex: 2  
  },
  image: {
    paddingVertical: 30,
    width: '100%',
    height: '100%',
     
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  }
});
