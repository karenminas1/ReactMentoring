import React from "react";
import './SearchSort.scss';

class SearchSort extends React.Component {
    onClickk() {
    }
    render() {
       return (
        <div className="search-sort">
            <span>{ this.props.foundedMovie } movies found</span>
            <span className="spacer"></span>
            <span className="sort-text">Sort by</span>
            <span className="sort-button button-active" onClick={ this.onClickk() }>release date</span>
            <span className="sort-button">rating</span>
        </div>
       )
    }

};

export default SearchSort;