import Search from '../components/Search/Search';
import Movie from '../components/Movie/Movie';


export  const routes = [
  {
    path: "/",
    exact: true,
    component: Search
  },
  {
    path: "/movie/:id",
    exact: false,
    component: Movie
  }
];