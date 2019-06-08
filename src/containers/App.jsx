import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import style from  './App.scss';

import Card from '../components/Card/Card';
import Header from '../components/Header/Header';
import SearchSort from '../components/SearchSort/SearchSort';

import { getMovies } from '../services/http-services';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectAllMovies } from '../store/actions/index';

class App extends React.Component {

  constructor(props) {
    super(props);    
  }
  
  componentDidMount() {
    getMovies('', 'title', 9, 'release_date')
      .then(res => this.props.selectAllMovies(res.data, 'title'))
      .catch(err => console.log(err))
  }


    render() {
      return (
        <Router>
        <div className="app-container">
          <Header />
          <SearchSort foundedMovie={ this.props.movies.length }/>
          <div className="cards">{ this.props.movies.map(movie => <Card key={ movie.id } movie={ movie }/>) }</div>
        </div>
        </Router>
      );
    }
  }

  function mapStateToProps(state) {
    return {
      movies: state.movies ? state.movies : []
    }
  }

  function matchDispatchToProps(dispatch) {
    return bindActionCreators({ selectAllMovies: selectAllMovies }, dispatch);
  }

export default  connect(mapStateToProps, matchDispatchToProps)(App);