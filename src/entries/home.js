import React from 'react';
import { render } from 'react-dom';
import Home from '../pages/containers/home';
// import Playlist from './src/playlist/components/playlist'
import data from '../api.json';
import { createStore } from 'redux';

const initialState = {
  data: {
    ...data
  }
};

const store = createStore(
  (state) => state,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

);

const homeContainer = document.getElementById('home-container');

// const holaMundo = <h1>Hello Mundo!</h1>;
render(<Home data={data}/>, homeContainer);
