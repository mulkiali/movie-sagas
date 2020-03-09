import React, { Component } from 'react';
import {connect} from 'react-redux';



class Details extends Component {
    handleClick1 = (id) => {
        this.props.history.push('/edit')
    }
    handleClick2 = () => {
        this.props.history.push('/')
    }
  render() {
    return (
      <div className="Details">
        <p>Details</p>
        <div>
            
                    {this.props.genres.map(genre => {
                        return (
                            <li key={genre.id}>
                            <p> {genre.name}</p>
                            <p> {genre.title}</p>
                            </li>
                        )
                    })}
                </div>
         <button onClick={this.handleClick2} >Back to List</button>
        <button onClick={this.handleClick1}>Edit</button>

      </div>
     
    );
  }
}

const getStore = reduxState => ({
    genres: reduxState.genres,
    movies: reduxState.movies
});

export default connect(getStore)(Details);