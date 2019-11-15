import React, { Component } from "react";
import RecipeList from "../components/RecipeList";
import Search from "../components/Search";
import { RecipeData } from "../data/tempList";

export default class Recipe extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    recipe: RecipeData,
    search: ""
  };

  handleChange = e => {
    this.setState({
      search: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
  };
  render() {
    return (
      <>
        <Search
          search={this.state.search}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <RecipeList recipes={this.state.recipe} />
      </>
    );
  }
}
