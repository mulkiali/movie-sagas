import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import {takeEvery, put} from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
   yield takeEvery("FETCH_MOVIES", fetchMovies);
   yield takeEvery("FETCH_GENRES", fetchGenres);
   yield takeEvery("CHANGE_INFO", edit);
}

function* fetchMovies(action){
    const movieArray = yield axios.get('/movies')
    console.log('movie array:', movieArray );
    yield put({type: 'SET_MOVIES', payload: movieArray.data})
}


function* fetchGenres(action){
    const id = action.payload
    console.log('in payload', id)
    try{
    const response = yield axios.get(`/genres/${id}`);
    yield put({type: 'SET_GENRES', payload: response.data});
    }catch(error){
        console.log('error getting genres', error)
    }
}

function* edit(action){
    const id = action.payload.id
    console.log('in payload', id)
    try{
    const response = yield axios.put(`/edit/${id}`);
    yield put({type: 'FETCH_GENRES', payload: response.data});
    }catch(error){
        console.log('error editing', error)
    }
}
// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}



// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
