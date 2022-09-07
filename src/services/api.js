import axios from 'axios';

export const apiKey = 'ecd878f5eb6f5ca388735c699adaff80';

const Api = axios.create({
  baseURL: `https://api.themoviedb.org/3`,
});

export const getMovies = async page => {
  return Api.get(
    `/movie/popular?api_key=${apiKey}&language=pt-BR&page=${page}`,
  ).catch(err => {
    console.log(err);
  });
};

export const getSeries = async page => {
  return Api.get(
    `/tv/popular?api_key=${apiKey}&language=pt-BR&page=${page}`,
  ).catch(err => {
    console.log(err);
  });
};

export const getToken = async () => {
  return Api.get(`/authentication/token/new?api_key=${apiKey}`).catch(error => {
    console.log(err);
  });
};

export const validateToken = async (email, password, token) => {
  return Api.post(
    `/authentication/token/validate_with_login?api_key=${apiKey}`,
    {
      username: email,
      password: password,
      request_token: token,
    },
  )
    .then(response =>
      Api.post(`/authentication/session/new?api_key=${apiKey}`, {
        request_token: response.data.request_token,
      }).catch(error => {
        console.log(error);
      }),
    )
    .catch(error => {
      console.log(error);
    });
};

export const getAccount = async session_id => {
  return Api.get(`/account?api_key=${apiKey}&session_id=${session_id}`).catch(
    error => {
      console.log(error);
    },
  );
};

export const getTvShowSeason = async (id, season) => {
  return Api.get(
    `/tv/${id}/season/${season}?api_key=${apiKey}&language=pt-BR`,
  ).catch(error => {
    console.log('Error ao buscar detalhes das series', error);
  });
};

export const getSeriesDetails = async id => {
  return Api.get(`/tv/${id}?api_key=${apiKey}&language=pt-BR`).catch(error => {
    console.log('Erro', error);
  });
};

export const ratePost = async (midia, id, sessionId, value) => {
  return Api.post(
    `/${midia}/${id}/rating?api_key=${apiKey}&session_id=${sessionId}`,
    {
      value: value,
    },
  ).catch(error => {
    console.log(error);
  });
};

export const EvaluationSeries = async (dataUser, midia, sessionId) => {
  return Api.get(
    `/account/${dataUser}/rated/${midia}?api_key=${apiKey}&session_id=${sessionId}`,
  ).catch(error => {
    console.log(error);
  });
};

export const getMoviesFavorites = async (idUser, midia, sessionId) => {
  return Api.get(
    `/account/${idUser}/favorite/${midia}?api_key=${apiKey}&session_id=${sessionId}`,
  ).catch(error => {
    console.log(error);
  });
};

export const getPostMovies = async (sessionId, midia, idUser) => {
  return Api.get(
    `/account/${idUser}/rated/${midia}?api_key=${apiKey}&session_id=${sessionId}`,
  ).catch(error => {
    console.warn(error);
  });
};

export const markFavorite = async (userId, session_id, midia, midiaId) => {
  return Api.post(
    `/account/${userId}/favorite?api_key=${apiKey}&session_id=${session_id}`,
    {
      media_type: midia,
      media_id: midiaId,
      favorite: true,
    },
  ).catch(error => {
    console.warn('Erro na avaliação', error);
  });
};

export const unmarkFavorite = async (userId, session_id, midia, midiaId) => {
  return Api.post(
    `/account/${userId}/favorite?api_key=${apiKey}&session_id=${session_id}`,
    {
      media_type: midia,
      media_id: midiaId,
      favorite: false,
    },
  ).catch(error => {
    console.warn('Erro', error);
  });
};

export const getAccountStates = async (midia, movie_id, session_id) => {
  return Api.get(
    `/${midia}/${movie_id}/account_states?api_key=${apiKey}&session_id=${session_id}`,
  ).catch(error => {
    console.log('Error', error);
  });


export const getListMovie = async list_id => {
  return Api.get(`/list/8215543?api_key=${apiKey}&language=en-US`).catch(
    error => {
      console.log('Error', error);
    },
  );
};

export const getList = async (idUser, sessionId) => {
	return Api.get(
	`account/${idUser}/lists?api_key=${apiKey}&language=pt-BR&session_id=${sessionId}&page=1`,
    )
    .catch(err => console.warn(err));
}
//delete list
export const deleteList = async (list_id,sessionId) => {
	return Api.delete(
	`list/${list_id}?api_key=${apiKey}&session_id=${sessionId}`,
  )
    .catch(err => console.log(err));
}

export const createList = async (sessionId, nameList, description) => {
  return Api
    .post(
      `/list?api_key=${apiKey}&session_id=${sessionId}`,
      {
        name: nameList,
        description: description,
        language: 'pt-BR',
      },
    )
    .catch(err => console.warn(err));
};


export const getMoviesList = async (listId) => {
  return Api.get(
    `/list/8216071?api_key=${apiKey}&language=pt-BR` )
    .catch(err => {
      console.log(err)
    })
}

export const removeItem = async (list_id, session_id, media_id) => {
  return Api.post(
    `list/${list_id}/remove_item?api_key=${apiKey}&session_id=${session_id}`,
    {
      media_id: media_id,
    },
  ).catch(err => console.warn(err));
};


export default Api;
