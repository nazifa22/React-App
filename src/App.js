import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Game from './Components/Game/Game';
import Temperature from './Components/Temperature/Temperature';
import Event from './Components/Events/Events';
import Counters from './Components/Counter/counters'
import Movies from './Components/Movies/Movies'

const App = () => {
  return (
    <main className="container">
        <Movies />
        <Counters /> 
    </main>
  )
}

export default App;
