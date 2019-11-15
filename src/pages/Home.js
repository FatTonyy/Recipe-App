import React, { Component } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <Header title="Welcome To myRecipes" className="mt-3">
        <Link
          to="recipe"
          className="text-uppercase btn btn-outline-info  btn-lg  mt-3"
        >
          Search Recipes
        </Link>
      </Header>
    );
  }
}
