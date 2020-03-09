import React, { Component } from 'react';
import {connect} from 'react-redux';



class Details extends Component {
  //sends user to edit page from details page
    handleClick1 = (id) => {
        this.props.history.push('/edit')
  }

    //sends user back to the list page
    handleClick2 = () => {
        this.props.history.push('/')
  }


  render() {
    return (
      //maps through data to display details of selected movie 
      <div className="Details">
        <p>Details</p>
        <div>
          {this.props.details.map(details => {
            return (
              <div key={details.id}>
              <p> {details.name}, {details.title}</p>
              <p> {details.description}</p>
              </div>
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
    details: reduxState.details,
    movies: reduxState.movies
});

export default connect(getStore)(Details);