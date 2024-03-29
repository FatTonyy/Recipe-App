import React, { Component } from "react";
import { recipeData } from "../data/tempDetails";
import { Link } from "react-router-dom";

export default class SingleRecipe extends Component {
  constructor(props) {
    super(props);
    const id = this.props.match.params.id;
    this.state = {
      recipe: recipeData,
      //todo when using a n api set recipe :{}, and loading to true [currently using a dummy data]
      id,
      loading: false
    };
  }

  // ! single recipe page ajax request  [always restart server when you set the key]
  // async componentDidMount() {
  //   const url = `API goes in here key=${process.REACT_APP_API_KEY} &rId=${this.state.id}`;
  //   try {
  //     const response = await fetch(url);
  //     const responseData = await response.json();
  //     this.setState({
  //       recipe: recipeData.recipe,
  //       loading: false
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  render() {
    const {
      image_url,
      publisher,
      publisher_url,
      source_url,
      title,
      ingredients
    } = this.state.recipe;

    if (this.state.loading) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3">
              <h2 className="text-orange text-center">Loading myRecipe</h2>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="container my-5">
        <div className="row">
          {/* Link and Image */}
          <div className="col-10 mx-auto col-md-6 my-3">
            <Link to="/recipes" className="btn btn-warning mb-5">
              Back to myRecipe list
            </Link>

            <img
              src={image_url}
              className="d-block w-100"
              style={{ maxHeight: "30rem" }}
              st
              alt="recipe"
            />
          </div>

          {/* others/ info */}
          <div className="col-10 mx-auto col-md-6 my-3">
            <h6 className="text-uppercase">{title}</h6>
            <h6 className="text-uppercase text-warning text-slanted">
              {" "}
              provided by {publisher}
            </h6>

            <a
              href={publisher_url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-primary mt-2 text-capitalize"
            >
              publisher webpage
            </a>
            <a
              href={source_url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-success mt-2 mx-2 text-capitalize"
            >
              recipe url
            </a>

            <ul className="list-group mt-4">
              <h2 className="mt-3 mb-4">Ingredients</h2>
              {ingredients.map((item, index) => {
                return (
                  <li key={index} className="list-group-item text-slanted">
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
