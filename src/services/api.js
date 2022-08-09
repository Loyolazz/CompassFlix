import axios from "axios";

const Api = axios.create({
    baseURL:`https://api.themoviedb.org/3/movie`
})
export default Api;