import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import './Movie.scss';

import { getMovie } from '../../services/http-services';

class Movie extends React.Component {


constructor(props) {
    super(props);

    this.state = {
        movie: {},
    };
    }
    
    componentDidMount() {
        const { match } = this.props;
        getMovie(match.params.id)
            .then(res => this.setState({
                movie: res,
            }))
            .catch(err => console.log(err))
    }

    getYear(date) {
        return new Date(date).getFullYear();
    }

  render() {
    const { title, poster_path, release_date, overview } = this.state.movie;
    const getYear = this.getYear(release_date);

    return (
        <div className="movie-container-wrapper">
            <div className="movie-container">
                <div className="movie-container-image-wrapper">
                    <img src={poster_path} alt=""/>
                </div>
                <div className="movie-container-description">
                    <h2 className="movie-container-title">{ title }</h2>
                    <span className="movie-container-sub-title">sub title</span>
                    <div className="movie-container-year"><span>{ getYear | '' }</span><span>122min</span></div>
                    <p>{ overview }</p>
                </div>
            </div>
            <Link className="search-button" to="/">Search</Link>
        </div>
    );
  }
}


export default Movie;