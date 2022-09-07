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
        marginTop:40,
        marginBottom:30
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
      
    },
    containerMoviesEmpty:{
        width:'100%',  
        alignItems:'center', 
        justifyContent:'center'
    },
    textEmptyMovies:{
        color: 'grey', 
        fontSize:20, 
        marginBottom:30, 
        marginTop:10 
    },
    stylePoster:{
        width: 76,
        height: 95,
        borderRadius: 20,
        marginTop: 5,
        alignItems: 'center',
    },
    containerTextStar:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    styleStar:{
        width: 10, 
        height: 10, 
        marginRight: 8
    },
    textNote:{
        color: '#fff', 
        fontSize: 13
    }
})