import { StyleSheet } from "react-native";

export default StyleSheet.create({
   containerElenco:{
    paddingHorizontal: 20,
    justifyContent:'flex-end',
    width:'100%',
 
   },
  elencoView:{
    backgroundColor: '#9C4A8B',
    width: 65,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    padding: 6,
    marginBottom: 7,
   },
   elencoText:{
    fontWeight: 'bold', 
    color: '#fff' 
   },
   containerActors:{
    width: '100%', 
    marginBottom: 16, 
    flexDirection: 'row', 
    alignItems: 'center' 
   },
   viewImg:{
    width: 50, 
    height: 50, 
    backgroundColor: 'grey', 
    borderRadius: 30 
   }
})