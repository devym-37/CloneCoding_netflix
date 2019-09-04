import React from "react";
import SearchPresenter from "./SearchPresenter";
import { MoviesApi, TVApi } from "../../api";

export default class extends React.Component {
  state = {
    movieResults: null,
    tvResults: null,
    searchTerm: "",
    loading: false,
    error: null
  };

  handleSubmit = () => {
    const { searchTerm } = this.state;
    if (searchTerm !== "") {
      this.searchByTerm();
    }
  };

  searchByTerm = async () => {
    const { searchTerm } = this.state;
    try {
      const {
        data: { results: movieResults }
      } = await MoviesApi.search(searchTerm);
      const {
        data: { results: tvResults }
      } = await TVApi.search(searchTerm);
      this.setState({ movieResults, tvResults });
      this.setState({ loading: true });
    } catch {
      this.setState({ error: "Can't find results." });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { movieResults, tvResults, searchTerm, loading, error } = this.state;
    console.log(this.state);
    return (
      <SearchPresenter
        movieResults={movieResults}
        tvResults={tvResults}
        SearchPresenter={searchTerm}
        loading={loading}
        error={error}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}
