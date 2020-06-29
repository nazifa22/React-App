import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Game from './Components/Game/Game';
import Temperature from './Components/Temperature/Temperature';
import Event from './Components/Events/Events';
import Counter from './Components/Counter/counter'
import Movies from './Components/Movies/Movies'

class App extends Component {

  render() {
    return (
      <main className="container">
          <Movies />
          <Counter /> 
      </main>
    )
  }

}

export default App;
