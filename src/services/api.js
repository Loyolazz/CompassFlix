import axios from 'axios';

export const apiKey = 'ecd878f5eb6f5ca388735c699adaff80';

const Api = axios.create({
  baseURL: `https://api.themoviedb.org/3/movie`,
});

export const getMovies = async page => {
  return Api.get(
    `/popular?api_key=${apiKey}&language=pt-BR&page=${page}`,
  );
};

export default Api;
