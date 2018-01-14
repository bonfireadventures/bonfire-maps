import React, { Component } from "react";
import { MAP_PAGE_LOADED } from "../../constants/actionTypes";
import agent from "../../agent";
import { connect } from "react-redux";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import injectTapEventPlugin from "react-tap-event-plugin";
import { Jane } from "jane-maps";
import { mapboxGLOptions } from "../../config";
import Destinations from "./Destinations";

import "jane-maps/dist/styles.css";

injectTapEventPlugin();

const mapStateToProps = state => {
  return {
    ...state.magical
  };
};

const mapDispatchToProps = dispatch => ({
  onLoad: (payload, category) => dispatch({ type: MAP_PAGE_LOADED, payload })
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

  render() {
    let loading = false;
    if (!this.props.sites) {
      loading = true;
    }
    console.log(loading);
    return (
      <div>
        <MuiThemeProvider>
          <div className="fullscreen">
            <Jane mapboxGLOptions={mapboxGLOptions}>
              <Destinations sites={this.props.sites} />
            </Jane>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Mapp);
