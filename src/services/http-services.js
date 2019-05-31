import axios from 'axios';


const api = axios.create({
    baseURL: 'http://react-cdp-api.herokuapp.com/'
  });

  

export const getMovies = (searchBy, limit, sortBy) => {
    return api.get(`/movies?searchBy=${searchBy}&limit=${limit}&sortBy=${sortBy}&sortOrder=desc`)
        .then(res => res.data)
        .catch(err => console.log(err))
};

export const getMovie = (id) => {
  return api.get(`/movies/${id}`)
      .then(res => res.data)
      .catch(err => console.log(err))
};