// src/index.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Chakra from './ChakraProvider';

ReactDOM.render(
    <Chakra>
        <App />
    </Chakra>,
    document.getElementById('root')
);
