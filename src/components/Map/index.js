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

const mapDispatchToProps = dispatch => ({
  onLoad: payload => dispatch({ type: MAP_PAGE_LOADED, payload })
});

class Mapp extends Component {
  componentWillMount() {
    const sitesPromise = agent.Data.magical;
    this.props.onLoad(sitesPromise());
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div className="fullscreen">
            <Jane mapboxGLOptions={mapboxGLOptions}>
              <Destinations />
            </Jane>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(Mapp);
