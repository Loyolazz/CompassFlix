import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor:'#000',
        flex:1,
        paddingHorizontal:20
    },
    viewTitle:{
        width:'100%', 
        height:60, 
        justifyContent:'center', 
        alignItems:'center', 
        marginTop:30
    },
    txtTitle:{
        color:'#fff', 
        fontSize:25, 
        fontWeight:'bold'
    },
    footerBtnCreateList:{
        width:'100%', 
        height:90, 
        justifyContent:'center', 
        alignItems:'flex-end', 
        marginTop:30,
  
    },
    mainList:{
        width:'100%', 
        height:500, 
        justifyContent:'center', 
        alignItems:'center', 
        marginTop:30,
        backgroundColor:'grey'
    }
})