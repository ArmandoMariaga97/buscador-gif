import React from 'react';
import ReactDOM from 'react-dom'
import GifExpertApp from './GifExpertApp';
import './styles.css';

const gifAppContent = document.getElementById("gifApp")

ReactDOM.render(
    <GifExpertApp />,
    gifAppContent
)