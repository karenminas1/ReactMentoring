import React from "react";
import './Search.scss';

class Search extends React.Component {

  render() {
    return (

      <div className="search">
        <div>
          <p className="search-input-label">FIND YOUR MOVIE</p>
          <input className="search-input" id="search-movie" type="text" placeholder="Enter movie name"></input>
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


export default Search;