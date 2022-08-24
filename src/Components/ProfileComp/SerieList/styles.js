import {StyleSheet} from 'react-native'
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
  
   
    headerFavorites: {
        width: '100%',
        height: 180,
        alignItems: 'center'
    },
    viewTextFavorites: {
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 25,
        justifyContent: 'space-between',
        marginBottom:8,
        marginTop:-10
    },
    textFavorites: {
        color: '#fff',
        marginTop: 10
    },
    textEvaluation: {
        color: '#fff',
        marginTop: 10
    },
    textViewAll: {
        color: '#E9A6A6',
        marginTop: 10
    },
    viewListFavorites: {
        flexDirection: 'row',
        width: '80%',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20
    },
    viewListEvaluation: {
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
    },
    styleItem: {
        width: 75, 
        height: 100, 
        backgroundColor: '#121212', 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: 10 
    }, 
    headerEvaluation:{
        width: '100%', 
        height: 180, 
        alignItems: 'center', 
        borderWidth: 1, 
        borderTopColor: 'grey', 
        borderRightColor: '#000', 
    },
    viewTextEvaluation: {
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 25,
        justifyContent: 'space-between'
    },
})