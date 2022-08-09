import axios from "axios";

const Api = axios.create({
    baseURL:`https://api.themoviedb.org/3/movie/MOVIE_ID?api_key=5d670e04ae5201375c5f7ffbfab1e247&language=pt-BR`
})
export default Api;