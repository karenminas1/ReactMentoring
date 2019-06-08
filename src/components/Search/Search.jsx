import React from "react";
import './Search.scss';

import { getMovies } from '../../services/http-services';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { foundMovies } from '../../store/actions/index';
class Search extends React.Component {

  constructor() {
    super();
    this.searchMovie = this.searchMovie.bind(this);
  }

  searchMovie(e) {
    getMovies(e.target.value, 'title')
      .then(res => {
        this.props.foundMovies(res.data)
      })
  }


  render() {
    return (

      <div className="search">
        <div>
          <p className="search-input-label">FIND YOUR MOVIE</p>
          <input onKeyUp={this.searchMovie} className="search-input" id="search-movie" type="text" placeholder="Enter movie name"></input>
        </div>
        <div className="search-buttons-box">
          <div>search by</div>
          <button className="button active">TITLE</button>
          <button className="button b-c-grey ">GENRE</button>
          <span className="spacer"></span>
          <button className="search-button b-c-pink">Search</button>
        </div>
      </div>
    );
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ foundMovies: foundMovies }, dispatch);
}

export default connect(null, matchDispatchToProps)(Search);