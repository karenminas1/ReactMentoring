import React from "react";
import './Card.scss';

class Card extends React.Component {

    getFullYear(date) {
        return new Date(date).getFullYear();
    }
    
    render() {
        const movie = this.props.movie;
        const getFullYear = new Date(movie.release_date).getFullYear();
       return (
        <article className="card">
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
        
       )
    }
}

export default Card;
