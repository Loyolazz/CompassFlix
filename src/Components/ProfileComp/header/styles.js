import {StyleSheet} from 'react-native'
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerProfile: {
        backgroundColor: '#000',
        flex: 1,
        width: '100%',
        alignItems: 'center',
    },
    viewProfileInfo: {
        marginTop: 20,
        width: '100%',
        alignItems: 'center'
    },
    textNameUser: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#fff'
    },
    viweEvaluation: {
        marginTop: 20,
        width: '100%',
        alignItems: 'center'
    },
    styleNumberEvaluation: {
        fontWeight: 'bold',
        fontSize: 40,
        color: '#9C4A8B'
    },
    styleBtn: {
        backgroundColor: '#E9A6A6',
        width: 60,
        aligItems: 'center',
        flexDirection: 'row',
        borderRadius: 7,
        justifyContent: 'center'
    },
    viewBtn: {
        width: '100%',
        //backgroundColor:'red', 
        justifyContent: 'flex-end',
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginTop: 40,
        paddingHorizontal: 25,
        marginBottom: 20,
    },
    txtExit: {
        color: '#000',
        fontWeight: 'bold'
    },
    containerFavoritesAndEvaluation: {
        flex: 1.5,
        width: '100%',
        aligItems: 'center'
    },
    containerIcons: {
        width: '100%',
        height: 60,
        flexDirection: 'row'
    },
    containerIconPopcorn: {
        width: '50%',
        height: 60,
        borderWidth: 1,
        borderLeftColor: '#000',
        borderBottomColor: 'grey',
        borderTopColor: 'grey',
        borderEndColor: 'grey',
        borderRightColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerIconPlay: {
        width: '50%',
        height: 60,
        borderWidth: 1,
        borderLeftColor: '#000',
        borderBottomColor: 'grey',
        borderTopColor: 'grey',
        borderRightColor: '#000',
        alignItems: 'center',
        justifyContent: 'center'
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
        justifyContent: 'space-between'
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
        width: 70, 
        height: 100, 
        backgroundColor: 'grey', 
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