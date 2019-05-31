import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Card.scss';

class Card extends React.Component {

    getFullYear(date) {
        return new Date(date).getFullYear();
    }
    
    render() {
        // console.log(this.props)
        const movie = this.props.movie;
        const getFullYear = new Date(movie.release_date).getFullYear();
       return (
        <Link className="card" to={ '/movie/' + movie.id }>
            <article>
                <img className="card-img" src= { movie.poster_path } alt="" />
                <div className="card-text">
                    <div className="card-text-title-box">
                    <h4>{ movie.title }</h4>
                    <span className="card-text-title-box-year">{ getFullYear }</span>
                    </div>
                    <div>{ movie.genres.map(genre => 
                    <span className="card-text-genre" key={ genre }>{ genre } |</span>
                    ) }</div>
                </div>
            </article>
        </Link>        
       )
    }
}

export default Card;
