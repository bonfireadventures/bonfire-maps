import React, { Component } from "react";
import { MAP_PAGE_LOADED, DEST_CLICKED } from "../../constants/actionTypes";
import agent from "../../agent";
import { connect } from "react-redux";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import injectTapEventPlugin from "react-tap-event-plugin";
import { Jane } from "jane-maps";
import { mapboxGLOptions } from "../../config";
import Destinations from "./Destinations";
import SidePop from "./SidePop";

import "jane-maps/dist/styles.css";

injectTapEventPlugin();

const mapStateToProps = state => {
  return {
    ...state.magical
  };
};

const mapDispatchToProps = dispatch => ({
  onLoad: (payload, category) => dispatch({ type: MAP_PAGE_LOADED, payload }),
  onDestClick: features => {
    dispatch({ type: DEST_CLICKED, features });
  }
});

class Mapp extends Component {
  componentWillMount() {
    const sitesPromise = agent.Data.magical;
    if (this.props.category) {
      this.props.onLoad(
        sitesPromise(`where attractiontype=${this.props.category}`)
      );
    }
    this.props.onLoad(sitesPromise());
  }
  handDestClick(features, map) {
    this.props.onDestClick(features);
    console.log("clicked");
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div className="fullscreen">
            <Jane mapboxGLOptions={mapboxGLOptions}>
              <Destinations
                sites={this.props.sites}
                onDestClick={this.handDestClick.bind(this)}
              />
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
