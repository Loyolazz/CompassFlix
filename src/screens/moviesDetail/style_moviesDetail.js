import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000', 
    },
    ImgBackground: {
        width: '100%', 
        height: 189, 
        justifyContent: 'center' 
    },
    btnGoBack:{
        width:35, 
        height:35, 
        backgroundColor:'#fff', 
        borderRadius:30, 
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal:20,
        marginBottom:130
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
    elenco:{
        color: '#FFFFFF',
        paddingLeft: 3,
        paddingTop: 1,
    },
    elencoButton:{
        backgroundColor: '#9C4A8B',
        borderRadius: 20,
        width: 58,
        height: 24,
        bottom: 95,  
        left: 18
    },
    
    
})

export default styles