import { StyleSheet } from "react-native";

export default StyleSheet.create({

    containerCartazAndTitle: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        height:'13%'
    },
    styleViewCartaz: {
        width: '30%',
        height: '35%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    styleImgCartaz: {
        borderRadius: 6,
        height: 182,
        width: 116,
    },
    styleNota: {
        fontSize: 30,
        color: '#E9A6A6',
        marginRight: 50
    },
    containerInfoFilm: {
        width: '50%',
        height: '50%',
        paddingVertical: 4,
        paddingHorizontal: 10,
        flexDirection: 'column',
        marginLeft:10
    },
    containerTitleFilm:{
        flexDirection:'row', 
        alignItems:'center',
        //paddingHorizontal:20
    },
    titleFilm:{
        height: 40 , 
        alignItems:'flex-start', 
        flexDirection:'column',  
        justifyContent:'center', 
        paddingHorizontal:10
    },
    titleFilmView: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white'
    },

    directorName: {
        color: 'white', 
        fontSize: 8
    },
    containerIconAndNote:{
        flexDirection: 'row', 
        marginTop: 5,
        paddingHorizontal:10
    },
    containerYearAndDuration:{
        flexDirection:'row', 
        justifyContent:'space-between', 
        marginRight:20, 
        alignItems:'center',
        height:40 ,   
        paddingHorizontal:10,
    },
    textYear:{
        color:'#fff', 
        fontSize:12,
        marginRight:13
    },
    textDurantion:{
        color:'#fff', 
        fontSize:10
    },
    votes:{
        fontSize: 13, 
        color: 'white'
    },
    heart:{
        justifyContent: 'flex-end', 
        alignItems: 'center', 
        height: 40 
    }

})