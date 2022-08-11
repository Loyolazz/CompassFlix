import axios from 'axios';

export const apiKey = 'ecd878f5eb6f5ca388735c699adaff80';

const Api = axios.create({
  baseURL: `https://api.themoviedb.org/3`,
});

export const getMovies = async page => {
  return Api.get(
    `/movie/popular?api_key=${apiKey}&language=pt-BR&page=${page}`
  ).catch(err => {
    console.log(err);
  })
};


export const getTokenAuth = async () => {
  try {
    const {data} = await 
    Api.get(`/authentication/token/new?api_key=${apiKey}`);
    const res = data.request_token;
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export default Api;
