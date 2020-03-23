import React from "react";
import TVPresenter from "./TVPresenter";
import { tvApi } from "api";

export default class extends React.Component {
  state = {
    topRated: null,
    popular: null,
    airingToday: null,
    onTheAir: null,
    loading: true,
    error: null
  };

  async componentDidMount() {
    try {
      const {
        data: { results: topRated }
      } = await tvApi.topRated();
      const {
        data: { results: popular }
      } = await tvApi.popular();
      const {
        data: { results: airingToday }
      } = await tvApi.airingToday();
      const {
        data: { results: onTheAir }
      } = await tvApi.onTheAir();
      this.setState({ topRated, popular, airingToday, onTheAir });
    } catch {
      this.setState({
        error: "Can't find TV information."
      });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const {
      topRated,
      popular,
      airingToday,
      onTheAir,
      loading,
      error
    } = this.state;
    return (
      <TVPresenter
        topRated={topRated}
        popular={popular}
        airingToday={airingToday}
        onTheAir={onTheAir}
        loading={loading}
        error={error}
      />
    );
  }
}
