import React, { Component } from "react";
import {
  MAP_PAGE_LOADED,
  SET_SELECTED_DESTINATION_FEATURES
} from "../../constants/actionTypes";
import agent from "../../agent";
import { connect } from "react-redux";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import injectTapEventPlugin from "react-tap-event-plugin";
import { Jane, JaneLayer, LocalSearch, Marker } from "jane-maps";
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

  render() {
    const searchResult = this.props.search.selectedSuggestion;
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
              {searchResult && (
                <JaneLayer id="searchResult" hidden>
                  <Marker
                    feature={searchResult}
                    label={searchResult.properties.title}
                    flyTo
                    zoom={10}
                  />
                </JaneLayer>
              )}

              <LocalSearch>
                <SearchBar />
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
