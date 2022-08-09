import axios from "axios";

const api = axios.create({
    baseURL:`https://api.themoviedb.org/3/movie1`
})
export default api; 