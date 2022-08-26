import React,{useState,useContext,useEffect} from 'react';
import { View, Text,FlatList,Image,TouchableOpacity } from 'react-native';
import styles from './styles';
import BtnGoBack from '../../../../Components/ProfileComp/btnGoBack/btn';
import { Context } from '../../../../context';
import { getAccount, apiKey } from '../../../../services/api';
import Api from '../../../../services/api';

export default function MoviesFavorites({navigation}) {
  const [nameUser, setNameUser] = useState([])
  const [idUser, setIdUser] = useState([])
  const [idItem, setIdItem] = useState(null)
  const { sessionId } = useContext(Context)
  const [moviesListFavoriteEvaluation, setMovieListFavoriteEvaluation] = useState([])

  useEffect(() => {
    const getResponseAccount = async () => {
      const response = await getAccount(sessionId);
      setNameUser(response.data.name);
      setIdUser(response.data.id)
    };
    getResponseAccount();
  }, []);

    useEffect(() => {
      const EvaluationMovies = async () => {
          const response = await Api.get(`/account/${idUser}/favorite/movies?api_key=${apiKey}&session_id=${sessionId}`)
          setMovieListFavoriteEvaluation(response.data.results);
          console.log(response.data.results)
      };
      EvaluationMovies();
  }, [idUser, apiKey, sessionId])
  
  useEffect(() => {
    const getResponseAccount = async () => {
      const response = await getAccount(sessionId);
      setNameUser(response.data.name);
      console.log(response.data.name)
    };
    getResponseAccount();
  }, [sessionId]);

  return (
   
     <View style={styles.container}>
     <View style={{ marginTop: 20 }}>
       <BtnGoBack onPress={() => navigation.navigate('Profile')} />
     </View>
     <View style={styles.viewText}>
       <Text style={styles.title}>Filmes favoritos de <Text style={{ color: '#E9A6A6' }}>{nameUser}</Text>!</Text>
     </View>

     <FlatList
       numColumns={4}
       data={moviesListFavoriteEvaluation}

       keyExtractor={(item) => item.id}
       renderItem={({ item }) =>
         <View style={{
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flex: 1,
          flexDirection: 'column',
          marginBottom: 20,
          paddingHorizontal: 10,
          marginTop: 5,
         }}>
           <TouchableOpacity onPress={() => {
            setIdItem(item.id),
              navigation.navigate('MoviesDetail', { item });
          }}>
               <Image source={{ uri: `https://image.tmdb.org/t/p/original/${item.poster_path}` }} style={{  width: 76,
              height: 95,
              borderRadius: 20,
              flexDirection: 'row',
              marginTop: 5,
              alignItems: 'center'}} />
           </TouchableOpacity></View>


       }
     />
   </View>
  );
}