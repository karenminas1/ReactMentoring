import React from "react";
import ReactDOM from "react-dom";

import Header from '../components/Header/Header';
import Card from '../components/Card/Card';
import SearchSort from '../components/SearchSort/SearchSort';
import { getMovies } from '../services/http-services';
import './App.scss';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      sortBy: null,
    };
    
  }

  ff(sortBy) {
    this.setState({ sortBy });
  };
  
  componentDidMount() {
    getMovies('title', 9).then(res => this.setState({
      movies: res.data,
    }));
  }


    render() {
      console.log(this.state,"parent")
      return (
        <div className="app-container">
        <Header />
        <SearchSort foundedMovie={ this.state.movies.length } parentState= {this.ff}/>
        <div className="cards">{ this.state.movies.map(movie => <Card key={ movie.id } movie={ movie }/>) }</div>
          
        </div>
      );
    }
  }

  
  ReactDOM.render(
    <App />,
    document.getElementById('app')

    );

export default App;