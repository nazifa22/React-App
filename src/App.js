import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Movies from "./Components/movies";
import MovieForm from "./Components/movieForm";
import Customers from "./Components/customers";
import Rentals from "./Components/rentals";
import NotFound from "./Components/notFound";
import NavBar from "./Components/navBar";
import Game from './Components/Game/Game';
import Counter from './Components/Counter/counters';
import Login from './Components/loginForm';
import Register from './Components/registerForm';
import "./App.css";
import "antd/dist/antd.css";
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/movies" component={Movies} />
            <Route path="/game" component={Game} />
            <Route path="/counter" component={Counter} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
