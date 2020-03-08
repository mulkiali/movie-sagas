import React, { Component } from 'react';
import {connect} from 'react-redux'

class MovieList extends Component {
    state={
        movieList: ''
    }
  componentDidMount(){
      this.getMovies()
  }

    getMovies = () => {
        console.log('I want to see:', this.state.movieList)
        this.props.dispatch({
           type: "FETCH_MOVIES", payload: this.state.movieList
        })
    }

  render() {
    return (
      <div className="MovieList">
      <ul>
                {this.props.reduxState.movies.map((movies) => {
                    return (
                    <li key={movies.id}><img src= {movies.poster}/><h1>{movies.title}</h1>
                    <br/>{movies.description}</li>
                    );
                })}
            </ul>
      </div>
    );
  }
}

const getStore = reduxState => ({
    reduxState
});


export default connect(getStore)(MovieList);