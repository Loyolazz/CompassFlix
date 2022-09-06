import { StyleSheet } from "react-native";

export default StyleSheet.create({
 
    viewCardList:{
        width: '90%', 
        backgroundColor: '#8F9AFC', 
        height: 100, 
        borderRadius: 10, 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        flexDirection: 'row' ,
        marginBottom:20
    },
    styleCard:{
        width: '80%', 
        height: '80%',
        paddingHorizontal: 10, 
        justifyContent: 'space-between' 
    }, 
    viewTrash:{
        height: 100, 
        backgroundColor: '#E9A6A6', 
        borderTopRightRadius: 10, 
        borderBottomRightRadius: 10, 
        alignItems: 'center', 
        justifyContent: 'center' 
    }
})