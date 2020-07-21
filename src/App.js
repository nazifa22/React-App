import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Counters from './Components/Counter/counters'
import Movies from './Components/Movies/Movies'
import Navbar from './Components/Navbar/Navbar';
import Customers from './Components/Pages/Customers';
import Rentals from './Components/Pages/Rentals';
import NotFound from './Components/Pages/NotFound';
import MovieForm from './Components/Pages/MovieForm';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import './App.css';

const App = () => {
  return (
    <>
      <Navbar/>
      <main className="container">
        <Switch>
          <Route path="/movies/new" component={MovieForm} />
          <Route path='/register' component={Register}/>
          <Route path='/login' component={Login} />
          <Route path='/rentals' component={ Rentals } />
          <Route path='/customers' component={ Customers } />
          <Route path='/counter' component={ Counters } />
          <Route path='/movies' component={ Movies } />
          {/* <Route path='/' exact component={ Movies } /> */}
          <Route path='/404-page' component={ NotFound } />
          <Redirect from='/' exact to='/movies' />
          <Redirect to='/404-page' exact />
        </Switch>
      </main>
    </>
  )
}

export default App;
