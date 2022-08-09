import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        
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
    bannerBack: {
        Color: 'rgba(0, 0, 0, 0.3)'
    },
    banner: {
        opacity: 0.6,
        resizeMode: 'cover',
        height: 140,
        width: '100%',
   
    },
    cover: {
        width: 116,
        height: 166,
        bottom: 60,
        left: 20,
      
    },
    title: {
        color: '#FFFFFF',
        fontSize: 24,
    },
    year: {
        paddingLeft: 3,
        paddingTop: 11,
        color: '#FFFFFF',
        fontSize: 13,
    },
    duration: {
        paddingLeft: 54,
        paddingTop: 18,
        color: '#FFFFFF',
        fontSize: 12,
    },
    director: {
        color: '#FFFFFF',
        fontSize: 13,
    },
    viewDirector: {
        flexDirection: 'row',
        paddingLeft: 146,
        bottom: 130
    },
    imdb: {
        color: '#E9A6A6',
        fontSize: 32,
        paddingLeft: 149,
        bottom: 115
    },
    likes: {
        color: '#FFFFFF',
        fontSize: 13,
        paddingLeft: 290,
        bottom: 137
    },
    viewTitle: {
        flexDirection: 'row',
        top: 6,
        left: 30,
    },
    viewSinpose:{
        paddingStart: 20,
        bottom: 125
    },
    sinposeTop: {
        color: '#FFFFFF'
    },
    sinposeBottom: {
        color: '#FFFFFF',
        top: 15
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
    actorView1:{
        marginBottom: 20,
    },
    actorImagem:{
        width: 50,
        height: 50,
        borderRadius: 100,
        bottom: 80,
        marginBottom: 15,
        left: 20
    },
    actorName1:{
        color: '#FFFFFF',
        bottom: 420,
        left: 90
    },
    actorPersona1:{
        color: '#FFFFFF',
        bottom: 420,
        left: 90
    },
    actorName2:{
        color: '#FFFFFF',
        bottom: 394,
        left: 90
    },
    actorPersona2:{
        color: '#FFFFFF',
        bottom: 394,
        left: 90
    },
    actorName3:{
        color: '#FFFFFF',
        bottom: 368,
        left: 90
    },
    actorPersona3:{
        color: '#FFFFFF',
        bottom: 368,
        left: 90
    },
    actorName4:{
        color: '#FFFFFF',
        bottom: 340,
        left: 90
    },
    actorPersona4:{
        color: '#FFFFFF',
        bottom: 340,
        left: 90
    },
    actorName5:{
        color: '#FFFFFF',
        bottom: 310,
        left: 90
    },
    actorPersona5:{
        color: '#FFFFFF',
        bottom: 315,
        left: 90
    },
})

export default styles