import React from "react";

import Header from '../components/Header/Header';
import Card from '../components/Card/Card';
import SearchSort from '../components/SearchSort/SearchSort';
import { getMovies } from '../services/http-services';
import style from  './App.scss';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      sortBy: null,
    };
    
  }
  
  componentDidMount() {
    getMovies('title', 9)
      .then(res => this.setState({
        movies: res.data,
      }))
      .catch(err => console.log(err))
  }


    render() {
      return (
        <div className="app-container">
        <Header />
        <SearchSort foundedMovie={ this.state.movies.length }/>
        <div className="cards">{ this.state.movies.map(movie => <Card key={ movie.id } movie={ movie }/>) }</div>
          
        </div>
      );
    }
  }

export default App;