import axios from 'axios';


const api = axios.create({
    baseURL: 'http://react-cdp-api.herokuapp.com/'
  });

  

export const getMovies = (searchNmae='', searchBy='', limit='', sortBy='', sortOrder='desc') => {
    return api.get(`/movies?search=${ searchNmae }&searchBy=${searchBy}&limit=${limit}&sortBy=${sortBy}&sortOrder=${sortOrder}`)
        .then(res => res.data)
        .catch(err => console.log(err))
};

export const getMovie = (id) => {
  return api.get(`/movies/${id}`)
      .then(res => res.data)
      .catch(err => console.log(err))
};