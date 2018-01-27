import React, { Component } from "react";
import {
  MAP_PAGE_LOADED,
  SET_SELECTED_DESTINATION_FEATURES,
  LOAD_SEARCH_SUGGESTIONS,
  SET_SUGGESTION_VALUE,
  SET_SELECTED_SUGGESTION,
  UNSET_SELECTED_SUGGESTION
} from "../../constants/actionTypes";
import agent from "../../agent";
import { connect } from "react-redux";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import injectTapEventPlugin from "react-tap-event-plugin";
import { Jane, LocalSearch } from "jane-maps";
import { mapboxGLOptions } from "../../config";
import Destinations from "./Destinations";
import SidePop from "./SidePop";
import SearchBar from "./SearchBar";

import "jane-maps/dist/styles.css";

const Promise = global.Promise;

injectTapEventPlugin();

const mapStateToProps = state => {
  return {
    ...state
  };
};

const mapDispatchToProps = dispatch => ({
  //get data on page load
  onLoad: (payload, category) => dispatch({ type: MAP_PAGE_LOADED, payload }),
  //search stuff
  loadSearchSuggestions: suggestions =>
    dispatch({ type: LOAD_SEARCH_SUGGESTIONS, suggestions }),
  setSearchValue: value => dispatch({ type: SET_SUGGESTION_VALUE, value }),
  setSelectedSuggestion: selectedFeature =>
    dispatch({ type: SET_SELECTED_SUGGESTION, selectedFeature }),
  clearSuggestions: () => dispatch({ type: UNSET_SELECTED_SUGGESTION }),
  //on click of feature
  onDestClick: features => {
    dispatch({ type: SET_SELECTED_DESTINATION_FEATURES, features });
  }
});

class Mapp extends Component {
  componentWillMount() {
    const magicalPromise = agent.Data.magical;
    const bonfirePromise = agent.Data.bonfire;
    this.props.onLoad(Promise.all([magicalPromise(), bonfirePromise()]));
  }
  handleDestClick(features, map) {
    this.props.onDestClick(features);
  }
  handleOnDragEnd() {
    this.props.onDestClick(null);
  }
  handleOnZoomEnd() {
    this.props.onDestClick(null);
  }
  onSuggestionsFetchRequested = value => {
    const searchPromise = agent.Data.search;
    this.props.loadSearchSuggestions(searchPromise(value));
  };
  onSuggestionsClearRequested = () => {
    // this.props.clearSuggestions();
  };
  onSearchChange = (e, obj) => {
    this.props.setSearchValue(obj.newValue);
  };
  onSuggestionSelected = (e, o) => {
    this.props.setSearchValue(o.suggestionValue);
    this.props.setSelectedSuggestion(o.suggestion);
  };

  clearSearchInput = () => {
    this.props.clearSuggestions();
  };

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div className="fullscreen">
            <Jane
              mapboxGLOptions={mapboxGLOptions}
              onDragEnd={this.handleOnDragEnd.bind(this)}
              onZoomEnd={this.handleOnZoomEnd.bind(this)}
            >
              <Destinations
                sites={this.props.sites.magical}
                onDestClick={this.handleDestClick.bind(this)}
                selectedFeature={this.props.sites.clickedDest}
              />
              <LocalSearch>
                <SearchBar
                  onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                  onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                  onSearchChange={this.onSearchChange}
                  onSuggestionSelected={this.onSuggestionSelected}
                  clearSearchInput={this.clearSearchInput}
                  suggestions={this.props.search.suggestions}
                  value={this.props.search.value}
                />
              </LocalSearch>
            </Jane>
            <div className="selected-features" style={{ right: "0px" }}>
              <SidePop />
            </div>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Mapp);
