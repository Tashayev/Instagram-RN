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
    flex: 1 ,
    paddingBottom:130,
    paddingTop:70
  },
  wrapper:{
    gap:10,
    width:'100%',
    
  },
  image: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
     
  },
  video: {
   
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  input:{
    borderColor: '#fff',    
     borderWidth: 1,
     borderRadius:50,
     color:'#fff',
     padding:15,
     width:'80%'
  },
  actions:{
    width:'100%',
    flexDirection:'row',
    gap:10,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal:5
  }
});
