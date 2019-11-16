import React, { Component } from "react";

export default class Search extends Component {
  render() {
    const { handleChange, handleSubmit, search } = this.props;

    return (
      <div className="container">
        <div className="row">
          <div className="text-center col-10 mx-auto col-md-8 mt-5">
            <h1 className="text-slanted">
              Search Recipes with{" "}
              <strong className="text-orange">myRecipes</strong>
            </h1>

            <form className="mt-4">
              <label htmlFor="search" className="text-capitalize">
                recipes separated by comma
              </label>
              <div className="input-group">
                <input
                  type="text"
                  name="search"
                  className="form-control"
                  placeholder="Carrots,Onion,Ginger"
                  value={search}
                  onChange={handleChange}
                />
                <div className="input-group-append">
                  <button
                    type="submit"
                    className="input-group-text bg-info text-white"
                    onClick={handleSubmit}
                  >
                    {" "}
                    <i className="fas fa-search"></i>{" "}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
