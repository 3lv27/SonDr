import React from 'react';
import { render } from 'react-dom';
import Home from '../pages/containers/home';
// import Playlist from './src/playlist/components/playlist'
import data from '../api.json';

const homeContainer = document.getElementById('home-container');

// const holaMundo = <h1>Hello Mundo!</h1>;
render(<Home data={data}/>, homeContainer);
