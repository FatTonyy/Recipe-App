import React, { Component } from "react";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import SingleRecipe from "./pages/SingleRecipe";
import Default from "./pages/Default";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
export default class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <main>
          {/* navBar */}
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/recipe/" exact component={Recipe} />
            <Route path="/recipe/:id" component={SingleRecipe} />
            <Route component={Default} />
          </Switch>
        </main>
      </Router>
    );
  }
}
