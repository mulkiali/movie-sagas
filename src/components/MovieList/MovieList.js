import React, { Component } from 'react';
import {connect} from 'react-redux'

class MovieList extends Component {
    state={
        movieList: '',
    }
//on page load shows movies from DB
  componentDidMount(){
      this.getMovies()
  }

    getMovies = () => {
        this.props.dispatch({
           type: "FETCH_MOVIES", payload: this.state.movieList
        })
    }

//sends user to details page when clicking the movie poster
    handleClick = (id) => {
       this.props.dispatch({
        type: "FETCH_DETAILS", payload: id
     })
     this.props.history.push('/details');
    }

  render() {

    return (
      <div className="MovieList">
      <ul>
                {this.props.reduxState.movies.map((movies) => {
                    return (
                    <li key={movies.id}><button onClick={()=>this.handleClick(movies.id)}><img src= {movies.poster} alt="movie poster"/></button><h1>{movies.title}</h1>
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