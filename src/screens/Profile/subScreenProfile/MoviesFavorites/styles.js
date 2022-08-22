import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        paddingHorizontal: 20,
    },
    viewText:{
        width: '100%', 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginTop:40 
    },
    title:{
        color: '#fff', 
        alignItems: 'center', 
        fontSize:20, 
        fontWeight:'bold'
    },
    styleItem: {
        width: 80, 
        height: 100, 
        backgroundColor: '#9C4A8B', 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: 10,  
    },
    viewListFavorites: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
      
    }
})