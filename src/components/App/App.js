import React, { Component } from 'react';
import './App.css';
import {makeStyles} from '@material-ui/styles'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import Details from '../Details/Details';
import Edit from '../Edit/Edit';
import MovieList from '../MovieList/MovieList';


class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
     <Router>
     
      <div className="App">
        <p>Mulki's Movie List</p>
      </div>
            <Route exact path='/' component={MovieList} />
            <Route path='/details' component={Details} />
            <Route path='/edit' component={Edit} />
      </Router>
    );
  }
}

export default App;
