import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  
    bannerBack: {
        Color: 'rgba(0, 0, 0, 0.3)', 
        width:'100%',
        height:'30%',
        marginBottom:10,
        backgroundColor:'red'
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
        bottom: 50,
        left: 20,
        borderRadius:10,
        backgroundColor:'red'
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
        bottom: 130,
        backgroundColor:'red'
    },
    imdb: {
        color: '#E9A6A6',
        fontSize: 32,
        paddingLeft: 149,
        bottom: 10,
        backgroundColor:'red'
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

  
  
   
})

export default styles