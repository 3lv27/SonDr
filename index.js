import React from 'react';
import { render } from 'react-dom';

import Media from './src/playlist/components/media';

const app = document.getElementById('app')

// const holaMundo = <h1>Hello Mundo!</h1>;
render(<Media title='¿Qué es responsive design' type='video' author='3lv27' image='./images/covers/responsive.jpg'/> , app)