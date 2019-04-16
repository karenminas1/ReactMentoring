
export const getMovies = (searchBy, limit) => {
    return fetch (`https://reactjs-cdp.herokuapp.com/movies?searchBy=${searchBy}&limit=${limit}`)
        .then(res => res.json());
};

  